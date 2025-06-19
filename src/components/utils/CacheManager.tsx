'use client';

import { useEffect, useState } from 'react';

interface CacheManagerProps {
  checkInterval?: number; // in milliseconds
  showNotifications?: boolean;
}

export default function CacheManager({
  checkInterval = 30 * 60 * 1000, // 30 minutes
  showNotifications = false,
}: CacheManagerProps) {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    const checkForUpdates = async () => {
      try {
        const registration = await navigator.serviceWorker.ready;
        if (registration.waiting) {
          setUpdateAvailable(true);
          return;
        }

        // Check version from server
        const response = await fetch('/api/version', {
          cache: 'no-cache',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            Pragma: 'no-cache',
            Expires: '0',
          },
        });

        if (response.ok) {
          const { version } = await response.json();
          const currentVersion = localStorage.getItem('app-version');

          if (currentVersion && currentVersion !== version) {
            setUpdateAvailable(true);
            localStorage.setItem('app-version', version);
          } else if (!currentVersion) {
            localStorage.setItem('app-version', version);
          }
        }
      } catch (error) {
        console.log('Update check failed:', error);
      }
    };

    // Initial check
    checkForUpdates();

    // Set up periodic checks
    const intervalId = setInterval(checkForUpdates, checkInterval);

    // Listen for service worker updates
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [checkInterval]);

  const handleUpdate = async () => {
    if (!('serviceWorker' in navigator)) return;

    setIsUpdating(true);

    try {
      const registration = await navigator.serviceWorker.ready;

      if (registration.waiting) {
        // Tell the waiting service worker to skip waiting
        registration.waiting.postMessage({ command: 'skipWaiting' });
      } else {
        // Clear all caches manually
        await clearBrowserCache();
        window.location.reload();
      }
    } catch (error) {
      console.error('Update failed:', error);
      // Fallback: hard refresh
      window.location.reload();
    }

    setIsUpdating(false);
  };

  const clearBrowserCache = async () => {
    try {
      // Clear service worker caches
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        if (registration.active) {
          const messageChannel = new MessageChannel();

          return new Promise((resolve, reject) => {
            messageChannel.port1.onmessage = event => {
              if (event.data.success) {
                resolve(event.data);
              } else {
                reject(new Error(event.data.error));
              }
            };

            registration.active?.postMessage({ command: 'clearCache' }, [messageChannel.port2]);
          });
        }
      }

      // Clear browser storage
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
      }

      // Clear localStorage (except essential data)
      const essentialKeys = ['app-version', 'user-preferences'];
      const keysToRemove = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && !essentialKeys.includes(key)) {
          keysToRemove.push(key);
        }
      }

      keysToRemove.forEach(key => localStorage.removeItem(key));

      // Clear sessionStorage
      sessionStorage.clear();

      console.log('Browser cache cleared successfully');
    } catch (error) {
      console.error('Failed to clear cache:', error);
    }
  };

  // Auto-update without user interaction (optional)
  const handleSilentUpdate = async () => {
    await clearBrowserCache();
    window.location.reload();
  };

  if (!showNotifications && updateAvailable) {
    // Silent update after a short delay
    setTimeout(handleSilentUpdate, 2000);
    return null;
  }

  if (!updateAvailable) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-lg bg-brand-deep-forest-green p-4 text-white shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold">Update Available</h4>
          <p className="mt-1 text-sm text-white/90">
            A new version of the website is available. Update now for the latest features.
          </p>
        </div>
        <button
          onClick={() => setUpdateAvailable(false)}
          className="ml-2 text-white/70 hover:text-white"
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>

      <div className="mt-3 flex gap-2">
        <button
          onClick={handleUpdate}
          disabled={isUpdating}
          className="rounded bg-brand-warm-beige-coral px-3 py-1 text-sm font-medium text-brand-black hover:bg-brand-warm-beige-coral/80 disabled:opacity-50"
        >
          {isUpdating ? 'Updating...' : 'Update Now'}
        </button>
        <button
          onClick={() => setUpdateAvailable(false)}
          className="rounded border border-white/30 px-3 py-1 text-sm text-white/90 hover:bg-white/10"
        >
          Later
        </button>
      </div>
    </div>
  );
}

// Hook for manual cache clearing
export function useCacheManager() {
  const clearCache = async () => {
    try {
      // Clear service worker caches
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        if (registration.active) {
          const messageChannel = new MessageChannel();

          await new Promise((resolve, reject) => {
            messageChannel.port1.onmessage = event => {
              if (event.data.success) {
                resolve(event.data);
              } else {
                reject(new Error(event.data.error));
              }
            };

            registration.active?.postMessage({ command: 'clearCache' }, [messageChannel.port2]);
          });
        }
      }

      // Clear browser caches
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
      }

      // Force reload
      window.location.reload();
    } catch (error) {
      console.error('Failed to clear cache:', error);
      // Fallback: hard refresh
      window.location.href = window.location.href;
    }
  };

  const checkForUpdates = async () => {
    try {
      const response = await fetch('/api/version', { cache: 'no-cache' });
      if (response.ok) {
        const { version } = await response.json();
        const currentVersion = localStorage.getItem('app-version');
        return currentVersion !== version;
      }
    } catch (error) {
      console.error('Update check failed:', error);
    }
    return false;
  };

  return { clearCache, checkForUpdates };
}
