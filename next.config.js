/** @type {import("next").NextConfig} */
module.exports = {
  // Using CommonJS format for better compatibility with Vercel
  swcMinify: true,
  reactStrictMode: true,
  // Ensuring proper output configuration for Vercel deployment
  // Removed "output: export" to enable dynamic routing
};
