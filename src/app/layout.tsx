import React from "react";
import type { Metadata, Viewport } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { GoogleAnalytics, CookieConsent } from '@/components/analytics';
import HIPAANotice from '@/components/compliance/HIPAANotice';
import HIPAANotice from '@/components/compliance/HIPAANotice';
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
              --color-brand-teal-blue-dark: #8BB5B7;
              --color-brand-deep-forest-green: #42615A;
              --color-brand-warm-beige-coral: #DD8B66;
              --color-brand-warm-beige-coral-dark: #C77A52;
              --color-brand-black: #000000;
            }
            /* Critical layout styles */
            body { 
              font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif; 
              margin: 0;
              padding: 0;
            }
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .min-h-screen { min-block-size: 100vh; }
            .flex-grow { flex-grow: 1; }
            .container { max-width: 1200px; margin: 0 auto; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
            .text-center { text-align: center; }
            .font-bold { font-weight: 700; }
            .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-10 { margin-bottom: 2.5rem; }
            .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
            .from-brand-teal-blue { --tw-gradient-from: var(--color-brand-teal-blue); --tw-gradient-to: rgb(167 201 202 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
            .to-brand-white { --tw-gradient-to: var(--color-brand-white); }
            .text-brand-deep-forest-green { color: var(--color-brand-deep-forest-green); }
            .bg-brand-deep-forest-green { background-color: var(--color-brand-deep-forest-green); }
            .text-brand-white { color: var(--color-brand-white); }
            .sticky { position: sticky; }
            .top-0 { top: 0; }
            .z-50 { z-index: 50; }
            .w-full { width: 100%; }
            .h-16 { height: 4rem; }
            .items-center { align-items: center; }
            .justify-between { justify-content: space-between; }
            @media (min-width: 768px) {
              .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
              .md\\:py-32 { padding-top: 8rem; padding-bottom: 8rem; }
            }
          `
        }} />
        
        {/* Preload critical fonts */}
        <link rel="preload" href="https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/assets/logos/main-logo-orange.png" as="image" />
        
        {/* Preconnect to critical external domains only */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for non-critical resources - loaded after page load */}
        <link rel="dns-prefetch" href="//assets.calendly.com" />
        <link rel="dns-prefetch" href="//calendly.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Google Analytics & GTM */}
        <GoogleAnalytics 
          gtmId={process.env.NEXT_PUBLIC_GTM_ID}
          ga4Id={process.env.NEXT_PUBLIC_GA4_ID}
        />
        
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* HIPAA Compliance Notice (shows first) */}
        <HIPAANotice />
        
        {/* HIPAA Compliance Notice (shows first) */}
        <HIPAANotice />
        
        {/* Cookie Consent Banner (shows after HIPAA notice) (shows after HIPAA notice) */}
        <CookieConsent />
        {/* Load scripts after page load to prevent blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Optimize third-party loading with intersection observer and user interaction
              (function() {
                var thirdPartyLoaded = false;
                
                function loadThirdPartyResources() {
                  if (thirdPartyLoaded) return;
                  thirdPartyLoaded = true;
                  
                  // Load Calendly CSS
                  var calendlyCSS = document.createElement('link');
                  calendlyCSS.rel = 'stylesheet';
                  calendlyCSS.href = 'https://assets.calendly.com/assets/external/widget.css';
                  document.head.appendChild(calendlyCSS);
                  
                  // Load Calendly script
                  var calendlyScript = document.createElement('script');
                  calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
                  calendlyScript.async = true;
                  calendlyScript.onload = function() {
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
                }
                
                // Load on user interaction (more performant than window load)
                var events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
                var loaded = false;
                
                function triggerLoad() {
                  if (loaded) return;
                  loaded = true;
                  
                  events.forEach(function(event) {
                    document.removeEventListener(event, triggerLoad, true);
                  });
                  
                  loadThirdPartyResources();
                }
                
                events.forEach(function(event) {
                  document.addEventListener(event, triggerLoad, true);
                });
                
                // Fallback: load after 3 seconds if no user interaction
                setTimeout(triggerLoad, 3000);
                
                // Service Worker registration (non-blocking, delayed)
                setTimeout(function() {
                  if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.register('/sw.js', {
                      scope: '/'
                    }).then(
                      function(registration) {
                        if (registration.waiting) {
                          registration.waiting.postMessage({command: 'skipWaiting'});
                        }
                      },
                      function(err) {
                        // Silent fail for SW registration
                      }
                    );
                  }
                }, 2000);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}