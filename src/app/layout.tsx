import React from "react";
import type { Metadata, Viewport } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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
  icons: {
    icon: '/images/favicon.png',
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Choice Insurance'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#42615A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#42615A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Choice Insurance" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        {/* Calendly floating widget */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* Calendly floating widget scripts */}
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                // Service Worker registration
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.register('/sw.js', {
                    scope: '/'
                  }).then(
                    function(registration) {
                      console.log('Service Worker registration successful with scope: ', registration.scope);
                      // Force the service worker to take control immediately
                      if (registration.waiting) {
                        registration.waiting.postMessage({command: 'skipWaiting'});
                      }
                    },
                    function(err) {
                      console.log('Service Worker registration failed: ', err);
                    }
                  );
                  
                  // Listen for service worker updates
                  navigator.serviceWorker.addEventListener('controllerchange', function() {
                    console.log('Service Worker controller changed');
                  });
                }
                
                // Calendly floating widget initialization
                if (typeof Calendly !== 'undefined') {
                  Calendly.initBadgeWidget({ 
                    url: 'https://calendly.com/choiceinsurancehub', 
                    text: 'Schedule Consultation', 
                    color: '#42615A', 
                    textColor: '#DD8B66', 
                    branding: false 
                  }); 
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}