/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuration for Next.js 13+ with SSR/ISR support on Netlify
  // Using Netlify's official Next.js plugin for full functionality
  
  // Enable optimized images for SSR/ISR
  images: {
    // Netlify's Next.js plugin handles image optimization
    domains: [], // Add your image domains here if needed
  },
  // No output: 'export' needed - Netlify plugin handles SSR/ISR automatically
};

module.exports = nextConfig;
