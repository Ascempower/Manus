'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

const ClientComponents = dynamic(() => import('./ClientComponents'), {
  ssr: false,
  loading: () => <div />,
});

// Custom hook for client-side mounting
function useIsClient(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

interface ClientComponentsWrapperProps {
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

export default function ClientComponentsWrapper({
  ga4Id,
  gtmId,
  firebaseKey,
  sentryDsn,
  apiUrl,
  siteUrl,
}: ClientComponentsWrapperProps): JSX.Element | null {
  const isClient = useIsClient();

  // Don't render anything during SSR
  if (!isClient) {
    return null;
  }

  return (
    <ClientComponents
      ga4Id={ga4Id}
      gtmId={gtmId}
      firebaseKey={firebaseKey}
      sentryDsn={sentryDsn}
      apiUrl={apiUrl}
      siteUrl={siteUrl}
    />
  );
}
