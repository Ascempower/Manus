/** @type {import("next").NextConfig} */
const nextConfig = {
  // Removing "output: export" to enable dynamic routing on Vercel
  // This allows for server-side rendering and API routes
  swcMinify: true,
  reactStrictMode: true,
};

export default nextConfig;
