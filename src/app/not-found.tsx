import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Choice Insurance Hub',
  description: "The page you're looking for could not be found.",
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary to-secondary px-4">
      <div className="mx-auto max-w-2xl text-center text-white">
        <h1 className="mb-4 text-8xl font-bold opacity-90 md:text-9xl">404</h1>

        <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Page Not Found</h2>

        <p className="mb-8 text-lg leading-relaxed opacity-90 md:text-xl">
          Sorry, we couldn't find the page you're looking for. The page may have been moved,
          deleted, or you may have entered an incorrect URL.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-w-[140px] items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors duration-200 hover:bg-gray-100"
          >
            Return Home
          </Link>

          <Link
            href="/services"
            className="inline-flex min-w-[140px] items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-primary"
          >
            Our Services
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-w-[140px] items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-primary"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 text-sm opacity-75">
          <p>
            Need help?{' '}
            <Link href="/contact" className="underline hover:no-underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
