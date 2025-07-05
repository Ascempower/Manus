/** @type {import("next").NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
  reactStrictMode: true,
  // Configuration for Next.js 13+ with SSR/ISR support on Netlify
  // Using Netlify's official Next.js plugin for full functionality
  
  // Enable optimized images for SSR/ISR
  images: {
    // Netlify's Next.js plugin handles image optimization
    domains: [], // Add your image domains here if needed
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // No output: 'export' needed - Netlify plugin handles SSR/ISR automatically

  // Add Content Security Policy to allow FormFacade scripts and other necessary resources
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://formfacade.com https://*.google.com https://*.googleapis.com https://www.googletagmanager.com;
              style-src 'self' 'unsafe-inline' https://formfacade.com https://*.google.com https://*.googleapis.com https://fonts.googleapis.com;
              img-src 'self' data: https://formfacade.com https://*.google.com https://*.googleapis.com;
              connect-src 'self' https://formfacade.com https://*.google.com https://*.googleapis.com https://www.googletagmanager.com;
              frame-src 'self' https://formfacade.com https://*.google.com https://*.googleapis.com https://www.googletagmanager.com;
              font-src 'self' data: https://formfacade.com https://*.google.com https://*.googleapis.com https://fonts.gstatic.com;
            `.replace(/\s+/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
