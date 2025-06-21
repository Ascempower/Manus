'use client';

import { ReactNode } from 'react';

interface BuildTimeGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Component that prevents rendering during build time to avoid SSR issues
 * This is specifically designed to prevent useRef and other client-only hooks
 * from being executed during static generation
 */
export default function BuildTimeGuard({ children, fallback = null }: BuildTimeGuardProps) {
  // During build time, Next.js sets NODE_ENV to 'production' but window is undefined
  // During actual runtime (even in production), window will be defined
  if (typeof window === 'undefined') {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}'use client';


interface BuildTimeGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Component that prevents rendering during build time to avoid SSR issues
 * This is specifically designed to prevent useRef and other client-only hooks
 * from being executed during static generation
 */
export default function BuildTimeGuard({ children, fallback = null }: BuildTimeGuardProps) {
  // During build time, Next.js sets NODE_ENV to 'production' but window is undefined
  // During actual runtime (even in production), window will be defined
  if (typeof window === 'undefined') {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}