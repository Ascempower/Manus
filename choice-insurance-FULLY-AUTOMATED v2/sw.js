// Enhanced Service Worker with Multiple Update Detection Methods
// Combines HTTP Headers, Service Worker updates, and versioned assets

const CACHE_NAME = 'choice-insurance-v' + Date.now(); // Dynamic versioning
const UPDATE_CHECK_INTERVAL = 30000; // Check for updates every 30 seconds

// Files to always fetch fresh (critical for updates)
const CRITICAL_FILES = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', event => {
  console.log('Service Worker: Installing new version...');
  self.skipWaiting(); // Immediately activate new service worker
});

self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Notify all clients that a new version is available
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'NEW_VERSION_AVAILABLE',
            message: 'A new version is available!'
          });
        });
      });
    })
  );
  clients.claim(); // Take control of all pages immediately
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // For critical files, always fetch from network with cache-busting
  if (CRITICAL_FILES.some(file => url.pathname === file)) {
    event.respondWith(
      fetch(event.request.url + '?v=' + Date.now(), {
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      })
      .then(response => {
        // Cache the fresh response
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(event.request);
      })
    );
  } else {
    // For other files, use network-first with ETag/Last-Modified checking
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // Check if content has changed using HTTP headers
          if (cachedResponse) {
            const cachedETag = cachedResponse.headers.get('etag');
            const networkETag = networkResponse.headers.get('etag');
            const cachedLastModified = cachedResponse.headers.get('last-modified');
            const networkLastModified = networkResponse.headers.get('last-modified');
            
            // If ETags or Last-Modified differ, content has changed
            if ((cachedETag && networkETag && cachedETag !== networkETag) ||
                (cachedLastModified && networkLastModified && cachedLastModified !== networkLastModified)) {
              console.log('Service Worker: Content changed for', event.request.url);
            }
          }
          
          // Cache the new response
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          
          return networkResponse;
        });
        
        // Return cached response immediately, update in background
        return cachedResponse || fetchPromise;
      })
    );
  }
});

// Periodic update checking
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data && event.data.type === 'CHECK_FOR_UPDATES') {
    checkForUpdates();
  }
});

// Function to actively check for updates
function checkForUpdates() {
  fetch('/sw.js?v=' + Date.now(), { cache: 'no-cache' })
    .then(response => response.text())
    .then(newSWContent => {
      // If service worker content changed, trigger update
      self.registration.update();
    })
    .catch(error => {
      console.log('Service Worker: Update check failed', error);
    });
}

// Set up periodic update checking
setInterval(() => {
  checkForUpdates();
}, UPDATE_CHECK_INTERVAL);

