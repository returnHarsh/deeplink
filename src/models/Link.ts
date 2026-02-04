import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IClickInfo {
	timestamp: Date;
	country: string;
	region: string;
	city: string;
	ip: string;
	company: string;
}

export interface ILink extends Document {
	url: string;
	slug: string;
	tag: 'linkedin' | 'instagram' | 'twitter(x)' | 'facebook' | 'others';
	clicks: number;
	clickTimestamps: Date[];
	clicksInfo: IClickInfo[];
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
	tag: {
		type: String,
		enum: ['linkedin', 'instagram', 'twitter(x)', 'facebook', 'others'],
		default: 'others',
		required: true,
	},
	clicks: {
		type: Number,
		default: 0,
	},
	clickTimestamps: {
		type: [Date],
		default: [],
	},
	clicksInfo: {
		type: [{
			timestamp: { type: Date, default: Date.now },
			country: { type: String, default: 'Unknown' },
			region: { type: String, default: 'Unknown' },
			city: { type: String, default: 'Unknown' },
			ip: { type: String, default: 'Unknown' },
			company: { type: String, default: 'Unknown' }
		}],
		default: []
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// Check if model already exists to prevent overwrite in hot-reload
const Link: Model<ILink> = mongoose.models.Link || mongoose.model<ILink>('Link', LinkSchema);

export default Link;
