import React from "react";
import type { Metadata, Viewport } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LazyAnalytics from '@/components/analytics/LazyAnalytics';
import LazyCompliance from '@/components/compliance/LazyCompliance';
import './globals.css';

export const metadata: Metadata = {
  title: "Choice Insurance Hub - Expert Health, Life & Medicare Insurance Solutions",
  description: "Your trusted partner for Medicare, Life & Health insurance with Choice Insurance in IL, GA, TX, AL, OH, KY, MS, SC. Personalized plans and expert guidance for all your insurance needs.",
  keywords: "Choice Insurance, Medicare, Life Insurance, Health Insurance, Insurance Agency, Medicare Supplement, Medicare Advantage, Final Expense, Annuities",
  authors: [{ name: "Choice Insurance Hub" }],
  creator: "Choice Insurance Hub",
  publisher: "Choice Insurance Hub",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://choiceinsurancehub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Choice Insurance Hub - Expert Health, Life & Medicare Insurance Solutions",
    description: "Your trusted partner for Medicare, Life & Health insurance with Choice Insurance in IL, GA, TX, AL, OH, KY, MS, SC. Personalized plans and expert guidance for all your insurance needs.",
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
    title: "Choice Insurance Hub - Expert Health, Life & Medicare Insurance Solutions",
    description: "Your trusted partner for Medicare, Life & Health insurance with Choice Insurance in IL, GA, TX, AL, OH, KY, MS, SC. Personalized plans and expert guidance for all your insurance needs.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }}
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS - Inlined for performance */
              html { font-family: Inter, system-ui, sans-serif; }
              body { margin: 0; background: #ffffff; color: #1a365d; }
              .loading { opacity: 0; transition: opacity 0.3s ease; }
              .loaded { opacity: 1; }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-brand-white text-brand-black antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
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