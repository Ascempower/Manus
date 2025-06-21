'use client';

import dynamic from 'next/dynamic';

// Dynamically import client components to prevent SSR issues
// Fixed: Moved all client components with hooks to this wrapper to resolve useRef SSR error
const LazyAnalytics = dynamic(() => import('@/components/analytics/LazyAnalytics'), {
  ssr: false,
  loading: () => null,
});

const LazyCompliance = dynamic(() => import('@/components/compliance/LazyCompliance'), {
  ssr: false,
  loading: () => null,
});

const CookieConsent = dynamic(() => import('@/components/ui/cookie-consent'), {
  ssr: false,
  loading: () => null,
});

const CacheManager = dynamic(() => import('@/components/utils/CacheManager'), {
  ssr: false,
  loading: () => null,
});

const ChoiceInsuranceBadge = dynamic(
  () =>
    import('@/components/widgets/CalendlyBadge').then(mod => ({
      default: mod.ChoiceInsuranceBadge,
    })),
  {
    ssr: false,
    loading: () => null,
  }
);

interface ClientComponentsProps {
  /** Google Analytics 4 ID (e.g., G-XXXXXXXXXX) */
  ga4Id?: string;
  /** Google Tag Manager ID (e.g., GTM-XXXXXXX) */
  gtmId?: string;
  /** Firebase configuration key for client-side features */
  firebaseKey?: string;
  /** Sentry DSN for error tracking */
  sentryDsn?: string;
  /** API base URL for client-side requests */
  apiUrl?: string;
  /** Site URL for canonical references */
  siteUrl?: string;
}

export default function ClientComponents({
  ga4Id,
  gtmId,
  firebaseKey: _firebaseKey,
  sentryDsn: _sentryDsn,
  apiUrl: _apiUrl,
  siteUrl: _siteUrl,
}: ClientComponentsProps) {
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
