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
  enableCookies: false, // Only essential cookies allowed
  enableThirdPartyScripts: false, // No third-party tracking
  dataRetentionDays: 0, // No data retention for PHI
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
    '/medical-history',
  ];

  return phiPages.some(page => pathname.includes(page));
};

// Sanitize data before any external transmission
export const sanitizeForHIPAA = (data: unknown): unknown => {
  if (data === null || data === undefined) {
    return data;
  }

  if (typeof data !== 'object') {
    return data;
  }

  // Handle arrays
  if (Array.isArray(data)) {
    return data.map(item => sanitizeForHIPAA(item));
  }

  const sensitiveFields = [
    'ssn',
    'social',
    'dob',
    'dateOfBirth',
    'birthDate',
    'medicalHistory',
    'diagnosis',
    'medication',
    'treatment',
    'healthCondition',
    'disability',
    'mentalHealth',
    'phone',
    'email',
    'address',
    'zip',
    'zipCode',
    'firstName',
    'lastName',
    'fullName',
    'name',
  ];

  const sanitized = { ...data } as Record<string, unknown>;

  // Check each field for sensitive data
  Object.keys(sanitized).forEach(key => {
    const lowerKey = key.toLowerCase();

    // Remove sensitive fields
    if (sensitiveFields.some(field => lowerKey.includes(field))) {
      delete sanitized[key];
      return;
    }

    // Recursively sanitize nested objects
    if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeForHIPAA(sanitized[key]);
    }
  });

  return sanitized;
};

// HIPAA-compliant event tracking (no PHI)
export const trackHIPAACompliantEvent = (
  __eventName: string,
  __category: string,
  __properties?: Record<string, unknown>
) => {
  // Only track if analytics is explicitly enabled and no PHI is present
  if (!HIPAA_CONFIG.enableAnalytics) {
    return;
  }

  // Development debugging - HIPAA-Compliant Event logging removed for production
  // Properties would be sanitized here: sanitizeForHIPAA(__properties)

  // In production, only send to HIPAA-compliant analytics if configured
  // This would need to be a HIPAA-compliant analytics service
};

// Check if user has given explicit consent for data processing
export const hasHIPAAConsent = (): boolean => {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return false;
  }

  try {
    const consent = localStorage.getItem('hipaa-consent');
    return consent === 'granted';
  } catch (e) {
    // In case of localStorage access errors (e.g., in private browsing)
    console.error('LocalStorage access error:', e);
    return false;
  }
};

// Set HIPAA consent
export const setHIPAAConsent = (granted: boolean) => {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }

  try {
    localStorage.setItem('hipaa-consent', granted ? 'granted' : 'denied');

    // Update configuration based on consent
    HIPAA_CONFIG.enableAnalytics = granted;
    HIPAA_CONFIG.enableCookies = granted;
  } catch (e) {
    // Handle localStorage errors
    console.error('Could not save HIPAA consent preferences:', e);
  }
};

// Clear all potentially sensitive data
export const clearSensitiveData = () => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    // Clear localStorage except for essential items
    const essentialKeys = ['theme', 'language'];
    const keysToRemove: string[] = [];

    // Collect all keys first to avoid issues with changing localStorage during iteration
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && !essentialKeys.includes(key)) {
        keysToRemove.push(key);
      }
    }

    // Remove keys after collecting them all
    keysToRemove.forEach(key => {
      try {
        localStorage.removeItem(key);
      } catch (e) {
        console.error(`Failed to remove localStorage key: ${key}`, e);
      }
    });

    // Clear sessionStorage completely
    sessionStorage.clear();
  } catch (e) {
    console.error('Error clearing sensitive data:', e);
  }
};

// Validate that no PHI is being transmitted
export const validateNoPHI = (data: unknown): boolean => {
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
