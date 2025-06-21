'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

const ClientComponents = dynamic(() => import('./ClientComponents'), {
  ssr: false,
  loading: () => <div />,
});

type OptionalString = string | undefined;

type ClientComponentsWrapperProps = {
  ga4Id: OptionalString;
  gtmId: OptionalString;
  firebaseKey: OptionalString;
  sentryDsn: OptionalString;
  apiUrl: OptionalString;
  siteUrl: OptionalString;
};

export default function ClientComponentsWrapper(
  props: ClientComponentsWrapperProps
): JSX.Element | null {
  const { ga4Id, gtmId, firebaseKey, sentryDsn, apiUrl, siteUrl } = props;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
