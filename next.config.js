/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensuring proper output configuration for Netlify deployment
  // Using standard output configuration for Next.js on Netlify
  
  // Enable static image imports for Next.js Image component
  images: {
    unoptimized: true,
  },
  // Ensure output is configured for static export
  output: 'export',
};

module.exports = nextConfig;
