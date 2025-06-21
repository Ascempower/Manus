'use client';

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
  return <ClientComponents ga4Id={ga4Id} gtmId={gtmId} />;
}
