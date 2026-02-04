import { getLinks } from '@/lib/storage';
import Link from 'next/link';

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

        {links.length === 0 ? (
          <div className="text-center py-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
            <p className="text-gray-400 text-lg">No links generated yet.</p>
            <Link 
              href="/"
              className="mt-4 inline-block text-purple-400 hover:text-purple-300 transition-colors"
            >
              Generate your first link &rarr;
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {links.map((link) => (
              <div 
                key={link.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-white/20 transition-all group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      /r/{link.slug}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">
                      {link.clicks} clicks
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate max-w-md">
                    Target: {link.url}
                  </p>
                  <p className="text-xs text-gray-600">
                    Created: {new Date(link.createdAt).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <a 
                    href={`/r/${link.slug}`}
                    target="_blank"
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-gray-400 hover:text-white transition-all"
                    title="Open Link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <Link 
                    href={`/dashboard/${link.slug}`}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20 transition-all"
                  >
                    View Stats
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
