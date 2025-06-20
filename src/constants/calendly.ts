/**
 * Calendly Configuration Constants
 * Centralized configuration for all Calendly integrations
 * This ensures consistent behavior across deployments
 */

export const CALENDLY_CONFIG = {
  // Primary Calendly URL
  url: 'https://calendly.com/choiceinsurancehub/30-minute-meeting',
  
  // Brand colors (matching our theme)
  branding: {
    primary_color: '42615a', // Deep Forest Green
    text_color: 'dd8b66',    // Warm Beige Coral
    background_color: '42615a', // Deep Forest Green
  },
  
  // Widget settings
  settings: {
    hide_gdpr_banner: 1,
    hide_event_type_details: 0,
    hide_landing_page_details: 0,
    embed_domain: 'choiceinsurancehub.com',
    embed_type: 'Inline',
  },
  
  // UTM tracking parameters
  utm: {
    utmCampaign: 'Website Contact Form',
    utmSource: 'choiceinsurancehub.com',
    utmMedium: 'website',
  },
  
  // Fallback options when widget fails
  fallback: {
    phone: '(877) 414-2319',
    email: 'info@choiceinsurancehub.com',
    directUrl: 'https://calendly.com/choiceinsurancehub/30-minute-meeting',
  },
  
  // Widget dimensions for different contexts
  dimensions: {
    default: { height: 700, width: '100%' },
    inline: { height: 600, width: '100%' },
    popup: { height: 700, width: 800 },
  },
} as const;

/**
 * Generate the complete Calendly URL with branding and settings
 */
export function getCalendlyUrl(additionalParams?: Record<string, string | number>): string {
  const { url, branding, settings } = CALENDLY_CONFIG;
  
  const params = new URLSearchParams();
  
  // Add branding parameters
  Object.entries(branding).forEach(([key, value]) => {
    params.set(key, value);
  });
  
  // Add settings
  Object.entries(settings).forEach(([key, value]) => {
    params.set(key, value.toString());
  });
  
  // Add any additional parameters
  if (additionalParams) {
    Object.entries(additionalParams).forEach(([key, value]) => {
      params.set(key, value.toString());
    });
  }
  
  return `${url}?${params.toString()}`;
}

/**
 * CSS styles to hide Calendly branding and ensure consistent appearance
 */
export const CALENDLY_CUSTOM_STYLES = `
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
  .calendly-inline-widget [data-testid*="powered"],
  .calendly-inline-widget [href*="calendly.com"]:not([href*="choiceinsurancehub"]),
  .calendly-inline-widget a[target="_blank"]:not([href*="choiceinsurancehub"]) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    overflow: hidden !important;
    pointer-events: none !important;
  }

  /* Style the main widget container */
  .calendly-widget-container {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
  }

  /* Style the iframe container */
  .calendly-inline-widget iframe {
    border-radius: 0 !important;
    border: none !important;
    background-color: #ffffff !important;
    width: 100% !important;
    height: 100% !important;
  }

  /* Ensure proper styling within iframe */
  .calendly-inline-widget {
    background-color: #ffffff !important;
    border-radius: 0 !important;
    min-height: 600px;
  }

  /* Loading state styling */
  .calendly-loading {
    background: linear-gradient(135deg, #42615a 0%, #5a7c73 100%);
    color: #dd8b66;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 600px;
    border-radius: 8px;
  }

  /* Error state styling */
  .calendly-error {
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    color: #dc2626;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .calendly-widget-container {
      border-radius: 4px;
      margin: 0 -1rem;
    }
    
    .calendly-inline-widget {
      min-height: 500px;
    }
  }
`;

/**
 * Widget initialization options
 */
export const CALENDLY_INIT_OPTIONS = {
  // Retry configuration
  maxRetries: 3,
  retryDelay: 1000, // 1 second
  
  // Timeout configuration
  loadTimeout: 10000, // 10 seconds
  
  // Script URLs
  scriptUrl: 'https://assets.calendly.com/assets/external/widget.js',
  cssUrl: 'https://assets.calendly.com/assets/external/widget.css',
  
  // Widget container class
  containerClass: 'calendly-widget-container',
  
  // Loading states
  loadingClass: 'calendly-loading',
  errorClass: 'calendly-error',
} as const;