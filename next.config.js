/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensuring proper output configuration for Netlify deployment

  // Enable static image imports for Next.js Image component
  images: {
    unoptimized: true,
  },
  // Output setting removed to enable API routes and SSR
  // output: 'export', // Commented out to enable API routes and SSR
};

export default nextConfig;
