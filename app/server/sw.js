"use strict";

self.addEventListener('install', event => {
  console.log('Install Done', event);
});
self.addEventListener('activate', event => {
  console.log('Activation ok !', event);
});
self.addEventListener('fetch', event => {
  console.log('Fetching:', event.request.url);
});