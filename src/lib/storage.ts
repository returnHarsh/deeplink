import dbConnect from './db';
import Link, { ILink } from '@/models/Link';

// Define the Link interface matching Mongoose doc for frontend usage
export interface LinkData {
  id: string;
  url: string;
  slug: string;
  createdAt: string;
  clicks: number;
}

// Read all links
export async function getLinks(): Promise<LinkData[]> {
  await dbConnect();
  const links = await Link.find({}).sort({ createdAt: -1 });
  return links.map(doc => ({
    id: doc._id.toString(),
    url: doc.url,
    slug: doc.slug,
    createdAt: doc.createdAt.toISOString(),
    clicks: doc.clicks,
  }));
}

// Get link by slug
export async function getLinkBySlug(slug: string): Promise<LinkData | undefined> {
  await dbConnect();
  const doc = await Link.findOne({ slug });

  if (!doc) return undefined;

  return {
    id: doc._id.toString(),
    url: doc.url,
    slug: doc.slug,
    createdAt: doc.createdAt.toISOString(),
    clicks: doc.clicks,
  };
}

// Create new link
export async function createLink(url: string, slug?: string): Promise<LinkData> {
  await dbConnect();

  // Generate slug if not provided
  const finalSlug = slug || Math.random().toString(36).substring(2, 8);

  // Check if slug exists
  const existing = await Link.findOne({ slug: finalSlug });
  if (existing) {
    throw new Error('Slug already in use');
  }

  const newLink = await Link.create({
    url,
    slug: finalSlug,
  });

  return {
    id: newLink._id.toString(),
    url: newLink.url,
    slug: newLink.slug,
    createdAt: newLink.createdAt.toISOString(),
    clicks: newLink.clicks,
  };
}
