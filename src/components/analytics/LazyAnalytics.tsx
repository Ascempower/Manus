'use client';

import React from 'react';

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
  // Only load analytics after user interaction or after 3 seconds
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0,
    rootMargin: '100px',
  });

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
