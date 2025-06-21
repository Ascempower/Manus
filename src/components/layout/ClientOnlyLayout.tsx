'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

const ClientLayoutContent = dynamic(() => import('./ClientLayoutContent'), {
  ssr: false,
  loading: () => null,
});

interface ClientOnlyLayoutProps {
  children: React.ReactNode;
  ga4Id?: string;
  gtmId?: string;
}

export default function ClientOnlyLayout({ children, ga4Id, gtmId }: ClientOnlyLayoutProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Server-safe fallback */}
        <div className="h-16 bg-brand-deep-forest-green" />
        <main className="flex-1">{children}</main>
        <div className="h-32 bg-gray-100" />
      </div>
    );
  }

  return (
    <ClientLayoutContent ga4Id={ga4Id} gtmId={gtmId}>
      {children}
    </ClientLayoutContent>
  );
}
