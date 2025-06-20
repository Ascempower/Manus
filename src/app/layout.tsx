import React from 'react';

import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';

import ClientOnlyLayout from '@/components/layout/ClientOnlyLayout';
import { LocalBusinessSchema, OrganizationSchema } from '@/components/seo/StructuredData';

import './globals.css';

// Configure fonts
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

// === METADATA (single declaration) ===
export const metadata: Metadata = {
  title: 'Choice Insurance Hub - Expert Health, Life & Medicare Insurance Solutions',
  description:
    'Your trusted partner for Medicare, Life & Health insurance with Choice Insurance in IL, GA, TX, AL, OH, KY, MS, SC. Personalized plans and expert guidance for all your insurance needs.',
  keywords:
    'Choice Insurance, Medicare, Life Insurance, Health Insurance, Insurance Agency, Medicare Supplement, Medicare Advantage, Final Expense, Annuities',
  authors: [{ name: 'Choice Insurance Hub' }],
  creator: 'Choice Insurance Hub',
  publisher: 'Choice Insurance Hub',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://choiceinsurancehub.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
    other: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/icon.svg',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        url: '/icons/icon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '144x144',
        url: '/icons/icon-144x144.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/icons/icon-192x192.png',
      },
      {
        rel: 'mask-icon',
        url: '/maskable-icon.svg',
        color: '#42615A',
      },
    ],
  },
  openGraph: {
    title: 'Choice Insurance Hub - Expert Health, Life & Medicare Insurance Solutions',
    description:
      'Your trusted partner for Medicare, Life & Health insurance with Choice Insurance in IL, GA, TX, AL, OH, KY, MS, SC. Personalized plans and expert guidance for all your insurance needs.',
    url: 'https://choiceinsurancehub.com',
    siteName: 'Choice Insurance Hub',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Choice Insurance Hub - Your Insurance Partner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Choice Insurance Hub - Expert Health, Life & Medicare Insurance Solutions',
    description:
      'Your trusted partner for Medicare, Life & Health insurance with Choice Insurance in IL, GA, TX, AL, OH, KY, MS, SC. Personalized plans and expert guidance for all your insurance needs.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Replace with actual Google Search Console verification code
  },
};

// === VIEWPORT ===
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a365d' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#42615A" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Choice Insurance" />

        {/* Resource hints for better performance */}
        <link rel="dns-prefetch" href="//assets.calendly.com" />
        <link rel="dns-prefetch" href="//calendly.com" />
        <link rel="dns-prefetch" href="//www.planenroll.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen bg-brand-white text-brand-black antialiased">
        <ClientOnlyLayout
          ga4Id={process.env.NEXT_PUBLIC_GA4_ID}
          gtmId={process.env.NEXT_PUBLIC_GTM_ID}
        >
          {children}
        </ClientOnlyLayout>

        {/* Deferred Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if ('serviceWorker' in navigator) {
                  // Defer SW registration until after page load
                  setTimeout(function() {
                    navigator.serviceWorker.register('/sw.js').then(
                      function(registration) {
                        console.log('SW registered: ', registration);
                      },
                      function(err) {
                        // Silent fail for SW registration
                      }
                    );
                  }, 2000);
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
