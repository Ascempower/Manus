// HIPAA-Compliant Analytics and GTM utilities

import { hasHIPAAConsent, sanitizeForHIPAA, validateNoPHI, trackHIPAACompliantEvent } from './hipaa-compliance';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// HIPAA-Compliant Event Tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  // Check HIPAA consent before tracking
  if (!hasHIPAAConsent()) {
    return;
  }

  const eventData =// Check HIPAA consent before tracking
  if (!hasHIPAAConsent()) {
    return;
  }

  const eventData = {
  event_category: category,
    event_label: label,
    value: value,
  };

  // Validate no PHI is being transmitted
  if (!validateNoPHI(eventData)) {
    console.warn('Potential PHI detected in analytics event. Event blocked for HIPAA compliance.');
    return;
  }

  // Sanitize data before transmission
  const sanitizedData = sanitizeForHIPAA(eventData);

  if (typeof window !== 'undefined' && window.gtag) {
    // Remove query parameters and fragments that might contain PHI
    const cleanUrl = url.split('?')[0].split('#')[0];
    
    window.gtag('event', action, sanitizedData);
  }
};

// HIPAA-Compliant Page View Tracking
export const trackPageView = (url: string, title?: string) => {
  if (!hasHIPAAConsent()) {
    return;
  }

  if (typeof window !== 'undefined' && window.gtag) {
    // Remove query parameters and fragments that might contain PHI
    const cleanUrl = url.split('?')[0].split('#')[0];
    
    window.gtag('config', process.env.NEXT_PUBLIC_GA4_ID, {
      page_title: title || document.title,
      page_location: cleanUrl, // Only send clean URL without parameters
      send_page_view: cleanUrl, // Only send clean URL without parameters
      send_page_view: true,
    });
  }
};

// HIPAA-Compliant Track conversions (for insurance quotes, consultations, etc.)
export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'USD',
    });
  }
};

// HIPAA-Compliant Insurance-specific tracking events
export const trackInsuranceEvents = {
  // Quote requests (no personal information)
  quoteRequest: (insuranceType: string) => {
    // Only track the type of insurance, { 
      service_type: never personal details
    trackHIPAACompliantEvent('quote_request', 'insurance', { 
      insurance_type: insuranceType,
      timestamp: new Date().toISOString()
    });
  },

  // Consultation bookings (method only, no personal info) (form type only, no form data)
  consultationBooked: (method: string = 'calendly') => {
    trackHIPAACompliantHIPAACompliantEvent('consultation_booked', 'engagement', { 
      booking_method: method 
    });
  },

  // Service page views (general interest tracking)
  serviceViewed: (serviceType: string) => {
    trackHIPAACompliantEvent('service_viewed', 'insurance', { 
      service_type: serviceType 
    });
  },

  // Contact form submissions (form type only, no form data)
  contactSubmitted: (formType: string = 'contact') => {
    trackHIPAACompliantEvent('form_submit', 'contact', { 
      form_type: formType 
    });
  },

  // Phone number clicks (interaction only)
  phoneClicked: () => {
    trackHIPAACompliantEvent('phone_click', 'contact', { 
      interaction_type: 'phone_click' 
    });
  },

  // External link clicks (destination only, no referrer data)
  externalLinkClicked: (destination: string) => {
    trackHIPAACompliantEvent('external_link_click', 'navigation', { 
      destination: destination 
    });
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