'use client';

import dynamic from 'next/dynamic';

// Dynamically import client components to prevent SSR issues
// Fixed: Moved all client components with hooks to this wrapper to resolve useRef SSR error
const LazyAnalytics = dynamic(() => import('@/components/analytics/LazyAnalytics'), {
  ssr: false,
});

const LazyCompliance = dynamic(() => import('@/components/compliance/LazyCompliance'), {
  ssr: false,
});

const CookieConsent = dynamic(() => import('@/components/ui/cookie-consent'), {
  ssr: false,
});

const CacheManager = dynamic(() => import('@/components/utils/CacheManager'), {
  ssr: false,
});

const ChoiceInsuranceBadge = dynamic(
  () => import('@/components/widgets').then(mod => ({ default: mod.ChoiceInsuranceBadge })),
  {
    ssr: false,
  }
);

interface ClientComponentsProps {
  ga4Id?: string;
  gtmId?: string;
}

export default function ClientComponents({ ga4Id, gtmId }: ClientComponentsProps) {
  return (
    <>
      {/* Calendly Badge Widget */}
      <ChoiceInsuranceBadge />

      {/* Lazy-loaded compliance and analytics */}
      <LazyCompliance />

      {/* Google Analytics 4: G-YBW50D5K3R & GTM: GTM-PWJPMPC5 - HIPAA Compliant */}
      <LazyAnalytics ga4Id={ga4Id} gtmId={gtmId} />

      {/* Cache Management */}
      <CacheManager checkInterval={15 * 60 * 1000} showNotifications={false} />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </>
  );
}
