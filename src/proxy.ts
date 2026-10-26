import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
	const session = request.cookies.get('session');
	console.log('session is : ' , session)
	const { pathname } = request.nextUrl;

	// Protect dashboard routes (e.g. /dashboard, /dashboard/[slug], /generate)
	const isProtectedRoute = pathname.startsWith('/dashboard') || pathname === '/generate';

	// If not logged in and attempting to access protected route, redirect to /login
	if (!session && isProtectedRoute) {
		const loginUrl = new URL('/login', request.url);
		return NextResponse.redirect(loginUrl);
	}

	// Redirect authenticated users away from /login and /signup
	if (session && (pathname === '/login' || pathname === '/signup')) {
		return NextResponse.redirect(new URL('/dashboard', request.url));
	}

	return NextResponse.next();
}

export const middleware = proxy;
export default proxy;

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!_next/static|_next/image|favicon.ico).*)',
	],
};
