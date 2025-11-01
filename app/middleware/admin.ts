export default defineNuxtRouteMiddleware((to, _) => {
  // Check if we're already on the login page
  if (to.path === '/admin/login') {
    return;
  }

  // Check for admin session cookie on client
  const sessionCookie = useCookie('admin_session', {
    httpOnly: false, // Need to read it on client for middleware
  });

  if (!sessionCookie.value) {
    return navigateTo('/admin/login');
  }
});
