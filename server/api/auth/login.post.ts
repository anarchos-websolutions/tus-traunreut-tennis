export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { password } = body;

  if (!password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Password is required',
    });
  }

  const config = useRuntimeConfig();
  const adminPassword = config.adminPassword || process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Admin password not configured',
    });
  }

  // Simple password comparison (for basic auth)
  if (password !== adminPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid password',
    });
  }

  // Set session cookie (httpOnly: false so client middleware can read it)
  const sessionToken = await generateSessionToken();
  setCookie(event, 'admin_session', sessionToken, {
    httpOnly: false, // Allow client-side reading for middleware
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return { success: true };
});

async function generateSessionToken(): Promise<string> {
  const { randomBytes } = await import('crypto');
  return randomBytes(32).toString('hex');
}
