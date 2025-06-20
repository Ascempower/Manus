/// <reference types="react" />
/// <reference types="react-dom" />

declare global {
  // Calendly Widget Types
  interface CalendlyPrefillData {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
    [key: string]: string | number | boolean | Record<string, string> | undefined;
  }

  interface CalendlyEvent {
    event: string;
    payload: {
      event_type: string;
      invitee: {
        name: string;
        email: string;
      };
    };
  }
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }

  interface Window {
    /**
     * Google Tag Manager function
     */
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;

    /**
     * Google Tag Manager data layer
     */
    dataLayer: Array<Record<string, unknown>>;

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

    /**
     * Calendly Widget API
     */
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: CalendlyPrefillData;
        utm?: Record<string, string>;
      }) => void;
      initPopupWidget: (options: {
        url: string;
        prefill?: CalendlyPrefillData;
        utm?: Record<string, string>;
      }) => void;
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initEventListener: (options: {
        onEventScheduled?: (event: CalendlyEvent) => void;
        onDateAndTimeSelected?: (event: CalendlyEvent) => void;
        onEventTypeViewed?: (event: CalendlyEvent) => void;
        onProfilePageViewed?: (event: CalendlyEvent) => void;
      }) => void;
      closePopupWidget: () => void;
      destroyBadgeWidget: () => void;
    };
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

export { };

