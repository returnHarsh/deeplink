import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { signToken } from '@/lib/jwt';

export async function POST(request: Request) {
	try {
		await dbConnect();
		const { email, password } = await request.json();

		if (!email || !password) {
			return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
		}

		const cleanEmail = email.trim().toLowerCase();
		const user = await User.findOne({ email: cleanEmail });

		if (!user) {
			return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
		}

		// Update last logged in
		user.lastLoggedin = new Date();
		await user.save();

		// Generate JWT token
		const token = signToken({
			userId: user._id.toString(),
			email: user.email,
		});

		// Set session cookie
		const cookieStore = await cookies();
		cookieStore.set('session', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			maxAge: 60 * 60 * 24 * 7, // 1 week
			path: '/',
		});

		return NextResponse.json({
			message: 'Login successful',
			token,
			user: {
				id: user._id,
				name: user.name,
				companyName: user.companyName,
				email: user.email,
			},
		});
	} catch (error: any) {
		console.error('Login error:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
