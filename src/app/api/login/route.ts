import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
	try {
		await dbConnect();
		const { email, password } = await request.json();

		if (!email || !password) {
			return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
		}

		const user = await User.findOne({ email });

		if (!user || user.password !== password) {
			return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
		}

		// Update last logged in
		user.lastLoggedin = new Date();
		await user.save();

		// Set session cookie (simple implementation for now)
		const cookieStore = await cookies();
		cookieStore.set('session', 'authenticated', {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			maxAge: 60 * 60 * 24 * 7, // 1 week
			path: '/',
		});

		return NextResponse.json({ message: 'Login successful' });
	} catch (error: any) {
		console.error('Login error:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
