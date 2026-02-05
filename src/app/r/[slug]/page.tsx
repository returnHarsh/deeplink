import { redirect, notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { getLinkBySlug, recordClick } from '@/lib/storage';
import { detectInAppBrowserClient, getBrowserInfo } from '@/lib/userAgent';
import BreakoutPage from '@/components/BreakoutPage';
import { Metadata } from 'next';
import geoip from 'fast-geoip';

type Props = {
  params: { slug: string };
};

// Generate Metadata for social previews (Open Graph)
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

  // Detect visitor's IP and Country
  const headersList = await headers();

  // Try to get the real client IP from common proxy headers
  const forwardedFor = headersList.get('x-forwarded-for');
  const realIp = headersList.get('x-real-ip');
  console.log("realIp is : " , realIp)
  const ip = (forwardedFor ? forwardedFor.split(',')[0]?.trim() : null) || realIp || 'Unknown';
  
  // On Vercel / many hosts, geolocation is already available via headers.
  const headerCountry = headersList.get('x-vercel-ip-country');
  const headerRegion =
    headersList.get('x-vercel-ip-country-region') ||
    headersList.get('x-vercel-ip-region');
  const headerCity = headersList.get('x-vercel-ip-city');
  const headerAsName = headersList.get('x-vercel-ip-as-name');

  // Geolocation lookup (fast-geoip is async). Wrap in try/catch so failures don’t break redirects.
  let geo: Awaited<ReturnType<typeof geoip.lookup>> | null = null;
  try {
    if (ip && ip !== 'Unknown' && ip !== '127.0.0.1') {
      geo = await geoip.lookup(ip);
      console.log("geo is : " , geo)
    }
  } catch (e) {
    console.error('GeoIP lookup failed', e);
  }
  
  const geoData = {
    country: geo?.country || headerCountry || 'Unknown',
    region: geo?.region || headerRegion || 'Unknown',
    city: geo?.city || headerCity || 'Unknown',
    ip,
    // Try to capture ISP / company from hosting headers if available
    company: headerAsName || 'Unknown',
  };

  // Record the click with detailed geo data
  await recordClick(slug, geoData);

  // Detect User Agent
  const userAgent = headersList.get('user-agent') || '';
  const referrer = headersList.get('referer') || '';
  const { isInAppBrowser, isBot } = getBrowserInfo(userAgent);

  console.log("user agent is : " , userAgent)
  console.log('Referrer:', referrer);
  console.log("in app browser : " , isInAppBrowser)

  const test = detectInAppBrowserClient()
  console.log("test is : " , test)

  // 1. If it is a Bot, we generally want to allow it to reach the destination 
  // so it can scrape metadata (unless we are proxying metadata, which is complex).
  // However, simple 307 redirect works for most bots to follow through.
  if (isBot) {
    redirect(link.url);
  }

  // 2. If it is an In-App Browser (LinkedIn/Instagram), show Breakout Page
  // if (isInAppBrowser) {
  // if (true) {
    return <BreakoutPage destinationUrl={link.url} />;
  // }

  // 3. Otherwise (Standard Browser), redirect immediately
  // redirect(link.url);
}
