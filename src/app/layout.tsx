import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Poppins } from 'next/font/google';

// Initialize the Poppins font with subsets and weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Choice Insurance Agency - Health, Life & Medicare - Choice Insurance", // Added keyword
  description: "Your trusted partner for Medicare, Life & Health insurance with Choice Insurance in IL, GA, TX, AL, OH, KY, MS, SC. Personalized plans and expert guidance.", // Added keyword
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  // Add CSP meta tag
  other: {
    'content-security-policy': `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://formfacade.com https://*.google.com https://*.googleapis.com https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline' https://formfacade.com https://*.google.com https://*.googleapis.com https://fonts.googleapis.com;
      img-src 'self' data: https://formfacade.com https://*.google.com https://*.googleapis.com;
      connect-src 'self' https://formfacade.com https://*.google.com https://*.googleapis.com https://www.googletagmanager.com;
      frame-src 'self' https://formfacade.com https://*.google.com https://*.googleapis.com https://www.googletagmanager.com;
      font-src 'self' data: https://formfacade.com https://*.google.com https://*.googleapis.com https://fonts.gstatic.com;
    `.replace(/\s+/g, ' ').trim(),
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google Tag Manager - Loaded with lazyOnload strategy */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-PWJPMPC5');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`flex flex-col min-h-screen font-sans ${poppins.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PWJPMPC5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="gtm"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
