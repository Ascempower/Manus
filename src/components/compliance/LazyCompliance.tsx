"use client";

import { lazy, Suspense, useEffect, useState } from 'react';

// Lazy load compliance components
const HIPAANotice = lazy(() => import('./HIPAANotice'));

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

  return (
    <Suspense fallback={null}>
      <HIPAANotice />
    </Suspense>
  );
}"use client";

import { lazy, Suspense, useEffect, useState } from 'react';

// Lazy load compliance components
const HIPAANotice = lazy(() => import('./HIPAANotice'));

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

  return (
    <Suspense fallback={null}>
      <HIPAANotice />
    </Suspense>
  );
}