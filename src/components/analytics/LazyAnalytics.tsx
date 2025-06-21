'use client';

import { useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';

// Lazy load analytics components
const GoogleAnalytics = dynamic(() => import('./GoogleAnalytics'), { ssr: false });
const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false });

interface LazyAnalyticsProps {
  gtmId?: string;
  ga4Id?: string;
}

export default function LazyAnalytics({ gtmId, ga4Id }: LazyAnalyticsProps) {
  const [isClient, setIsClient] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Simple timeout-based loading instead of intersection observer
  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isClient]);

  // Don't render anything during SSR
  if (!isClient) {
    return <div />;
  }

  return (
    <div ref={elementRef}>
      {shouldLoad && (
        <>
          <GoogleAnalytics gtmId={gtmId} ga4Id={ga4Id} />
          <CookieConsent />
        </>
      )}
    </div>
  );
}
