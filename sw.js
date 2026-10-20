/* Service Worker for Prep App */
const CACHE_NAME = 'prep-cache-v1';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './source.js',
  './manifest.json',
  './icon.svg'
];

const MAX_CACHE_ENTRIES = 40;

// Helper to cap cache size
async function trimCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxItems) {
    await cache.delete(keys[0]);
    await trimCache(cacheName, maxItems);
  }
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key.startsWith('prep-cache-')) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Cache-first strategy for precached local assets with ignoreSearch for syncToken queries
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch background refresh if on same origin
        if (url.origin === location.origin) {
          fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
                trimCache(CACHE_NAME, MAX_CACHE_ENTRIES);
              });
            }
          }).catch(() => {});
        }
        return cachedResponse;
      }

      // Fallback to network
      return fetch(event.request).then((networkResponse) => {
        // Cache same-origin responses
        if (networkResponse && networkResponse.status === 200 && url.origin === location.origin) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, resClone);
            trimCache(CACHE_NAME, MAX_CACHE_ENTRIES);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback to cached index.html if offline and navigating
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html', { ignoreSearch: true });
        }
      });
    })
  );
});
