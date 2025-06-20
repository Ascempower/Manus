/**
 * Cookie Utilities with Security Best Practices
 * Handles cookie operations with proper security attributes
 */

export interface CookieOptions {
  path?: string;
  maxAge?: number;
  expires?: Date;
  domain?: string;
  sameSite?: 'Strict' | 'Lax' | 'None';
  secure?: boolean;
  httpOnly?: boolean;
}

/**
 * Set a cookie with proper security attributes
 */
export function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  if (typeof document === 'undefined') {
    return; // Server-side rendering
  }

  const {
    path = '/',
    maxAge,
    expires,
    domain,
    sameSite = 'Strict',
    secure = window.location.protocol === 'https:',
    httpOnly = false
  } = options;

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (path) {
    cookieString += `; path=${path}`;
  }

  if (maxAge !== undefined) {
    cookieString += `; max-age=${maxAge}`;
  }

  if (expires) {
    cookieString += `; expires=${expires.toUTCString()}`;
  }

  if (domain) {
    cookieString += `; domain=${domain}`;
  }

  cookieString += `; SameSite=${sameSite}`;

  if (secure) {
    cookieString += '; Secure';
  }

  if (httpOnly) {
    cookieString += '; HttpOnly';
  }

  document.cookie = cookieString;
}

/**
 * Get a cookie value by name
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') {
    return null; // Server-side rendering
  }

  const nameEQ = encodeURIComponent(name) + '=';
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }

  return null;
}

/**
 * Delete a cookie by name
 */
export function deleteCookie(name: string, options: Pick<CookieOptions, 'path' | 'domain'> = {}): void {
  setCookie(name, '', {
    ...options,
    maxAge: -1,
    expires: new Date(0)
  });
}

/**
 * Check if cookies are enabled
 */
export function areCookiesEnabled(): boolean {
  if (typeof document === 'undefined') {
    return false; // Server-side rendering
  }

  try {
    const testCookie = '__cookie_test__';
    setCookie(testCookie, 'test', { maxAge: 1 });
    const enabled = getCookie(testCookie) === 'test';
    deleteCookie(testCookie);
    return enabled;
  } catch {
    return false;
  }
}/**
 * Cookie Utilities with Security Best Practices
 * Handles cookie operations with proper security attributes
 */

export interface CookieOptions {
  path?: string;
  maxAge?: number;
  expires?: Date;
  domain?: string;
  sameSite?: 'Strict' | 'Lax' | 'None';
  secure?: boolean;
  httpOnly?: boolean;
}

/**
 * Set a cookie with proper security attributes
 */
export function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  if (typeof document === 'undefined') {
    return; // Server-side rendering
  }

  const {
    path = '/',
    maxAge,
    expires,
    domain,
    sameSite = 'Strict',
    secure = window.location.protocol === 'https:',
    httpOnly = false
  } = options;

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (path) {
    cookieString += `; path=${path}`;
  }

  if (maxAge !== undefined) {
    cookieString += `; max-age=${maxAge}`;
  }

  if (expires) {
    cookieString += `; expires=${expires.toUTCString()}`;
  }

  if (domain) {
    cookieString += `; domain=${domain}`;
  }

  cookieString += `; SameSite=${sameSite}`;

  if (secure) {
    cookieString += '; Secure';
  }

  if (httpOnly) {
    cookieString += '; HttpOnly';
  }

  document.cookie = cookieString;
}

/**
 * Get a cookie value by name
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') {
    return null; // Server-side rendering
  }

  const nameEQ = encodeURIComponent(name) + '=';
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }

  return null;
}

/**
 * Delete a cookie by name
 */
export function deleteCookie(name: string, options: Pick<CookieOptions, 'path' | 'domain'> = {}): void {
  setCookie(name, '', {
    ...options,
    maxAge: -1,
    expires: new Date(0)
  });
}

/**
 * Check if cookies are enabled
 */
export function areCookiesEnabled(): boolean {
  if (typeof document === 'undefined') {
    return false; // Server-side rendering
  }

  try {
    const testCookie = '__cookie_test__';
    setCookie(testCookie, 'test', { maxAge: 1 });
    const enabled = getCookie(testCookie) === 'test';
    deleteCookie(testCookie);
    return enabled;
  } catch {
    return false;
  }
}