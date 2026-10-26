/*
import { redirect, notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { getLinkBySlug, recordClick } from '@/lib/storage';
import { detectInAppBrowserClient, getBrowserInfo } from '@/lib/userAgent';
import BreakoutPage from '@/components/BreakoutPage';
import { Metadata } from 'next';
import geoip from 'fast-geoip';

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
  
  const headerCountry = headersList.get('x-vercel-ip-country');
  const headerRegion =
    headersList.get('x-vercel-ip-country-region') ||
    headersList.get('x-vercel-ip-region');
  const headerCity = headersList.get('x-vercel-ip-city');
  const headerAsName = headersList.get('x-vercel-ip-as-name');

  let geo: Awaited<ReturnType<typeof geoip.lookup>> | null = null;
  try {
    if (ip && ip !== 'Unknown' && ip !== '127.0.0.1') {
      geo = await geoip.lookup(ip);
    }
  } catch (e) {
    console.error('GeoIP lookup failed', e);
  }
  
  const geoData = {
    country: geo?.country || headerCountry || 'Unknown',
    region: geo?.region || headerRegion || 'Unknown',
    city: geo?.city || headerCity || 'Unknown',
    ip,
    company: headerAsName || 'Unknown',
  };

  await recordClick(slug, geoData);

  const userAgent = headersList.get('user-agent') || '';
  const referrer = headersList.get('referer') || '';
  const { isInAppBrowser, isBot } = getBrowserInfo(userAgent);

  if (isBot) {
    redirect(link.url);
  }

  return <BreakoutPage destinationUrl={link.url} />;
}
*/

// Static export placeholders required by Next.js output: export
export function generateStaticParams() {
  return [{ slug: 'default' }];
}

export default function Page() {
  return null;
}


