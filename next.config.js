/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensuring proper output configuration for Netlify deployment
  // Using standard output configuration for Next.js on Netlify
  
  // Enable static image imports for Next.js Image component
  images: {
    unoptimized: true,
  },
  // Output setting removed to enable API routes and SSR
};

module.exports = nextConfig;
