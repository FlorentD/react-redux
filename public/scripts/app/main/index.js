import React from 'react';
import { getSubscription } from '../push';

const Main = () => {
  return (
    <div className="main">
      <h1>Main</h1>
      <button
        onClick={() => {
          fetch('/sendNotification', {
            method: 'post',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              subscription: getSubscription(),
            }),
          }).then(() => console.info('notification sent'));
        }}
      >
        Send my a notification please !
      </button>
    </div>
  );
};

export default Main;
