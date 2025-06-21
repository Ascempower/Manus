'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'), {
  ssr: false,
  loading: () => (
    <header className="sticky top-0 z-50 w-full border-b border-brand-teal-blue/40 bg-brand-deep-forest-green text-brand-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="mr-6 flex items-center">
          <div className="h-10 w-32 animate-pulse rounded bg-brand-deep-forest-green/50" />
        </div>
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <div className="h-4 w-16 animate-pulse rounded bg-brand-deep-forest-green/50" />
          <div className="h-4 w-20 animate-pulse rounded bg-brand-deep-forest-green/50" />
          <div className="h-4 w-16 animate-pulse rounded bg-brand-deep-forest-green/50" />
          <div className="h-4 w-24 animate-pulse rounded bg-brand-deep-forest-green/50" />
          <div className="h-4 w-12 animate-pulse rounded bg-brand-deep-forest-green/50" />
          <div className="h-4 w-20 animate-pulse rounded bg-brand-deep-forest-green/50" />
          <div className="h-4 w-16 animate-pulse rounded bg-brand-deep-forest-green/50" />
        </nav>
        <div className="flex items-center gap-x-2">
          <div className="hidden md:flex md:gap-2">
            <div className="h-9 w-20 animate-pulse rounded bg-brand-deep-forest-green/50" />
            <div className="h-9 w-24 animate-pulse rounded bg-brand-deep-forest-green/50" />
          </div>
        </div>
      </div>
    </header>
  ),
});

const Footer = dynamic(() => import('./Footer'), {
  ssr: false,
  loading: () => <div className="h-32 bg-gray-100" />,
});

const ClientComponents = dynamic(() => import('./ClientComponents'), {
  ssr: false,
  loading: () => <div />,
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
