"use strict";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log("Yay! Workbox is loaded \uD83C\uDF89");
  workbox.precaching.precacheAndRoute([{
    url: '/index.html',
    revision: '383676'
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
  console.log("Boo! Workbox didn't load \uD83D\uDE2C");
}

self.addEventListener('push', function (event) {
  event.waitUntil(self.registration.showNotification('ReactRedux-FR', {
    lang: 'en',
    icon: '/image/icon-96.png',
    body: 'Hey you ! You got a notification !',
    vibrate: [500, 100, 500]
  }));
});