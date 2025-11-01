import { readMultipartFormData } from 'h3';

export default defineEventHandler(async (event) => {
  // Check admin auth
  const sessionToken = getCookie(event, 'admin_session');
  if (!sessionToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  const formData = await readMultipartFormData(event);

  if (!formData || formData.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No file provided',
    });
  }

  const fileEntry = formData.find(entry => entry.name === 'file' && entry.filename);
  if (!fileEntry) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No file found in request',
    });
  }

  // Verify it's a PDF
  if (!fileEntry.filename?.endsWith('.pdf')) {
    throw createError({
      statusCode: 400,
      statusMessage: 'File must be a PDF',
    });
  }

  try {
    // Process PDF and add to Weaviate
    const result = await processPDFAndAddToWeaviate(
      fileEntry.data,
      fileEntry.filename,
    );

    return {
      success: true,
      filename: fileEntry.filename,
      chunksAdded: result.chunksAdded,
    };
  }
  catch (error: unknown) {
    console.error('Error processing PDF:', error);
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : 'Failed to process PDF',
    });
  }
});
