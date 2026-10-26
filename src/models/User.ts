import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
	name?: string;
	companyName?: string;
	email: string;
	password: string;
	heardFrom?: string;
	lastLoggedin: Date;
}

const UserSchema: Schema = new Schema({
	name: {
		type: String,
		trim: true,
	},
	companyName: {
		type: String,
		trim: true,
	},
	email: {
		type: String,
		required: [true, 'Please provide an email.'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Please provide a password.'],
	},
	heardFrom: {
		type: String,
		default: 'Others',
	},
	lastLoggedin: {
		type: Date,
		default: Date.now,
	},
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
