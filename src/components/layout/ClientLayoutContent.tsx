'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'), {
  ssr: false,
  loading: () => (
    <div className="flex h-16 items-center justify-between bg-brand-deep-forest-green px-4">
      <div className="h-8 w-32 animate-pulse rounded bg-brand-deep-forest-green/50" />
      <div className="flex gap-2">
        <div className="h-8 w-20 animate-pulse rounded bg-brand-deep-forest-green/50" />
        <div className="h-8 w-24 animate-pulse rounded bg-brand-deep-forest-green/50" />
      </div>
    </div>
  ),
});

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
