import React from 'react';
import { Button } from '../components';

const Main = () => {
  return (
    <div className="text-center">
      <h1>Main</h1>
      <Button
        onClick={() => {
          fetch('/sendNotification', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: {},
          }).then(() => console.info('notification sent'));
        }}
      >
        Send my a notification please !
      </Button>
    </div>
  );
};

export default Main;
