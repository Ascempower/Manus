'use client';

import { useEffect } from 'react';

import Link from 'next/link';

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Blog post error:', error);
  }, [error]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-red-600">Error Loading Blog Post</h1>
        <h2 className="mb-6 text-2xl font-semibold text-gray-700">Something went wrong!</h2>
        <p className="mb-8 text-lg text-gray-600">
          We encountered an error while loading this blog post. This could be due to a temporary
          issue or a problem with the content.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 rounded-lg bg-red-50 p-4 text-left">
            <h3 className="mb-2 font-semibold text-red-800">Error Details (Development Only):</h3>
            <pre className="overflow-auto text-sm text-red-700">{error.message}</pre>
            {error.digest && <p className="mt-2 text-sm text-red-600">Error ID: {error.digest}</p>}
          </div>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg bg-brand-deep-forest-green px-6 py-3 text-white transition-colors hover:bg-brand-deep-forest-green/90"
          >
            Try Again
          </button>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-lg border border-brand-deep-forest-green px-6 py-3 text-brand-deep-forest-green transition-colors hover:bg-brand-deep-forest-green hover:text-white"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
