import { notFound } from 'next/navigation';
import { getLinkBySlug } from '@/lib/storage';
import DashboardClient from '@/components/DashboardClient';

// export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return [{ slug: 'default' }];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function DashboardPage({ params }: Props) {
  const { slug } = await params;
  let link;
  try {
    link = await getLinkBySlug(slug);
  } catch (e) {
    console.warn("Could not fetch link by slug during static build:", e);
  }

  if (!link) {
    // Return empty fallback component if link not found during static build
    return <DashboardClient link={{ id: '', url: '', slug: '', tag: '', createdAt: '', clicks: 0 }} />;
  }

  return <DashboardClient link={link} />;
}

