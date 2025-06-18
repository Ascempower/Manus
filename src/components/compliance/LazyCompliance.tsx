'use client';

import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

// Lazy load compliance components
const HIPAANotice = dynamic(() => import('./HIPAANotice'), { ssr: false });

export default function LazyCompliance() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load compliance components after initial page load
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return <HIPAANotice />;
}
