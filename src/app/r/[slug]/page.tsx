import { redirect, notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { getLinkBySlug, recordClick } from '@/lib/storage';
import { getBrowserInfo } from '@/lib/userAgent';
import BreakoutPage from '@/components/BreakoutPage';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const link = await getLinkBySlug(slug);
  
  if (!link) {
    return {
      title: 'Link Not Found',
    };
  }

  return {
    title: 'Shared Link - DeepLinker',
    description: 'Click to view the content.',
    openGraph: {
      title: 'Shared Link',
      description: 'Click to open in your browser.',
    },
  };
}

export default async function RedirectPage({ params }: Props) {
  const { slug } = await params;
  const link = await getLinkBySlug(slug);

  if (!link) {
    notFound();
  }

  const headersList = await headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const realIp = headersList.get('x-real-ip');
  const ip = (forwardedFor ? forwardedFor.split(',')[0]?.trim() : null) || realIp || 'Unknown';

  const country =
    headersList.get('cloudfront-viewer-country-name') ||
    headersList.get('cloudfront-viewer-country') ||
    headersList.get('x-vercel-ip-country') ||
    headersList.get('cf-ipcountry') ||
    (process.env.NODE_ENV === 'development' ? 'IN' : 'Unknown');

  const region =
    headersList.get('cloudfront-viewer-country-region-name') ||
    headersList.get('cloudfront-viewer-country-region') ||
    headersList.get('x-vercel-ip-country-region') ||
    headersList.get('x-vercel-ip-region') ||
    (process.env.NODE_ENV === 'development' ? 'Delhi' : 'Unknown');

  const city =
    headersList.get('cloudfront-viewer-city') ||
    headersList.get('x-vercel-ip-city') ||
    (process.env.NODE_ENV === 'development' ? 'New Delhi' : 'Unknown');

  const company =
    headersList.get('cloudfront-viewer-asn') ||
    headersList.get('x-vercel-ip-as-name') ||
    'Unknown';

  const geoData = {
    country,
    region,
    city,
    ip,
    company,
  };

  await recordClick(slug, geoData);

  const userAgent = headersList.get('user-agent') || '';
  const { isBot } = getBrowserInfo(userAgent);

  if (isBot) {
    redirect(link.url);
  }

  return <BreakoutPage destinationUrl={link.url} />;
}
