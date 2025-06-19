// Service Worker for Choice Insurance Hub
const CACHE_NAME = 'choice-insurance-cache-v2';
const STATIC_CACHE = 'choice-insurance-static-v2';
const DYNAMIC_CACHE = 'choice-insurance-dynamic-v2';

// Handle messages from the main thread
self.addEventListener('message', event => {
  if (event.data && event.data.command === 'skipWaiting') {
    self.skipWaiting();
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
  // Add critical CSS and JS files
  '/_next/static/css/',
  '/_next/static/chunks/',
];

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
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker activated');
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
