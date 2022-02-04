"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubscription = void 0;

require("core-js/modules/es.typed-array.set.js");

let subscription = null;

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

if (typeof window !== 'undefined') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => registration.pushManager.getSubscription().then(async validSubscription => {
      if (validSubscription) {
        return validSubscription;
      }

      const response = await fetch('/vapidPublicKey');
      const vapidPublicKey = await response.text();
      const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
      return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey
      });
    })).then(validSubscription => subscription = validSubscription);
  }
}

const getSubscription = () => subscription;

exports.getSubscription = getSubscription;