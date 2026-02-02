import { redirect, notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { getLinkBySlug } from '@/lib/storage';
import { detectInAppBrowserClient, getBrowserInfo } from '@/lib/userAgent';
import BreakoutPage from '@/components/BreakoutPage';
import { Metadata } from 'next';

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

  // We can fetch title/image from the destination URL if we wanted to be fancy,
  // but for now we'll use a generic or the one provided (if we stored it).
  // Ideally, DeepLinker passes through the OG tags of the destination page, 
  // but that requires fetching the destination. 
  // For a simple demo, we will set a generic "Click to view" or try to be transparent.
  // Actually, standard shorteners often redirect bots so the crawler sees the final destination's tags.
  // Let's do that: if it's a bot, we might let it redirect?
  // BUT: if we redirect a LinkedInBot, it will see the final page.
  // The 'page' component logic handles the user, but metadata is fetched separately by crawlers.
  
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

  // Detect User Agent
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const { isInAppBrowser, isBot } = getBrowserInfo(userAgent);
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
  if (isInAppBrowser) {
    return <BreakoutPage destinationUrl={link.url} />;
  }

  // 3. Otherwise (Standard Browser), redirect immediately
  redirect(link.url);
}
