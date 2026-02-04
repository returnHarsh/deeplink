'use client';

import { useState } from 'react';
import Link from 'next/link';
import DeleteLinkButton from './DeleteLinkButton';
import type { LinkData } from '@/lib/storage';

const getTagStyle = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'linkedin':
      return 'bg-blue-600/10 text-blue-400 border-blue-500/20';
    case 'instagram':
      return 'bg-pink-600/10 text-pink-400 border-pink-500/20';
    case 'twitter(x)':
      return 'bg-gray-400/10 text-gray-300 border-gray-400/20';
    case 'facebook':
      return 'bg-blue-700/10 text-blue-500 border-blue-700/20';
    default:
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
  }
};

interface DashboardLinksListProps {
  initialLinks: LinkData[];
}

export default function DashboardLinksList({ initialLinks }: DashboardLinksListProps) {
  const [links, setLinks] = useState(initialLinks);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleDeleted = (slug: string) => {
    setLinks(prev => prev.filter(link => link.slug !== slug));
  };

  if (links.length === 0) {
    return (
      <div className="text-center py-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
        <p className="text-gray-400 text-lg">No links generated yet.</p>
        <Link 
          href="/"
          className="mt-4 inline-block text-purple-400 hover:text-purple-300 transition-colors"
        >
          Generate your first link &rarr;
        </Link>
      </div>
    );
  }

  const totalPages = Math.ceil(links.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLinks = links.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {paginatedLinks.map(link => (
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
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getTagStyle(link.tag)}`}>
                  {link.tag}
                </span>
              </div>
              <p className="text-sm text-gray-500 truncate max-w-md">
                Target: {link.url}
              </p>
              <p className="text-xs text-gray-600">
                Created: {new Date(link.createdAt).toISOString().slice(0, 10)}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <DeleteLinkButton slug={link.slug} onDeleted={handleDeleted} />
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

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 py-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed border border-white/10 rounded-lg transition-all text-sm font-medium"
          >
            Previous
          </button>
          
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg border text-sm font-medium transition-all ${
                  currentPage === page
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed border border-white/10 rounded-lg transition-all text-sm font-medium"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

