import Link from 'next/link';

export default function BlogPostNotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-6 text-3xl font-semibold text-gray-700">Blog Post Not Found</h2>
        <p className="mb-8 text-lg text-gray-600">
          Sorry, we couldn't find the blog post you're looking for. It may have been moved, deleted,
          or you may have entered an incorrect URL.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-lg bg-brand-deep-forest-green px-6 py-3 text-white transition-colors hover:bg-brand-deep-forest-green/90"
          >
            ← Back to Blog
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-brand-deep-forest-green px-6 py-3 text-brand-deep-forest-green transition-colors hover:bg-brand-deep-forest-green hover:text-white"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
