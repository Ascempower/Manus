"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Type definitions for better JSX compatibility
type LazyComponent<P = {}> = React.ComponentType<P>;

// Lazy load heavy UI components
export const LazyAccordion: LazyComponent = dynamic(
  () => import('@/components/ui/accordion').then(mod => ({ default: mod.Accordion })), 
  {
    loading: () => <div className="animate-pulse h-12 bg-gray-200 rounded" />,
    ssr: false,
  }
) as LazyComponent;

export const LazyDialog: LazyComponent = dynamic(
  () => import('@/components/ui/dialog').then(mod => ({ default: mod.Dialog })), 
  {
    loading: () => null,
    ssr: false,
  }
) as LazyComponent;

export const LazyCarousel: LazyComponent<any> = dynamic(
  () => import('@/app/testimonials/TestimonialsCarousel'), 
  {
    loading: () => <div className="animate-pulse h-64 bg-gray-200 rounded" />,
    ssr: false,
  }
) as LazyComponent<any>;

export const LazyContactForm: LazyComponent = dynamic(
  () => import('@/components/forms/ContactForm'), 
  {
    loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded" />,
    ssr: false,
  }
) as LazyComponent;

// Lazy load analytics components
export const LazyGoogleAnalytics: LazyComponent<any> = dynamic(
  () => import('@/components/analytics/GoogleAnalytics'), 
  {
    ssr: false,
  }
) as LazyComponent<any>;

export const LazyCookieConsent: LazyComponent = dynamic(
  () => import('@/components/analytics/CookieConsent'), 
  {
    ssr: false,
  }
) as LazyComponent;

// Lazy load compliance components
export const LazyHIPAANotice: LazyComponent = dynamic(
  () => import('@/components/compliance/HIPAANotice'), 
  {
    ssr: false,
  }
) as LazyComponent;

// Performance monitoring
export const LazyPerformanceMonitor: LazyComponent = dynamic(
  () => import('@/components/performance/PerformanceMonitor'), 
  {
    ssr: false,
  }
) as LazyComponent;

// Chart components (if you add any)
// export const LazyChart = dynamic(() => import('@/components/ui/chart'), {
//   loading: () => <div className="animate-pulse h-64 bg-gray-200 rounded" />,
//   ssr: false,
// });

// Map components (if you add any)
// export const LazyMap = dynamic(() => import('@/components/ui/map'), {
//   loading: () => <div className="animate-pulse h-64 bg-gray-200 rounded" />,
//   ssr: false,
// });

export default {
  LazyAccordion,
  LazyDialog,
  LazyCarousel,
  LazyContactForm,
  LazyGoogleAnalytics,
  LazyCookieConsent,
  LazyHIPAANotice,
  LazyPerformanceMonitor,
  // LazyChart,
  // LazyMap,
};