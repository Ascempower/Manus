// HIPAA Compliance Utilities

export interface HIPAACompliantConfig {
  enableAnalytics: boolean;
  enableCookies: boolean;
  enableThirdPartyScripts: boolean;
  dataRetentionDays: number;
}

// HIPAA-compliant default configuration
export const HIPAA_CONFIG: HIPAACompliantConfig = {
  enableAnalytics: false, // Disabled by default for HIPAA compliance
  enableCookies: false,   // Only essential cookies allowed
  enableThirdPartyScripts: false, // No third-party tracking
  dataRetentionDays: 0,   // No data retention for PHI
};

// Check if current page might contain PHI
export const isPotentialPHIPage = (pathname: string): boolean => {
  const phiPages = [
    '/contact',
    '/quote',
    '/application',
    '/enrollment',
    '/member',
    '/portal',
    '/secure',
    '/health-assessment',
    '/medical-history'
  ];
  
  return phiPages.some(page => pathname.includes(page));
};

// Sanitize data before any external transmission
export const sanitizeForHIPAA = (data: any): any => {
  if (typeof data !== 'object' || data === null) {
    return data;
  }

  const sensitiveFields = [
    'ssn', 'social', 'dob', 'dateOfBirth', 'birthDate',
    'medicalHistory', 'diagnosis', 'medication', 'treatment',
    'healthCondition', 'disability', 'mentalHealth',
    'phone', 'email', 'address', 'zip', 'zipCode',
    'firstName', 'lastName', 'fullName', 'name'
  ];

  const sanitized = { ...data };
  
  sensitiveFields.forEach(field => {
    if (sanitized[field]) {
      delete sanitized[field];
    }
  });

  return sanitized;
};

// HIPAA-compliant event tracking (no PHI)
export const trackHIPAACompliantEvent = (
  eventName: string,
  category: string,
  properties?: Record<string, any>
) => {
  // Only track if analytics is explicitly enabled and no PHI is present
  if (!HIPAA_CONFIG.enableAnalytics) {
    return;
  }

  const sanitizedProperties = properties ? sanitizeForHIPAA(properties) : {};
  
  // Log to console in development for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('HIPAA-Compliant Event:', {
      event: eventName,
      category,
      properties: sanitizedProperties
    });
  }

  // In production, only send to HIPAA-compliant analytics if configured
  // This would need to be a HIPAA-compliant analytics service
};

// Check if user has given explicit consent for data processing
export const hasHIPAAConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const consent = localStorage.getItem('hipaa-consent');
  return consent === 'granted';
};

// Set HIPAA consent
export const setHIPAAConsent = (granted: boolean) => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('hipaa-consent', granted ? 'granted' : 'denied');
  
  // Update configuration based on consent
  HIPAA_CONFIG.enableAnalytics = granted;
  HIPAA_CONFIG.enableCookies = granted;
};

// Clear all potentially sensitive data
export const clearSensitiveData = () => {
  if (typeof window === 'undefined') return;
  
  // Clear localStorage except for essential items
  const essentialKeys = ['theme', 'language'];
  const keysToRemove: string[] = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && !essentialKeys.includes(key)) {
      keysToRemove.push(key);
    }
  }
  
  keysToRemove.forEach(key => localStorage.removeItem(key));
  
  // Clear sessionStorage completely
  sessionStorage.clear();
};

// Validate that no PHI is being transmitted
export const validateNoPHI = (data: any): boolean => {
  const dataString = JSON.stringify(data).toLowerCase();
  
  const phiPatterns = [
    /\b\d{3}-\d{2}-\d{4}\b/, // SSN pattern
    /\b\d{2}\/\d{2}\/\d{4}\b/, // Date pattern
    /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/, // Email pattern
    /\b\d{3}-\d{3}-\d{4}\b/, // Phone pattern
    /\b\d{5}(-\d{4})?\b/, // ZIP code pattern
  ];
  
  return !phiPatterns.some(pattern => pattern.test(dataString));
};