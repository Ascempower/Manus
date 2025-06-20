'use client';

import { useEffect, useState } from 'react';

interface CalendlyBadgeProps {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

// Calendly types are defined in src/types/calendly.d.ts

export default function CalendlyBadge({
  url = 'https://calendly.com/choiceinsurancehub/30-minute-meeting',
  text = 'Schedule a Call',
  color = '#42615a', // brand-deep-forest-green
  textColor = '#dd8b66', // brand-warm-beige-coral
  branding = false, // Set to false to hide Calendly branding
}: CalendlyBadgeProps) {
  const [showFallback, setShowFallback] = useState(false);
  useEffect(() => {
    // Only load on client side
    if (typeof window === 'undefined') return;

    let script: HTMLScriptElement | null = null;
    let link: HTMLLinkElement | null = null;
    let customStyle: HTMLStyleElement | null = null;

    const loadCalendlyBadge = async () => {
      try {
        // Check if Calendly is already loaded
        if (window.Calendly?.initBadgeWidget) {
          initializeBadge();
          return;
        }

        // Load Calendly CSS first
        if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
          link = document.createElement('link');
          link.href = 'https://assets.calendly.com/assets/external/widget.css';
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        }

        // Load Calendly script
        if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
          script = document.createElement('script');
          script.src = 'https://assets.calendly.com/assets/external/widget.js';
          script.async = true;

          script.onload = () => {
            // Wait a bit for Calendly to fully initialize
            setTimeout(() => {
              initializeBadge();
            }, 200);
          };

          script.onerror = () => {
            console.error('Failed to load Calendly badge widget');
          };

          document.head.appendChild(script);
        } else {
          // Script already exists, just initialize
          setTimeout(() => {
            initializeBadge();
          }, 100);
        }

        // Add custom CSS to style the badge
        if (!document.querySelector('#calendly-badge-custom-styles')) {
          customStyle = document.createElement('style');
          customStyle.id = 'calendly-badge-custom-styles';
          customStyle.textContent = `
            /* Style the Calendly badge */
            .calendly-badge-widget {
              position: fixed !important;
              bottom: 20px !important;
              right: 20px !important;
              z-index: 10000 !important;
              border-radius: 50px !important;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
              transition: all 0.3s ease !important;
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
            }

            .calendly-badge-widget:hover {
              transform: translateY(-2px) !important;
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2) !important;
            }

            .calendly-badge-content {
              padding: 12px 20px !important;
              font-weight: 600 !important;
              font-size: 14px !important;
              border-radius: 50px !important;
              border: none !important;
              cursor: pointer !important;
              display: flex !important;
              align-items: center !important;
              gap: 8px !important;
              text-decoration: none !important;
            }

            /* Hide Calendly branding if disabled */
            ${
              !branding
                ? `
            .calendly-badge-widget [data-testid="branding"],
            .calendly-badge-widget .calendly-badge-content [class*="branding"],
            .calendly-badge-widget .calendly-badge-content [class*="powered-by"],
            .calendly-badge-widget .calendly-badge-content [href*="calendly.com"]:not([href*="choiceinsurancehub"]) {
              display: none !important;
              visibility: hidden !important;
            }
            `
                : ''
            }

            /* Mobile responsiveness */
            @media (max-width: 768px) {
              .calendly-badge-widget {
                bottom: 15px !important;
                right: 15px !important;
              }
              
              .calendly-badge-content {
                padding: 10px 16px !important;
                font-size: 13px !important;
              }
            }

            /* Add a subtle pulse animation */
            @keyframes calendly-pulse {
              0% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
              50% { box-shadow: 0 4px 12px rgba(66, 97, 90, 0.3); }
              100% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
            }

            .calendly-badge-widget {
              animation: calendly-pulse 3s ease-in-out infinite;
            }

            .calendly-badge-widget:hover {
              animation: none;
            }

            /* Ensure proper contrast and accessibility */
            .calendly-badge-content:focus {
              outline: 2px solid #dd8b66 !important;
              outline-offset: 2px !important;
            }
          `;
          document.head.appendChild(customStyle);
        }
      } catch (error) {
        console.error('Error loading Calendly badge widget:', error);
      }
    };

    const initializeBadge = () => {
      if (!window.Calendly?.initBadgeWidget) {
        console.error('Calendly badge widget not available');
        return;
      }

      try {
        // Remove any existing badge first
        const existingBadge = document.querySelector('.calendly-badge-widget');
        if (existingBadge) {
          existingBadge.remove();
        }

        // Initialize Calendly badge widget
        window.Calendly.initBadgeWidget({
          url,
          text,
          color,
          textColor,
          branding,
        });

        console.log('Calendly badge widget initialized successfully');

        // Add a visible indicator that the badge should be there
        setTimeout(() => {
          const badge = document.querySelector('.calendly-badge-widget');
          if (badge) {
            console.log('Calendly badge found in DOM:', badge);
          } else {
            console.warn('Calendly badge not found in DOM after initialization');
            // Show fallback button after 3 seconds if badge doesn't appear
            setTimeout(() => {
              const badge = document.querySelector('.calendly-badge-widget');
              if (!badge) {
                setShowFallback(true);
              }
            }, 2000);
          }
        }, 1000);
      } catch (error) {
        console.error('Error initializing Calendly badge widget:', error);
      }
    };

    void loadCalendlyBadge();

    // Cleanup function
    return () => {
      // Remove the badge widget if it exists
      const badgeWidget = document.querySelector('.calendly-badge-widget');
      if (badgeWidget) {
        badgeWidget.remove();
      }

      // Destroy Calendly badge if the method exists
      if (window.Calendly?.destroyBadgeWidget) {
        try {
          window.Calendly.destroyBadgeWidget();
        } catch (error) {
          // Silent fail for cleanup
          console.error('Error destroying Calendly badge:', error);
        }
      }
    };
  }, [url, text, color, textColor, branding]);

  // Render fallback button if Calendly badge fails to load
  if (showFallback) {
    return (
      <button
        onClick={() => window.open(url, '_blank')}
        className="fixed bottom-5 right-5 z-[10000] rounded-full px-5 py-3 text-sm font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          backgroundColor: color,
          color: textColor,
          animation: 'pulse 3s ease-in-out infinite',
        }}
      >
        {text}
      </button>
    );
  }

  // This component doesn't render anything visible - the badge is created by Calendly
  return null;
}

// Export a pre-configured version with your brand settings
export function ChoiceInsuranceBadge() {
  return (
    <CalendlyBadge
      url="https://calendly.com/choiceinsurancehub/30-minute-meeting"
      text="Schedule a Call"
      color="#42615a" // brand-deep-forest-green
      textColor="#dd8b66" // brand-warm-beige-coral
      branding={false}
    />
  );
}
