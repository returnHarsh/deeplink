import jwt from "jsonwebtoken"

const JWT_SECRET=process.env.JWT_SECRET || ' '

interface Payload{
	email:string
	userId:string
}

export function signToken(payload:Payload):string {
	const token=jwt.sign(payload,JWT_SECRET,{expiresIn:'7d'})
	return token
}

export function verifyToken(token:string):Payload | null {
	try {
		return jwt.verify(token,JWT_SECRET) as Payload
	} catch (error) {
		console.error("Token verification failed:", error);
		return null;
	}
}
	