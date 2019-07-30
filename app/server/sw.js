"use strict";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.precaching.precacheAndRoute(['/static/app.css', {
    url: '/index.html',
    revision: '2'
  }]);
  workbox.routing.registerRoute(/\.js$/, new workbox.strategies.NetworkFirst());
  workbox.routing.registerRoute(/\.css$/, new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'css-cache'
  }));
  workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/, new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [new workbox.expiration.Plugin({
      maxEntries: 20,
      maxAgeSeconds: 7 * 24 * 60 * 60
    })]
  }));
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

self.addEventListener('push', event => {
  event.waitUntil(self.registration.showNotification('ReactRedux-FR', {
    body: 'Brand new notification !'
  }));
});