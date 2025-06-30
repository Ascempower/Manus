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

  // Add Content Security Policy to allow FormFacade scripts
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://formfacade.com https://*.google.com https://*.googleapis.com;
              style-src 'self' 'unsafe-inline' https://formfacade.com https://*.google.com https://*.googleapis.com;
              img-src 'self' data: https://formfacade.com https://*.google.com https://*.googleapis.com;
              connect-src 'self' https://formfacade.com https://*.google.com https://*.googleapis.com;
              frame-src 'self' https://formfacade.com https://*.google.com https://*.googleapis.com;
              font-src 'self' data: https://formfacade.com https://*.google.com https://*.googleapis.com;
            `.replace(/\s+/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
