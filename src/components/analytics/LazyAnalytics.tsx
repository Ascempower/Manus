"use client";

import { lazy, Suspense } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Lazy load analytics components
const GoogleAnalytics = lazy(() => import('./GoogleAnalytics'));
const CookieConsent = lazy(() => import('./CookieConsent'));

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
        <Suspense fallback={null}>
          <GoogleAnalytics gtmId={gtmId} ga4Id={ga4Id} />
          <CookieConsent />
        </Suspense>
      )}
    </div>
  );
}"use client";

import { lazy, Suspense } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Lazy load analytics components
const GoogleAnalytics = lazy(() => import('./GoogleAnalytics'));
const CookieConsent = lazy(() => import('./CookieConsent'));

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
        <Suspense fallback={null}>
          <GoogleAnalytics gtmId={gtmId} ga4Id={ga4Id} />
          <CookieConsent />
        </Suspense>
      )}
    </div>
  );
}