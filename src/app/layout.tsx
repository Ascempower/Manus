import React from 'react';

import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';

import LazyAnalytics from '@/components/analytics/LazyAnalytics';
import LazyCompliance from '@/components/compliance/LazyCompliance';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

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
    icon: ['/favicon.ico', '/icon.svg'],
    apple: '/apple-touch-icon.png',
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
    google: 'your-google-verification-code',
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
      <body className="min-h-screen bg-brand-white text-brand-black antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Lazy-loaded compliance and analytics */}
        <LazyCompliance />
        <LazyAnalytics />

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
