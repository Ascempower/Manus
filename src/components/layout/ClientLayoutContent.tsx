'use client';

import dynamic from 'next/dynamic';

// Import Header directly since it needs to be interactive
import Header from './Header';

const Footer = dynamic(() => import('./Footer'), {
  ssr: false,
  loading: () => <div className="h-32 bg-gray-100" />,
});

const ClientComponents = dynamic(() => import('./ClientComponents'), {
  ssr: false,
  loading: () => null,
});

interface ClientLayoutContentProps {
  children: React.ReactNode;
  ga4Id?: string;
  gtmId?: string;
}

export default function ClientLayoutContent({ children, ga4Id, gtmId }: ClientLayoutContentProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
      <ClientComponents ga4Id={ga4Id} gtmId={gtmId} />
    </>
  );
}
