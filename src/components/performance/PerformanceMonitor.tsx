"use client";

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Log performance metrics (you can send to analytics)
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            firstPaint: navEntry.responseEnd - navEntry.requestStart,
          });
        }

        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }

        if (entry.entryType === 'first-input') {
          console.log('FID:', (entry as any).processingStart - entry.startTime);
        }

        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', (entry as any).value);
        }
      });
    });

    // Observe different performance metrics
    try {
      observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      try {
        observer.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        console.log('Performance Observer not supported');
      }
    }

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          // Log slow resources
          if (resourceEntry.duration > 1000) {
            console.log('Slow resource:', {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              size: resourceEntry.transferSize,
            });
          }
        }
      });
    });

    try {
      resourceObserver.observe({ entryTypes: ['resource'] });
    } catch (e) {
      console.log('Resource Performance Observer not supported');
    }

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, []);

  return null;
}