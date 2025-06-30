import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

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
      style-src 'self' 'unsafe-inline' https://formfacade.com https://*.google.com https://*.googleapis.com;
      img-src 'self' data: https://formfacade.com https://*.google.com https://*.googleapis.com;
      connect-src 'self' https://formfacade.com https://*.google.com https://*.googleapis.com;
      frame-src 'self' https://formfacade.com https://*.google.com https://*.googleapis.com https://www.googletagmanager.com;
      font-src 'self' data: https://formfacade.com https://*.google.com https://*.googleapis.com;
    `.replace(/\s+/g, ' ').trim(),
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PWJPMPC5');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="flex flex-col min-h-screen">
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
