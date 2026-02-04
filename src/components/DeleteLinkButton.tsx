'use client';

import { useTransition } from 'react';
import { deleteLinkAction } from '@/app/dashboard/actions';

interface DeleteLinkButtonProps {
  slug: string;
  onDeleted?: (slug: string) => void;
}

export default function DeleteLinkButton({ slug, onDeleted }: DeleteLinkButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this link? This action cannot be undone.'
    );
    if (!confirmed) return;

    startTransition(async () => {
      await deleteLinkAction(slug);
      if (onDeleted) {
        onDeleted(slug);
      }
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      className="p-2 bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 rounded-lg text-red-400 hover:text-red-300 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      title={isPending ? 'Deleting...' : 'Delete Link'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M9 10v7" />
        <path d="M15 10v7" />
        <path d="M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14" />
      </svg>
    </button>
  );
}

