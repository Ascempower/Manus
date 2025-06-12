/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensuring proper output configuration for Netlify deployment

  // Enable static image imports for Next.js Image component
  images: {
    unoptimized: true,
  },
  // Ensure output is configured for static export
  output: 'export',
  // any other configurations can go here
};

export default nextConfig;
