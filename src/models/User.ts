import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
	email: string;
	password: string;
	lastLoggedin: Date;
}

const UserSchema: Schema = new Schema({
	email: {
		type: String,
		required: [true, 'Please provide an email.'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Please provide a password.'],
	},
	lastLoggedin: {
		type: Date,
		default: Date.now,
	},
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
