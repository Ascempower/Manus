/** @type {import("next").NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  // Ensuring proper output configuration for Vercel deployment
  // Removed "output: export" to enable dynamic routing
};

module.exports = nextConfig;
