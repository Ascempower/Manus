'use client';

import dynamic from 'next/dynamic';

// Type definitions for better JSX compatibility (kept for future use)
// type LazyComponent<P = any> = ComponentType<P>;

// Lazy load heavy UI components
export const LazyAccordion = dynamic(
  () => import('@/components/ui/accordion').then(mod => ({ default: mod.Accordion })),
  {
    loading: () => <div className="h-12 animate-pulse rounded bg-gray-200" />,
    ssr: false,
  }
);

export const LazyDialog = dynamic(
  () => import('@/components/ui/dialog').then(mod => ({ default: mod.Dialog })),
  {
    loading: () => null,
    ssr: false,
  }
);

export const LazyCarousel = dynamic(() => import('@/app/testimonials/TestimonialsCarousel'), {
  loading: () => <div className="h-64 animate-pulse rounded bg-gray-200" />,
  ssr: false,
});

export const LazyContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  loading: () => <div className="h-96 animate-pulse rounded bg-gray-200" />,
  ssr: false,
});

// Lazy load analytics components
export const LazyGoogleAnalytics = dynamic(() => import('@/components/analytics/GoogleAnalytics'), {
  ssr: false,
});

export const LazyCookieConsent = dynamic(() => import('@/components/analytics/CookieConsent'), {
  ssr: false,
});

// Lazy load compliance components
export const LazyHIPAANotice = dynamic(() => import('@/components/compliance/HIPAANotice'), {
  ssr: false,
});

// Performance monitoring
export const LazyPerformanceMonitor = dynamic(
  () => import('@/components/performance/PerformanceMonitor'),
  {
    ssr: false,
  }
);

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

const dynamicComponents = {
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

export default dynamicComponents;
