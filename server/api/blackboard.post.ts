export default defineEventHandler(async (event) => {
  const contentType = getRequestHeader(event, 'content-type') || '';

  try {
    let title = '';
    let description = '';
    let recipients: string[] = [];
    let imageBuffer: Buffer | null = null;
    let imageFilename = '';
    let imageMime = '';

    if (contentType.includes('multipart/form-data')) {
      // Read form-data
      const formData = await readMultipartFormData(event);
      if (formData) {
        for (const part of formData) {
          if (part.type === 'file') {
            imageBuffer = part.data as Buffer;
            imageFilename = part.filename || 'image';
            imageMime = part.type || 'application/octet-stream';
          }
          else if (part.name === 'title') {
            title = String(part.data);
          }
          else if (part.name === 'description') {
            description = String(part.data);
          }
          else if (part.name === 'recipients') {
            recipients.push(String(part.data));
          }
        }
      }
    }
    else {
      const body = await readBody(event);
      title = body.title;
      description = body.description;
      recipients = Array.isArray(body.recipients) ? body.recipients : [];
    }

    if (!title || !description || recipients.length === 0) {
      throw createError({ statusCode: 400, statusMessage: 'Missing required fields' });
    }

    const sent = await sendBlackboardEmail({ title, description, recipients, imageBuffer, imageFilename, imageMime });
    return { ok: true, sent };
  }
  catch (error: unknown) {
    throw createError({ statusCode: 500, statusMessage: error instanceof Error ? error.message : 'Failed to send' });
  }
});

interface SendPayload {
  title: string;
  description: string;
  recipients: string[];
  imageBuffer: Buffer | null;
  imageFilename: string;
  imageMime: string;
}

async function sendBlackboardEmail(payload: SendPayload) {
  const { title, description, recipients, imageBuffer, imageFilename, imageMime } = payload;

  // Map logical recipient groups to actual email addresses via runtime config
  const config = useRuntimeConfig();
  const groups: Record<string, string[]> = {
    board: (config.boardEmails as string)?.split(',').filter(Boolean) || [],
    coaches: (config.coachEmails as string)?.split(',').filter(Boolean) || [],
    members: (config.memberEmails as string)?.split(',').filter(Boolean) || [],
  };

  const to: string[] = [];
  for (const key of recipients) {
    if (groups[key]) to.push(...groups[key]);
    else if (key.includes('@')) to.push(key);
  }
  const uniqueTo = Array.from(new Set(to));
  if (uniqueTo.length === 0) throw new Error('No resolved recipients');

  const transporter = await getMailer();
  const attachments = [];
  if (imageBuffer) {
    attachments.push({ filename: imageFilename, content: imageBuffer, contentType: imageMime });
  }

  const info = await transporter.sendMail({
    from: config.smtpFrom,
    to: uniqueTo.join(','),
    subject: `[Schwarzes Brett] ${title}`,
    text: description,
    html: `<h2>${escapeHtml(title)}</h2><p>${escapeHtml(description).replace(/\n/g, '<br>')}</p>`,
    attachments,
  });

  return { messageId: info.messageId, to: uniqueTo };
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function getMailer() {
  const { smtpHost, smtpPort, smtpUser, smtpPass, smtpSecure } = useRuntimeConfig();
  const nodemailer = await import('nodemailer');
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort || 587),
    secure: String(smtpSecure || '').toLowerCase() === 'true',
    auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
  });
  return transporter;
}
