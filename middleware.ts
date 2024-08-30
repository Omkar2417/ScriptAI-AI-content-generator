import {clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
 // Match all routes under /dashboard/
  // Add other routes that you want to protect
]);

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)','/','/(api|trcp)(.*)'],
};
