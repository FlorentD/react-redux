import React, { useState, useEffect } from 'react';

const CheckConnection = () => {
  if (typeof navigator === 'undefined') return null;
  const [isOnline, online] = useState(navigator.onLine);
  const [hasBeenOffline, offline] = useState(false);
  const [showWelcomeBackMessage, welcomeBackMessage] = useState(false);

  useEffect(() => {
    const setOnline = () => online(true);
    const setOffline = () => {
      online(false);
      offline(true);
    };
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);
    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  useEffect(() => {
    if (online && hasBeenOffline) {
      welcomeBackMessage(true);
      const timeout = setTimeout(() => welcomeBackMessage(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [isOnline]);

  if (isOnline && !showWelcomeBackMessage) {
    return null;
  }

  if (isOnline && showWelcomeBackMessage) {
    return (
      <div>
        <div>Welcome back on web ! 🎉</div>
      </div>
    );
  }

  return (
    <div>
      <div>You seem to be offline 😭</div>
    </div>
  );
};

export default CheckConnection;
