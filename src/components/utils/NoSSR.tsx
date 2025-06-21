'use client';

import { useEffect, useState } from 'react';

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function NoSSR({ children, fallback = null }: NoSSRProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // During SSR, always return fallback
  if (typeof window === 'undefined') {
    return <>{fallback}</>;
  }

  // On client, wait for mount before rendering children
  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
