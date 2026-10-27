import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
	const session = request.cookies.get('session');
	const { pathname } = request.nextUrl;

	// Protected routes
	const isProtectedApi = pathname.startsWith('/api/gen');
	const isProtectedPage = pathname.startsWith('/dashboard') || pathname === '/generate';

	// Reject unauthenticated requests to protected API routes
	if (!session && isProtectedApi) {
		return NextResponse.json({ error: 'Unauthorized: Please log in' }, { status: 401 });
	}

	// Redirect unauthenticated requests to protected page routes
	if (!session && isProtectedPage) {
		const loginUrl = new URL('/login', request.url);
		return NextResponse.redirect(loginUrl);
	}

	// Redirect authenticated users away from /login and /signup
	if (session && (pathname === '/login' || pathname === '/signup')) {
		return NextResponse.redirect(new URL('/dashboard', request.url));
	}

	// Forward user info in request headers if session token exists
	const requestHeaders = new Headers(request.headers);
	if (session?.value) {
		try {
			const parts = session.value.split('.');
			if (parts.length === 3) {
				const payloadBase64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
				const payloadJson = atob(payloadBase64);
				const parsed = JSON.parse(payloadJson);
				if (parsed?.userId) {
					requestHeaders.set('x-user-id', parsed.userId);
				}
				if (parsed?.email) {
					requestHeaders.set('x-user-email', parsed.email);
				}
			}
		} catch (e) {
			console.warn('Could not decode session token in proxy:', e);
		}
	}

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
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
