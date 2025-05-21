import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://choiceins.netlify.app'),
  title: "Choice Insurance Agency - Health, Life & Medicare - Choice Insurance",
  description: "Your trusted partner for Medicare, Life & Health insurance with Choice Insurance in IL, GA, TX, AL, OH, KY, MS, SC. Personalized plans and expert guidance.",
  keywords: "insurance agency, Medicare, life insurance, health insurance, Choice Insurance, Illinois insurance, Georgia insurance, Texas insurance, Alabama insurance, Ohio insurance, Kentucky insurance, Mississippi insurance, South Carolina insurance",
  alternates: {
    canonical: 'https://choiceins.netlify.app',
  },
  openGraph: {
    title: "Choice Insurance Agency - Health, Life & Medicare Insurance",
    description: "Your trusted partner for Medicare, Life & Health insurance with personalized plans and expert guidance.",
    url: 'https://choiceins.netlify.app',
    siteName: 'Choice Insurance Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/favicon.png',
        width: 800,
        height: 600,
        alt: 'Choice Insurance Agency Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Choice Insurance Agency - Health, Life & Medicare Insurance",
    description: "Your trusted partner for Medicare, Life & Health insurance with personalized plans and expert guidance.",
    images: ['/images/favicon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
