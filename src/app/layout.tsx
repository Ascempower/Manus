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
  // Note: Using 'width' here instead of 'inline-size' because the HTML meta viewport
  // tag doesn't support CSS logical properties - it generates: <meta name="viewport" content="width=device-width">
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
        
        {/* Critical CSS inlined */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            @font-face {
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2') format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            @font-face {
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 600;
              font-display: swap;
              src: url('https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2') format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            @font-face {
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2') format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            :root {
              --color-brand-white: #FFFFFF;
              --color-brand-teal-blue: #A7C9CA;
              --color-brand-deep-forest-green: #42615A;
              --color-brand-warm-beige-coral: #DD8B66;
              --color-brand-warm-beige-coral-dark: #C77A52;
              --color-brand-black: #000000;
            }
            body { font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif; }
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .min-h-screen { min-block-size: 100vh; }
            .flex-grow { flex-grow: 1; }
          `
        }} />
        
        {/* Preload critical fonts */}
        <link rel="preload" href="https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/assets/logos/main-logo-orange.png" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//assets.calendly.com" />
        <link rel="dns-prefetch" href="//calendly.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load non-critical CSS asynchronously */}
        <link 
          rel="preload" 
          href="https://assets.calendly.com/assets/external/widget.css" 
          as="style" 
          id="calendly-css-preload"
        />
        <noscript><link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" /></noscript>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* Load scripts after page load to prevent blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Load non-critical scripts after page load
              window.addEventListener('load', function() {
                // Convert preloaded CSS to stylesheet
                var calendlyCssPreload = document.getElementById('calendly-css-preload');
                if (calendlyCssPreload) {
                  calendlyCssPreload.onload = function() {
                    calendlyCssPreload.onload = null;
                    calendlyCssPreload.rel = 'stylesheet';
                  };
                  // Trigger the load if it hasn't already
                  if (calendlyCssPreload.rel === 'preload') {
                    calendlyCssPreload.rel = 'stylesheet';
                  }
                }
                
                // Load Calendly script dynamically
                var calendlyScript = document.createElement('script');
                calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
                calendlyScript.async = true;
                calendlyScript.onload = function() {
                  // Initialize Calendly widget after script loads
                  if (typeof Calendly !== 'undefined') {
                    Calendly.initBadgeWidget({ 
                      url: 'https://calendly.com/choiceinsurancehub', 
                      text: 'Schedule Call', 
                      color: '#42615A', 
                      textColor: '#DD8B66', 
                      branding: false 
                    }); 
                  }
                };
                document.head.appendChild(calendlyScript);
                
                // Service Worker registration (non-blocking)
                setTimeout(function() {
                  if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.register('/sw.js', {
                      scope: '/'
                    }).then(
                      function(registration) {
                        console.log('Service Worker registration successful with scope: ', registration.scope);
                        if (registration.waiting) {
                          registration.waiting.postMessage({command: 'skipWaiting'});
                        }
                      },
                      function(err) {
                        console.log('Service Worker registration failed: ', err);
                      }
                    );
                    
                    navigator.serviceWorker.addEventListener('controllerchange', function() {
                      console.log('Service Worker controller changed');
                    });
                  }
                }, 1000);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}