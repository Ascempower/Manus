import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-md">
        {/* 404 Number */}
        <h1 className="mb-4 text-6xl font-bold text-brand-deep-forest-green">404</h1>

        {/* Main Message */}
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">Page Not Found</h2>

        {/* Description */}
        <p className="mb-8 text-gray-600">
          Sorry, we couldn't find the page you're looking for. The page may have been moved,
          deleted, or you may have entered an incorrect URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
          >
            Return Home
          </Link>

          <Link
            href="/services"
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
          >
            View Services
          </Link>
        </div>

        {/* CTA Section */}
        <div className="mt-12 rounded-lg bg-gray-50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Need Help Finding Insurance?</h3>
          <p className="mb-6 text-sm text-gray-600">
            Don't let a missing page stop you from getting the coverage you need. Our experts are
            here to help!
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-brand-warm-beige-coral px-4 py-2 text-sm font-medium font-semibold text-brand-black transition-colors hover:bg-brand-warm-beige-coral/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="mt-8">
          <p className="mb-4 text-sm font-medium text-gray-700">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Link
              href="/services/medicare-supplement"
              className="text-brand-teal-blue hover:underline"
            >
              Medicare Supplement
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/services/life-insurance" className="text-brand-teal-blue hover:underline">
              Life Insurance
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/about" className="text-brand-teal-blue hover:underline">
              About Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/contact" className="text-brand-teal-blue hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
