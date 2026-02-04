import { notFound } from 'next/navigation';
import { getLinkBySlug } from '@/lib/storage';
import DashboardClient from '@/components/DashboardClient';

export const dynamic = 'force-dynamic';

type Props = {
  params: { slug: string };
};

export default async function DashboardPage({ params }: Props) {
  const { slug } = await params;
  const link = await getLinkBySlug(slug);

  if (!link) {
    notFound();
  }

  return <DashboardClient link={link} />;
}
