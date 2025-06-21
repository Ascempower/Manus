'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

const ClientComponents = dynamic(() => import('./ClientComponents'), {
  ssr: false,
  loading: () => null,
});

interface ClientComponentsWrapperProps {
  ga4Id?: string;
  gtmId?: string;
}

export default function ClientComponentsWrapper({ ga4Id, gtmId }: ClientComponentsWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render anything during SSR
  if (!isClient) {
    return null;
  }

  return <ClientComponents ga4Id={ga4Id} gtmId={gtmId} />;
}
