'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Lazy load analytics components
const GoogleAnalytics = dynamic(() => import('./GoogleAnalytics'), { ssr: false });
const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false });

interface LazyAnalyticsProps {
  gtmId?: string;
  ga4Id?: string;
}

export default function LazyAnalytics({ gtmId, ga4Id }: LazyAnalyticsProps) {
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only load analytics after user interaction or after 3 seconds
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0,
    rootMargin: '100px',
  });

  // Don't render anything during SSR
  if (!isClient) {
    return <div />;
  }

  // Don't render anything during SSR
  if (!isClient) {
    return <div />;
  }

  return (
    <div ref={elementRef}>
      {isIntersecting && (
        <>
          <GoogleAnalytics gtmId={gtmId} ga4Id={ga4Id} />
          <CookieConsent />
        </>
      )}
    </div>
  );
}
