import React, { useState, useEffect } from 'react';
import { Message } from 'semantic-ui-react';

const CheckConnection = () => {
  if (typeof navigator === 'undefined') return null
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
      <Message success>
        <Message.Header>Welcome back on web ! 🎉</Message.Header>
      </Message>
    );
  }

  return (
    <Message warning>
      <Message.Header>You seem to be offline 😭</Message.Header>
    </Message>
  );
};

export default CheckConnection;
