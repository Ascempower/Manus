'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  CALENDLY_CONFIG,
  CALENDLY_CUSTOM_STYLES,
  CALENDLY_INIT_OPTIONS,
  getCalendlyUrl,
} from '@/constants/calendly';

interface CalendlyWidgetProps {
  variant?: 'default' | 'inline';
  className?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  onEventScheduled?: (event: CalendlyEvent) => void;
  onError?: (error: string) => void;
}

// Widget state management
type WidgetState = 'loading' | 'loaded' | 'error' | 'retry';

export default function CalendlyWidget({
  variant = 'default',
  className = '',
  prefill,
  onEventScheduled,
  onError,
}: CalendlyWidgetProps) {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<WidgetState>('loading');
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const timeoutRef = useRef<number>();
  const styleElementRef = useRef<HTMLStyleElement>();

  // Get configuration for the variant
  const config = CALENDLY_CONFIG.dimensions[variant] || CALENDLY_CONFIG.dimensions.default;
  const calendlyUrl = getCalendlyUrl();

  // Cleanup function
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
    if (styleElementRef.current && styleElementRef.current.parentNode) {
      try {
        styleElementRef.current.parentNode.removeChild(styleElementRef.current);
        styleElementRef.current = undefined;
      } catch (e) {
        // Ignore cleanup errors
      }
    }
    // Clear calendly container
    if (calendlyRef.current) {
      calendlyRef.current.innerHTML = '';
    }
  }, []);

  // Error handler
  const handleError = useCallback(
    (errorMessage: string) => {
      setState('error');
      setError(errorMessage);
      onError?.(errorMessage);
      console.error('Calendly Widget Error:', errorMessage);
    },
    [onError]
  );

  // Retry mechanism
  const retryLoad = useCallback(() => {
    if (retryCount < CALENDLY_INIT_OPTIONS.maxRetries) {
      setState('retry');
      setRetryCount(prev => prev + 1);
      window.setTimeout(
        () => {
          setState('loading');
          setError(null);
        },
        CALENDLY_INIT_OPTIONS.retryDelay * (retryCount + 1)
      );
    } else {
      handleError('Maximum retry attempts reached');
    }
  }, [retryCount, handleError]);

  // Initialize Calendly widget
  const initializeWidget = useCallback(() => {
    if (!calendlyRef.current || !window.Calendly) {
      handleError('Calendly container or library not available');
      return;
    }

    try {
      // Clear any existing content
      calendlyRef.current.innerHTML = '';

      // Initialize Calendly widget with robust configuration
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: calendlyRef.current,
        prefill: prefill || {},
        utm: CALENDLY_CONFIG.utm,
      });

      // Set up event listeners
      if (onEventScheduled) {
        window.Calendly.initEventListener({
          onEventScheduled: onEventScheduled,
        });
      }

      setState('loaded');
    } catch (err) {
      handleError(
        `Failed to initialize widget: ${err instanceof Error ? err.message : 'Unknown error'}`
      );
    }
  }, [calendlyUrl, prefill, onEventScheduled, handleError]);

  // Load Calendly resources
  const loadCalendlyResources = useCallback(async () => {
    // Check if already loaded
    if (window.Calendly) {
      initializeWidget();
      return;
    }

    try {
      // Set loading timeout
      timeoutRef.current = window.setTimeout(() => {
        handleError('Loading timeout exceeded');
      }, CALENDLY_INIT_OPTIONS.loadTimeout);

      // Load CSS first
      const existingCss = document.querySelector(`link[href="${CALENDLY_INIT_OPTIONS.cssUrl}"]`);
      if (!existingCss) {
        const link = document.createElement('link');
        link.href = CALENDLY_INIT_OPTIONS.cssUrl;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        document.head.appendChild(link);
      }

      // Add custom styles
      if (!styleElementRef.current) {
        styleElementRef.current = document.createElement('style');
        styleElementRef.current.textContent = CALENDLY_CUSTOM_STYLES;
        styleElementRef.current.setAttribute('data-calendly-custom', 'true');
        document.head.appendChild(styleElementRef.current);
      }

      // Load JavaScript
      const existingScript = document.querySelector(
        `script[src="${CALENDLY_INIT_OPTIONS.scriptUrl}"]`
      );
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = CALENDLY_INIT_OPTIONS.scriptUrl;
        script.async = true;
        script.defer = true;

        script.onload = () => {
          if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
          }
          initializeWidget();
        };

        script.onerror = () => {
          if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
          }
          retryLoad();
        };

        document.head.appendChild(script);
      } else {
        // Script already exists, check if Calendly is available
        if (window.Calendly) {
          initializeWidget();
        } else {
          // Wait a bit and check again
          window.setTimeout(() => {
            if (window.Calendly) {
              initializeWidget();
            } else {
              retryLoad();
            }
          }, 500);
        }
      }
    } catch (err) {
      handleError(
        `Failed to load resources: ${err instanceof Error ? err.message : 'Unknown error'}`
      );
    }
  }, [initializeWidget, handleError, retryLoad]);

  // Effect to load Calendly
  useEffect(() => {
    // Only load on client side
    if (typeof window === 'undefined') return;

    // Reset state when dependencies change
    setState('loading');
    setError(null);

    loadCalendlyResources();

    // Cleanup on unmount
    return () => {
      cleanup();
      // Additional cleanup for event listeners
      if (window.Calendly && window.Calendly.closePopupWidget) {
        try {
          window.Calendly.closePopupWidget();
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, [loadCalendlyResources, cleanup]);

  // Render loading state
  if (state === 'loading' || state === 'retry') {
    return (
      <div className={`${CALENDLY_INIT_OPTIONS.containerClass} ${className}`}>
        <div className="mb-6 rounded-t-lg bg-brand-deep-forest-green p-6 text-center">
          <h2 className="mb-2 text-2xl font-bold text-brand-warm-beige-coral">
            Schedule Your Free Consultation
          </h2>
          <p className="text-brand-warm-beige-coral/90">
            Book a 30-minute meeting with our insurance experts to discuss your needs
          </p>
        </div>
        <div
          className={CALENDLY_INIT_OPTIONS.loadingClass}
          style={{ minHeight: `${config.height}px` }}
        >
          <div className="text-center">
            <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-brand-warm-beige-coral border-t-transparent"></div>
            <p className="text-lg font-medium">
              {state === 'retry'
                ? `Retrying... (${retryCount}/${CALENDLY_INIT_OPTIONS.maxRetries})`
                : 'Loading booking calendar...'}
            </p>
            <p className="mt-2 text-sm opacity-75">
              Please wait while we prepare your scheduling options
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Render error state
  if (state === 'error') {
    return (
      <div className={`${CALENDLY_INIT_OPTIONS.containerClass} ${className}`}>
        <div className="mb-6 rounded-t-lg bg-brand-deep-forest-green p-6 text-center">
          <h2 className="mb-2 text-2xl font-bold text-brand-warm-beige-coral">
            Schedule Your Free Consultation
          </h2>
          <p className="text-brand-warm-beige-coral/90">
            Book a 30-minute meeting with our insurance experts to discuss your needs
          </p>
        </div>
        <div
          className={`${CALENDLY_INIT_OPTIONS.errorClass} rounded-b-lg`}
          style={{ minHeight: `${config.height}px` }}
        >
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-red-700">
                Unable to Load Booking Calendar
              </h3>
              <p className="mb-4 text-red-600">
                {error || 'There was a problem loading the scheduling widget.'}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <button
                onClick={retryLoad}
                className="rounded-lg bg-brand-deep-forest-green px-6 py-2 text-white transition-colors hover:bg-brand-deep-forest-green/90"
                disabled={retryCount >= CALENDLY_INIT_OPTIONS.maxRetries}
              >
                {retryCount >= CALENDLY_INIT_OPTIONS.maxRetries
                  ? 'Max Retries Reached'
                  : 'Try Again'}
              </button>

              <div className="text-center">
                <p className="mb-2 text-sm text-gray-600">Or contact us directly:</p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href={CALENDLY_CONFIG.fallback.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
                  >
                    Book on Calendly.com
                  </a>
                  <a
                    href={`tel:${CALENDLY_CONFIG.fallback.phone.replace(/[^\d]/g, '')}`}
                    className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm text-white transition-colors hover:bg-green-700"
                  >
                    Call {CALENDLY_CONFIG.fallback.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render loaded widget
  return (
    <div className={`${CALENDLY_INIT_OPTIONS.containerClass} ${className}`}>
      <div className="mb-6 rounded-t-lg bg-brand-deep-forest-green p-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-brand-warm-beige-coral">
          Schedule Your Free Consultation
        </h2>
        <p className="text-brand-warm-beige-coral/90">
          Book a 30-minute meeting with our insurance experts to discuss your needs
        </p>
      </div>
      <div
        ref={calendlyRef}
        style={{ minHeight: `${config.height}px` }}
        className="overflow-hidden rounded-b-lg bg-white"
      />
    </div>
  );
}

// Inline Calendly Widget (smaller, embedded)
export function CalendlyInline({
  className = '',
  onEventScheduled,
  onError,
}: {
  className?: string;
  onEventScheduled?: (event: CalendlyEvent) => void;
  onError?: (error: string) => void;
}) {
  return (
    <CalendlyWidget
      variant="inline"
      className={`rounded-lg border-2 border-brand-warm-beige-coral shadow-xl ${className}`}
      onEventScheduled={onEventScheduled}
      onError={onError}
    />
  );
}

// Popup trigger button (robust fallback approach)
export function CalendlyPopupButton({
  children,
  className = '',
  onEventScheduled,
}: {
  children: React.ReactNode;
  className?: string;
  onEventScheduled?: (event: CalendlyEvent) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(async () => {
    setIsLoading(true);

    try {
      // Try to use Calendly popup if available
      if (window.Calendly && window.Calendly.initPopupWidget) {
        window.Calendly.initPopupWidget({
          url: getCalendlyUrl(),
          utm: CALENDLY_CONFIG.utm,
        });

        if (onEventScheduled) {
          window.Calendly.initEventListener({
            onEventScheduled: onEventScheduled,
          });
        }
      } else {
        // Fallback to opening in new window
        const { width, height } = CALENDLY_CONFIG.dimensions.popup;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;

        window.open(
          CALENDLY_CONFIG.fallback.directUrl,
          '_blank',
          `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
        );
      }
    } catch (error) {
      console.error('Error opening Calendly popup:', error);
      // Ultimate fallback - direct link
      window.open(CALENDLY_CONFIG.fallback.directUrl, '_blank');
    } finally {
      setIsLoading(false);
    }
  }, [onEventScheduled]);

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`inline-flex items-center justify-center rounded-md bg-brand-warm-beige-coral px-6 py-3 text-white transition-colors hover:bg-brand-warm-beige-coral-dark disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {isLoading ? (
        <>
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          Opening...
        </>
      ) : (
        children
      )}
    </button>
  );
}
