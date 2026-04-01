const CACHE_NAME = 'scoreboard-cache-v1';
const urlsToCache = [
  '/score/',
  '/score/index.html',
  // Add any CSS, JS, or image files your app uses here:
  // '/score/style.css',
  // '/score/script.js',
  '/score/icon-192.png',
  '/score/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});
