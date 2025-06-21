'use client';

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-red-500 to-red-700 px-4">
          <div className="text-center">
            <h1 className="mb-4 text-6xl font-bold text-white">Error</h1>
            <h2 className="mb-6 text-2xl font-semibold text-white">Something went wrong!</h2>
            <p className="mb-8 max-w-md text-lg text-white/90">
              We encountered an unexpected error. Please try again.
            </p>
            <button
              onClick={reset}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-red-600 transition-colors hover:bg-gray-100"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
