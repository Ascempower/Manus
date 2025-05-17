/** @type {import("next").NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  // Ensuring proper output configuration for Netlify deployment
  // Using standard output configuration for Next.js on Netlify
};

module.exports = nextConfig;
