'use client';

import React, { useEffect } from 'react';

interface CalendlyWidgetProps {
  url?: string;
  height?: number;
  className?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, any>;
        utm?: Record<string, string>;
      }) => void;
      closePopupWidget: () => void;
    };
  }
}

export default function CalendlyWidget({
  url = 'https://calendly.com/choiceinsuranceagency/30-minute-meeting',
  height = 700,
  className = '',
  prefill,
}: CalendlyWidgetProps) {
  const calendlyRef = React.useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    // Only load on client side
    if (typeof window === 'undefined') return;

    let script: HTMLScriptElement | null = null;

    const loadCalendly = async () => {
      try {
        // Check if Calendly is already loaded
        if (window.Calendly) {
          initializeWidget();
          return;
        }

        // Load Calendly script
        script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;

        script.onload = () => {
          setIsLoaded(true);
          initializeWidget();
        };

        script.onerror = () => {
          setError('Failed to load Calendly widget');
        };

        document.head.appendChild(script);

        // Also load CSS
        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Add custom CSS to hide branding and apply custom styling
        const customStyle = document.createElement('style');
        customStyle.textContent = `
          /* Hide Calendly branding and install app prompts */
          .calendly-inline-widget [data-testid="branding"],
          .calendly-inline-widget .calendly-badge-widget,
          .calendly-inline-widget .calendly-badge-content,
          .calendly-inline-widget [class*="branding"],
          .calendly-inline-widget [class*="badge"],
          .calendly-inline-widget [data-testid="install-app"],
          .calendly-inline-widget [aria-label*="install"],
          .calendly-inline-widget [title*="install"],
          .calendly-inline-widget .calendly-popup-close,
          .calendly-inline-widget [data-testid="popup-website-embed"],
          .calendly-inline-widget [class*="footer"],
          .calendly-inline-widget [class*="powered-by"],
          .calendly-inline-widget [data-testid*="footer"],
          .calendly-inline-widget [data-testid*="powered"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
          }

          /* Custom branding colors - Dark green background with coral accents */
          .calendly-inline-widget {
            --calendly-color-primary: #42615a !important;
            --calendly-color-primary-hover: #8bb5b7 !important;
            --calendly-color-secondary: #dd8b66 !important;
            --calendly-color-text: #dd8b66 !important;
            --calendly-color-background: #42615a !important;
            --calendly-border-radius: 8px !important;
          }

          /* Style the iframe container */
          .calendly-inline-widget iframe {
            border-radius: 8px !important;
            border: 2px solid #dd8b66 !important;
            background-color: #42615a !important;
          }
        `;
        document.head.appendChild(customStyle);
      } catch (err) {
        setError('Error loading Calendly widget');
        console.error('Calendly loading error:', err);
      }
    };

    const initializeWidget = () => {
      if (!calendlyRef.current || !window.Calendly) return;

      try {
        // Clear any existing content
        calendlyRef.current.innerHTML = '';

        // Initialize Calendly widget with custom branding
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: calendlyRef.current,
          prefill: prefill || {},
          utm: {
            utmCampaign: 'Website Contact Form',
            utmSource: 'choiceinsurancehub.com',
            utmMedium: 'website',
          },
          // Custom styling to match brand colors
          branding: false,
          primaryColor: '42615a', // Deep forest green
          textColor: 'dd8b66', // Coral text
          backgroundColor: '42615a', // Dark green background
        });
      } catch (err) {
        setError('Error initializing Calendly widget');
        console.error('Calendly initialization error:', err);
      }
    };

    loadCalendly();

    // Cleanup
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [url, prefill]);

  if (error) {
    return (
      <div className={`rounded-lg border border-red-200 bg-red-50 p-6 text-center ${className}`}>
        <p className="text-red-600">Unable to load booking calendar.</p>
        <p className="mt-2 text-sm text-red-500">
          Please{' '}
          <a
            href="https://calendly.com/choiceinsuranceagency/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            click here to book directly
          </a>{' '}
          or call us at{' '}
          <a href="tel:8774142319" className="underline hover:no-underline">
            (877) 414-2319
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className={`calendly-widget-container ${className}`}>
      {/* Call-to-Action Header */}
      <div className="mb-6 rounded-t-lg bg-brand-deep-forest-green p-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-brand-warm-beige-coral">
          Schedule Your Free Consultation
        </h2>
        <p className="text-brand-warm-beige-coral/90">
          Book a 30-minute meeting with our insurance experts to discuss your needs
        </p>
      </div>

      {!isLoaded && (
        <div
          className="flex items-center justify-center rounded-b-lg bg-brand-deep-forest-green text-brand-warm-beige-coral"
          style={{ height: `${height}px` }}
        >
          <div className="text-center">
            <div className="mb-2 h-8 w-8 animate-spin rounded-full border-4 border-brand-warm-beige-coral border-t-transparent"></div>
            <p>Loading booking calendar...</p>
          </div>
        </div>
      )}
      <div
        ref={calendlyRef}
        style={{ minHeight: `${height}px` }}
        className={`${isLoaded ? 'block' : 'hidden'} overflow-hidden rounded-b-lg`}
      />
    </div>
  );
}

// Inline Calendly Widget (smaller, embedded)
export function CalendlyInline({ className = '' }: { className?: string }) {
  return (
    <CalendlyWidget
      height={600}
      className={`rounded-lg border-2 border-brand-warm-beige-coral shadow-xl ${className}`}
    />
  );
}

// Popup trigger button (alternative approach)
export function CalendlyPopupButton({
  children,
  className = '',
  url = 'https://calendly.com/choiceinsuranceagency/30-minute-meeting',
}: {
  children: React.ReactNode;
  className?: string;
  url?: string;
}) {
  const handleClick = () => {
    // Open Calendly in a new window as fallback
    window.open(url, '_blank', 'width=800,height=700,scrollbars=yes,resizable=yes');
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-md bg-brand-warm-beige-coral px-6 py-3 text-white transition-colors hover:bg-brand-warm-beige-coral-dark ${className}`}
    >
      {children}
    </button>
  );
}
