import React from 'react';

const Main = () => {
  return (
    <div className="text-center m-4">
      <h1>Main</h1>
      <div className="m-12">
        <button
          className="rounded-md bg-button hover:bg-buttonFocused py-2 px-4 text-white font-bold text-sm"
          onClick={() => {
            fetch('/sendNotification', {
              method: 'post',
              headers: {
                'Content-type': 'application/json',
              },
              body: null, // fix push api
            }).then(() => console.info('notification sent'));
          }}
        >
          Send my a notification please !!
        </button>
      </div>
    </div>
  );
};

export default Main;
