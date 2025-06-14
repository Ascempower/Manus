// Google Analytics and GTM utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics 4 Event Tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA4_ID, {
      page_title: title || document.title,
      page_location: url,
    });
  }
};

// Track conversions (for insurance quotes, consultations, etc.)
export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'USD',
    });
  }
};

// Insurance-specific tracking events
export const trackInsuranceEvents = {
  // Quote requests
  quoteRequest: (insuranceType: string) => {
    trackEvent('quote_request', 'insurance', insuranceType);
  },

  // Consultation bookings
  consultationBooked: (method: string = 'calendly') => {
    trackEvent('consultation_booked', 'engagement', method);
  },

  // Service page views
  serviceViewed: (serviceType: string) => {
    trackEvent('service_viewed', 'insurance', serviceType);
  },

  // Contact form submissions
  contactSubmitted: (formType: string = 'contact') => {
    trackEvent('form_submit', 'contact', formType);
  },

  // Phone number clicks
  phoneClicked: () => {
    trackEvent('phone_click', 'contact', 'header_phone');
  },

  // External link clicks (like PlanEnroll)
  externalLinkClicked: (destination: string) => {
    trackEvent('external_link_click', 'navigation', destination);
  },
};

// GTM Data Layer push
export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

// Enhanced ecommerce tracking for insurance products
export const trackInsuranceProduct = (
  action: 'view' | 'add_to_cart' | 'purchase',
  productData: {
    item_id: string;
    item_name: string;
    item_category: string;
    price?: number;
    quantity?: number;
  }
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      currency: 'USD',
      value: productData.price || 0,
      items: [productData],
    });
  }
};