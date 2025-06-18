/**
 * Safe browser API utilities
 *
 * This file provides safe wrappers around browser APIs that might cause runtime errors
 * if accessed incorrectly or in environments where they're not available.
 */

/**
 * Safe localStorage access utilities
 */
export const safeLocalStorage = {
  /**
   * Safely get an item from localStorage
   * @param key The key to retrieve
   * @returns The value or null if not found or if localStorage is not available
   */
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem(key);
      }
    } catch (e) {
      console.error('LocalStorage access error:', e);
    }
    return null;
  },

  /**
   * Safely set an item in localStorage
   * @param key The key to set
   * @param value The value to store
   * @returns true if successful, false otherwise
   */
  setItem: (key: string, value: string): boolean => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(key, value);
        return true;
      }
    } catch (e) {
      console.error('LocalStorage write error:', e);
    }
    return false;
  },

  /**
   * Safely remove an item from localStorage
   * @param key The key to remove
   * @returns true if successful, false otherwise
   */
  removeItem: (key: string): boolean => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem(key);
        return true;
      }
    } catch (e) {
      console.error('LocalStorage remove error:', e);
    }
    return false;
  },
};

/**
 * Safe sessionStorage access utilities
 */
export const safeSessionStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        return sessionStorage.getItem(key);
      }
    } catch (e) {
      console.error('SessionStorage access error:', e);
    }
    return null;
  },

  setItem: (key: string, value: string): boolean => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        sessionStorage.setItem(key, value);
        return true;
      }
    } catch (e) {
      console.error('SessionStorage write error:', e);
    }
    return false;
  },

  removeItem: (key: string): boolean => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        sessionStorage.removeItem(key);
        return true;
      }
    } catch (e) {
      console.error('SessionStorage remove error:', e);
    }
    return false;
  },
};

/**
 * Safe window access utilities
 */
export const safeWindowAccess = {
  /**
   * Safely call window.gtag
   * @param command The gtag command (e.g., 'event', 'config')
   * @param action The action to perform
   * @param params Optional parameters
   */
  gtag: (command: string, action: string, params?: Record<string, unknown>): void => {
    try {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag(command, action, params);
      }
    } catch (e) {
      console.error('GTM access error:', e);
    }
  },

  /**
   * Safely add an event listener
   * @param element The element to add the listener to
   * @param event The event name
   * @param handler The event handler
   * @param options Event listener options
   */
  addEventListener: (
    element: EventTarget | null,
    event: string,
    handler: EventListener,
    options?: boolean | AddEventListenerOptions
  ): void => {
    try {
      if (element) {
        element.addEventListener(event, handler, options);
      }
    } catch (e) {
      console.error('Event listener error:', e);
    }
  },

  /**
   * Safely remove an event listener
   * @param element The element to remove the listener from
   * @param event The event name
   * @param handler The event handler
   * @param options Event listener options
   */
  removeEventListener: (
    element: EventTarget | null,
    event: string,
    handler: EventListener,
    options?: boolean | EventListenerOptions
  ): void => {
    try {
      if (element) {
        element.removeEventListener(event, handler, options);
      }
    } catch (e) {
      console.error('Event listener removal error:', e);
    }
  },

  /**
   * Safely access window.location
   * @returns An object with safe location properties or null values
   */
  getLocation: () => {
    try {
      if (typeof window !== 'undefined' && window.location) {
        return {
          href: window.location.href,
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
          host: window.location.host,
        };
      }
    } catch (e) {
      console.error('Location access error:', e);
    }
    return {
      href: '',
      pathname: '',
      search: '',
      hash: '',
      host: '',
    };
  },
};

/**
 * Safe document access utilities
 */
export const safeDocumentAccess = {
  /**
   * Safely get an element by ID
   * @param id The element ID
   * @returns The element or null if not found or if document is not available
   */
  getElementById: (id: string): HTMLElement | null => {
    try {
      if (typeof document !== 'undefined') {
        return document.getElementById(id);
      }
    } catch (e) {
      console.error('Document access error:', e);
    }
    return null;
  },

  /**
   * Safely query selector
   * @param selector The CSS selector
   * @returns The element or null if not found or if document is not available
   */
  querySelector: (selector: string): Element | null => {
    try {
      if (typeof document !== 'undefined') {
        return document.querySelector(selector);
      }
    } catch (e) {
      console.error('Document query error:', e);
    }
    return null;
  },

  /**
   * Safely query selector all
   * @param selector The CSS selector
   * @returns Array of elements or empty array if not found or if document is not available
   */
  querySelectorAll: (selector: string): Element[] => {
    try {
      if (typeof document !== 'undefined') {
        return Array.from(document.querySelectorAll(selector));
      }
    } catch (e) {
      console.error('Document query all error:', e);
    }
    return [];
  },

  /**
   * Safely create an element
   * @param tagName The tag name
   * @returns The created element or null if document is not available
   */
  createElement: <K extends keyof HTMLElementTagNameMap>(
    tagName: K
  ): HTMLElementTagNameMap[K] | null => {
    try {
      if (typeof document !== 'undefined') {
        return document.createElement(tagName);
      }
    } catch (e) {
      console.error('Element creation error:', e);
    }
    return null;
  },
};

/**
 * Safe navigator access utilities
 */
export const safeNavigatorAccess = {
  /**
   * Safely check if online
   * @returns true if online, false if offline or if navigator is not available
   */
  isOnline: (): boolean => {
    try {
      if (typeof navigator !== 'undefined') {
        return navigator.onLine;
      }
    } catch (e) {
      console.error('Navigator access error:', e);
    }
    return true; // Assume online by default
  },

  /**
   * Safely get user agent
   * @returns User agent string or empty string if navigator is not available
   */
  getUserAgent: (): string => {
    try {
      if (typeof navigator !== 'undefined') {
        return navigator.userAgent;
      }
    } catch (e) {
      console.error('User agent access error:', e);
    }
    return '';
  },

  /**
   * Safely check if cookies are enabled
   * @returns true if cookies are enabled, false if disabled or if navigator is not available
   */
  cookiesEnabled: (): boolean => {
    try {
      if (typeof navigator !== 'undefined') {
        return navigator.cookieEnabled;
      }
    } catch (e) {
      console.error('Cookie check error:', e);
    }
    return false;
  },
};

// Create a named object for the default export
const browserUtils = {
  safeLocalStorage,
  safeSessionStorage,
  safeWindowAccess,
  safeDocumentAccess,
  safeNavigatorAccess,
};

export default browserUtils;
