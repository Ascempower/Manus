'use client';

import { useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';

import NoSSR from '@/components/utils/NoSSR';

// Lazy load analytics components
const GoogleAnalytics = dynamic(() => import('./GoogleAnalytics'), { ssr: false });
const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false });

interface LazyAnalyticsProps {
  gtmId?: string;
  ga4Id?: string;
}

// Internal component that uses useRef - must be client-only
function LazyAnalyticsInternal({ gtmId, ga4Id }: LazyAnalyticsProps) {
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

// Main LazyAnalytics component with SSR protection
export default function LazyAnalytics(props: LazyAnalyticsProps) {
  // Always return a static fallback during SSR
  if (typeof window === 'undefined') {
    return <div />;
  }

  return (
    <NoSSR fallback={<div />}>
      <LazyAnalyticsInternal {...props} />
    </NoSSR>
  );
}
