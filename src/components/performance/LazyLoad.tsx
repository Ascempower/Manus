'use client';

import React from 'react';

import NoSSR from '@/components/utils/NoSSR';

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

// Internal component that uses useRef - must be client-only
function LazyLoadInternal({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  className = '',
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!isClient || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, isClient]);

  return (
    <div ref={ref} className={className}>
      {isClient && isVisible ? children : <div style={{ minBlockSize: '200px' }} />}
    </div>
  );
}

// Main LazyLoad component with SSR protection
export default function LazyLoad(props: LazyLoadProps) {
  return (
    <NoSSR fallback={<div style={{ minBlockSize: '200px' }} className={props.className} />}>
      <LazyLoadInternal {...props} />
    </NoSSR>
  );
}
