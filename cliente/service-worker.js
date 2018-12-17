var cacheName = 'Lista-Compras-v31';
var filesToCache = [
    '/',
    '/index.html',
    '/login.html',
    '/producto.html',
    '/tienda.html',
    '/suscribe.html',
    '/app/app.js',
    '/app/facebookApi.js',
    '/app/facebookApi2.js',
    '/app/main.js',
    '/app/menu.js',
    '/app/main1.js',
    '/app/productApi.js',
    '/app/registerApi.js',
    '/app/tiendaApi.js',
    '/style/facebook.css',
    '/style/index.css',
    '/style/login.css',
    '/style/menu.css',
    '/style/producto.css',
    '/style/tienda.css',
    '/style/suscribe.css',
    '/img/ShoppingLists.png',
    '/img/icons/icon125x125.png',
    '/img/icons/icon152x152.png',
    '/img/icons/icon192x192.png',
    '/img/icons/icon225x225.png',
    '/img/badge.png',
    '/img/icon.png'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== cacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
});
'use strict';
self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  
    const title = 'Notificacion Push';
    const options = {
      body: 'Felicitaciones',
      icon: 'images/icon.png',
      badge: 'images/badge.png'
    };
  
    const notificationPromise = self.registration.showNotification(title, options);
    event.waitUntil(notificationPromise);
  });
  self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click Received.');
  
    event.notification.close();
  
    event.waitUntil(
      clients.openWindow('https://developers.google.com/web/')
    );
});
