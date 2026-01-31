import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILink extends Document {
	url: string;
	slug: string;
	clicks: number;
	createdAt: Date;
}

const LinkSchema: Schema = new Schema({
	url: {
		type: String,
		required: [true, 'Please provide a URL.'],
	},
	slug: {
		type: String,
		required: [true, 'Please provide a slug.'],
		unique: true,
		index: true,
		maxlength: [20, 'Slug cannot be more than 20 characters'],
	},
	clicks: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// Check if model already exists to prevent overwrite in hot-reload
const Link: Model<ILink> = mongoose.models.Link || mongoose.model<ILink>('Link', LinkSchema);

export default Link;
