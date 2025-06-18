/// <reference types="react" />
/// <reference types="react-dom" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  interface Window {
    /**
     * Google Tag Manager function
     */
    gtag: (...args: any[]) => void;

    /**
     * Google Tag Manager data layer
     */
    dataLayer: any[];

    /**
     * VGS Collect for secure form handling
     */
    VGSCollect?: {
      create: (
        vaultId: string,
        environment: string,
        callback?: (state: unknown) => void
      ) => unknown;
    };

    /**
     * Request Idle Callback API
     */
    requestIdleCallback: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;

    /**
     * Cancel Idle Callback API
     */
    cancelIdleCallback: (handle: number) => void;
  }

  /**
   * Performance Observer API extensions
   */
  interface PerformanceObserverInit {
    entryTypes: string[];
    buffered?: boolean;
  }

  interface LayoutShift extends PerformanceEntry {
    value: number;
    hadRecentInput: boolean;
  }

  /**
   * Extended Navigator interface
   */
  interface Navigator {
    connection?: {
      effectiveType: string;
      downlink: number;
      rtt: number;
      saveData: boolean;
    };
  }

  /**
   * Service Worker extensions
   */
  interface ServiceWorkerRegistration {
    periodicSync?: {
      register: (tag: string, options?: { minInterval: number }) => Promise<void>;
    };
    pushManager: {
      subscribe: (options: PushSubscriptionOptionsInit) => Promise<PushSubscription>;
      getSubscription: () => Promise<PushSubscription | null>;
    };
  }

  /**
   * Web Vitals types
   */
  type WebVitalsMetricName = 'CLS' | 'FID' | 'LCP' | 'TTFB' | 'FCP';

  interface WebVitalsMetric {
    name: WebVitalsMetricName;
    value: number;
    delta: number;
    id: string;
    isFinal: boolean;
  }
}

export {};
