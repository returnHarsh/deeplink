import { getLinks } from '@/lib/storage';
import Link from 'next/link';
import DashboardLinksList from '@/components/DashboardLinksList';
import GlobalTagAnalytics from '@/components/GlobalTagAnalytics';

export const dynamic = 'force-dynamic';

export default async function DashboardRoot() {
  const links = await getLinks();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-hidden relative p-8">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-4xl">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Your Smart Links
            </h1>
            <p className="text-gray-400 mt-2">Manage and track your generated links</p>
          </div>
          <Link 
            href="/"
            className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all font-medium"
          >
            Create New
          </Link>
        </div>

        <GlobalTagAnalytics links={links} />

        <DashboardLinksList initialLinks={links} />
      </div>
    </main>
  );
}
