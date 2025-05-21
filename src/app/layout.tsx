import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Choice Insurance Agency - Expert Health, Life & Medicare Insurance Solutions",
  description: "Your trusted partner for Medicare, Life & Health insurance with Choice Insurance in IL, GA, TX, AL, OH, KY, MS, SC. Personalized plans and expert guidance for all your insurance needs.",
  keywords: "Choice Insurance, Medicare, Life Insurance, Health Insurance, Insurance Agency, Medicare Supplement, Medicare Advantage, Final Expense, Annuities",
  authors: [{ name: "Choice Insurance Agency" }],
  creator: "Choice Insurance Agency",
  publisher: "Choice Insurance Agency",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
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
