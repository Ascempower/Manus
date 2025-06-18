'use client';

import { useEffect } from 'react';

// Safe performance metric sending function
function sendPerformanceMetric(metricName: string, value: number | object) {
  // Send to your analytics service here
  // This is a placeholder - implement with your actual analytics
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', 'performance_metric', {
        metric_name: metricName,
        value: typeof value === 'object' ? JSON.stringify(value) : value,
      });
    } catch {
      // Silently fail in production
    }
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Check if PerformanceObserver is supported
    if (typeof PerformanceObserver === 'undefined') {
      return;
    }

    // Monitor Core Web Vitals
    let observer: PerformanceObserver | null = null;
    let resourceObserver: PerformanceObserver | null = null;

    try {
      observer = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          // Instead of console logging, send to a secure analytics endpoint
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            // Send to analytics instead of console logging
            sendPerformanceMetric('navigation', {
              domContentLoaded:
                navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              firstPaint: navEntry.responseEnd - navEntry.requestStart,
            });
          }

          if (entry.entryType === 'largest-contentful-paint') {
            sendPerformanceMetric('LCP', entry.startTime);
          }

          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            if (fidEntry.processingStart) {
              sendPerformanceMetric('FID', fidEntry.processingStart - fidEntry.startTime);
            }
          }

          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any; // Using any here for compatibility
            if (clsEntry && typeof clsEntry.value === 'number') {
              sendPerformanceMetric('CLS', clsEntry.value);
            }
          }
        });
      });

      // Observe different performance metrics
      try {
        observer.observe({
          entryTypes: ['navigation', 'largest-contentful-paint', 'first-input', 'layout-shift'],
        });
      } catch {
        // Fallback for browsers that don't support all entry types
        try {
          observer.observe({ entryTypes: ['navigation'] });
        } catch {
          // Silently fail in production
        }
      }

      // Monitor resource loading
      resourceObserver = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            // Log slow resources
            if (resourceEntry.duration > 1000) {
              sendPerformanceMetric('slow_resource', {
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
      } catch {
        // Silently fail in production
      }
    } catch {
      // Silently fail in production
    }

    return () => {
      try {
        if (observer) observer.disconnect();
        if (resourceObserver) resourceObserver.disconnect();
      } catch {
        // Silently fail in production
      }
    };
  }, []);

  return null;
}
