"use strict";

const version = '1';
const cacheName = `reactreact-fr-${version}`;
self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(function (cache) {
    return cache.addAll(['/offline.html', '/404.html']);
  }));
});
self.addEventListener('activate', event => {
  console.log('Activation ok !', event);
});
self.addEventListener('fetch', event => {
  console.log('Fetching:', event.request.url);
  event.respondWith(caches.match(event.request).then(response => {
    if (response) {
      return response;
    }

    return fetch(event.request).then(response => {
      if (response.status === 404) {
        return caches.match('/404.html');
      }

      caches.open(cacheName).then(cache => {
        return cache.add(event.request.url);
      });
      return response;
    });
  }).catch(() => {
    return caches.match('/offline.html');
  }));
});