// Service Worker for Choice Insurance Hub
// Update this version number to force cache clearing
const CACHE_VERSION = 'v2025.6.20.2004';
const CACHE_NAME = `choice-insurance-cache-${CACHE_VERSION}`;
const STATIC_CACHE = `choice-insurance-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `choice-insurance-dynamic-${CACHE_VERSION}`;

// Cache expiration times (in milliseconds)
const CACHE_EXPIRATION = {
  STATIC: 24 * 60 * 60 * 1000, // 24 hours
  DYNAMIC: 60 * 60 * 1000, // 1 hour
  API: 5 * 60 * 1000, // 5 minutes
};

// Handle messages from the main thread
self.addEventListener('message', event => {
  if (event.data && event.data.command === 'skipWaiting') {
    self.skipWaiting();
  }

  // Handle cache clearing commands
  if (event.data && event.data.command === 'clearCache') {
    clearAllCaches()
      .then(() => {
        event.ports[0].postMessage({ success: true });
      })
      .catch(err => {
        event.ports[0].postMessage({ success: false, error: err.message });
      });
  }
});

const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/blog',
  '/faq',
  '/testimonials',
  '/favicon.ico',
  '/icon.svg',
  '/apple-touch-icon.png',
  '/assets/logos/main-logo-orange.png',
  '/manifest.json',
  // Note: CSS and JS files will be cached dynamically as they're requested
];

// Utility functions for cache management
async function clearAllCaches() {
  const cacheNames = await caches.keys();
  const deletePromises = cacheNames.map(cacheName => caches.delete(cacheName));
  await Promise.all(deletePromises);
  console.log('All caches cleared');
}

async function clearExpiredCache() {
  const cache = await caches.open(DYNAMIC_CACHE);
  const requests = await cache.keys();
  const now = Date.now();

  for (const request of requests) {
    const response = await cache.match(request);
    if (response) {
      const cachedTime = response.headers.get('sw-cached-time');
      if (cachedTime) {
        const age = now - parseInt(cachedTime);
        const maxAge = request.url.includes('/api/')
          ? CACHE_EXPIRATION.API
          : CACHE_EXPIRATION.DYNAMIC;

        if (age > maxAge) {
          await cache.delete(request);
          console.log('Expired cache entry removed:', request.url);
        }
      }
    }
  }
}

// Check for updates and clear cache if needed
async function checkForUpdates() {
  try {
    const response = await fetch('/api/version', { cache: 'no-cache' });
    if (response.ok) {
      const { version } = await response.json();
      if (version !== CACHE_VERSION) {
        console.log('New version detected, clearing cache');
        await clearAllCaches();
        return true;
      }
    }
  } catch (error) {
    console.log('Version check failed:', error);
  }
  return false;
}

// Install event - cache assets
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('Opened cache');
      // Cache core files, ignore failures for optional resources
      return Promise.allSettled(
        urlsToCache.map(url => {
          return cache.add(url).catch(err => {
            console.warn(`Failed to cache ${url}:`, err);
            return null;
          });
        })
      );
    })
  );
  // Activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  const cacheWhitelist = [STATIC_CACHE, DYNAMIC_CACHE];

  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Clear expired cache entries
      clearExpiredCache(),
      // Check for updates
      checkForUpdates(),
    ]).then(() => {
      console.log('Service Worker activated and caches cleaned');
      // Ensure service worker takes control of all clients immediately
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests and browser extensions
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request because it's a one-time use stream
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response because it's a one-time use stream
            const responseToCache = response.clone();

            caches
              .open(DYNAMIC_CACHE)
              .then(cache => {
                // Don't cache API calls or external resources
                if (
                  event.request.url.includes('/api/') ||
                  !event.request.url.includes(self.location.origin) ||
                  event.request.url.includes('chrome-extension') ||
                  event.request.url.includes('moz-extension')
                ) {
                  return;
                }
                cache.put(event.request, responseToCache);
              })
              .catch(err => {
                console.error('Cache put error:', err);
              });

            return response;
          })
          .catch(() => {
            // If network fails and it's a document request, return offline page
            if (event.request.headers.get('accept')?.includes('text/html')) {
              return caches.match('/').catch(() => {
                // If homepage isn't cached, return a simple offline message
                return new Response('You are offline. Please check your connection.', {
                  headers: { 'Content-Type': 'text/html' },
                });
              });
            }
            // For non-HTML requests, return a generic error response
            return new Response('Network error occurred', {
              status: 503,
              statusText: 'Service Unavailable',
            });
          });
      })
      .catch(error => {
        console.error('Service worker fetch handler error:', error);
        return new Response('Service worker error occurred', {
          status: 500,
          statusText: 'Internal Service Worker Error',
        });
      })
  );
});

// Handle push notifications (if implemented in the future)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/images/favicon.png',
      badge: '/images/favicon.png',
      data: {
        url: data.url,
      },
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.notification.data && event.notification.data.url) {
    event.waitUntil(clients.openWindow(event.notification.data.url));
  }
});
