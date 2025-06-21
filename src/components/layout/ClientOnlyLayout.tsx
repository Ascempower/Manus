'use client';

import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import SSRErrorBoundary from '@/components/utils/SSRErrorBoundary';

const ClientLayoutContent = dynamic(() => import('./ClientLayoutContent'), {
  ssr: false,
  loading: () => null,
});

interface ClientOnlyLayoutProps {
  children: React.ReactNode;
  ga4Id: string | undefined;
  gtmId: string | undefined;
}

export default function ClientOnlyLayout(props: ClientOnlyLayoutProps) {
  const { children, ga4Id, gtmId } = props;
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

  // Additional safety check for client-side rendering
  if (typeof window === 'undefined') {
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
    <SSRErrorBoundary>
      <ClientLayoutContent ga4Id={ga4Id} gtmId={gtmId}>
        {children}
      </ClientLayoutContent>
    </SSRErrorBoundary>
  );
}
