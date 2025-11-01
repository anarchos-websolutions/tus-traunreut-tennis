export default defineEventHandler(async (event) => {
  // Skip auth check for login endpoint and public routes
  const url = getRequestURL(event);
  if (url.pathname === '/api/auth/login' || !url.pathname.startsWith('/api/admin')) {
    return;
  }

  // Check for admin session cookie
  const sessionToken = getCookie(event, 'admin_session');

  if (!sessionToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  // Verify session (in production, check against database/cache)
  // For now, any valid session token is accepted
  // You could store sessions in Redis or a database
});
