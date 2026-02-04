import dbConnect from './db';
import Link, { ILink } from '@/models/Link';

// Define the Link interface matching Mongoose doc for frontend usage
export interface ClickInfo {
  timestamp: string;
  country: string;
  region: string;
  city: string;
  ip: string;
  company: string;
}

export interface LinkData {
  id: string;
  url: string;
  slug: string;
  tag: string;
  createdAt: string;
  clicks: number;
  clickTimestamps?: string[];
  clicksInfo?: ClickInfo[];
}

// Read all links
export async function getLinks(): Promise<LinkData[]> {
  await dbConnect();
  const links = await Link.find({}).sort({ createdAt: -1 });
  return links.map(doc => ({
    id: doc._id.toString(),
    url: doc.url,
    slug: doc.slug,
    tag: doc.tag,
    createdAt: doc.createdAt.toISOString(),
    clicks: doc.clicks,
    clickTimestamps: doc.clickTimestamps?.map((d: Date) => d.toISOString()) || [],
    clicksInfo: doc.clicksInfo?.map((c: any) => ({
      timestamp: c.timestamp.toISOString(),
      country: c.country,
      region: c.region,
      city: c.city,
      ip: c.ip,
      company: c.company
    })) || [],
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
    tag: doc.tag,
    createdAt: doc.createdAt.toISOString(),
    clicks: doc.clicks,
    clickTimestamps: doc.clickTimestamps?.map((d: Date) => d.toISOString()) || [],
    clicksInfo: doc.clicksInfo?.map((c: any) => ({
      timestamp: c.timestamp.toISOString(),
      country: c.country,
      region: c.region,
      city: c.city,
      ip: c.ip,
      company: c.company
    })) || [],
  };
}

// Create new link
export async function createLink(url: string, slug?: string, tag: string = 'others'): Promise<LinkData> {
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
    tag,
  });

  return {
    id: newLink._id.toString(),
    url: newLink.url,
    slug: newLink.slug,
    tag: newLink.tag,
    createdAt: newLink.createdAt.toISOString(),
    clicks: newLink.clicks,
    clickTimestamps: [],
    clicksInfo: [],
  };
}

export async function recordClick(
  slug: string,
  geoData: { country: string; region: string; city: string; ip: string; company: string } = { country: 'Unknown', region: 'Unknown', city: 'Unknown', ip: 'Unknown', company: 'Unknown' }
): Promise<void> {
  await dbConnect();
  await Link.findOneAndUpdate(
    { slug },
    {
      $inc: { clicks: 1 },
      $push: {
        clickTimestamps: new Date(),
        clicksInfo: {
          timestamp: new Date(),
          ...geoData
        }
      }
    }
  );
}

// Delete link by slug
export async function deleteLinkBySlug(slug: string): Promise<void> {
  await dbConnect();
  await Link.deleteOne({ slug });
}
