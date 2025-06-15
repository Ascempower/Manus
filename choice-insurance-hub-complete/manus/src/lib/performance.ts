// Performance monitoring utilities

export function measureWebVitals() {
  if (typeof window === 'undefined') {
    return;
  }

  // Core Web Vitals measurement
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const metricName = entry.name;
      const value = Math.round(entry.startTime + entry.duration);
      
      // Development performance logging removed for production
      
      // Send to analytics in production
      if (process.env.NODE_ENV === 'production') {
        // Replace with your analytics service
        // gtag('event', metricName, { value });
      }
    }
  });

  // Observe Core Web Vitals
  observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
}

export function preloadCriticalResources() {
  if (typeof window === 'undefined') {
    return;
  }

  // Preload critical images that will be needed soon
  const criticalImages = [
    '/assets/logos/main-logo-orange.png',
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

export function optimizeThirdPartyLoading() {
  if (typeof window === 'undefined') {
    return;
  }

  // Delay third-party scripts until user interaction
  let interacted = false;
  const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];

  const loadThirdParty = () => {
    if (interacted) {
      return;
    }
    interacted = true;

    events.forEach((event) => {
      document.removeEventListener(event, loadThirdParty, true);
    });

    // Load third-party resources here
    // Third-party resources loading after user interaction
  };

  events.forEach((event) => {
    document.addEventListener(event, loadThirdParty, true);
  });

  // Fallback: load after 3 seconds
  setTimeout(loadThirdParty, 3000);
}