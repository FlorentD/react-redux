import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router';
import ReactDOM from 'react-dom/server';
import manfiest from './static/manifest.assets.json';
import App from '../public/scripts/app/index';

export function renderFullPage(req, store, context = {}) {
  const fullContext = { fromServer: true, ...context };
  const html = ReactDOM.renderToString(
    <Router location={req.url} context={fullContext}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  const styles =
    process.env.ASSETS_STRATEGY !== 'production'
      ? `
      <link rel="stylesheet" href="/static/styles.css"/>
       `
      : ['app.css'].map(
          (file) => `<link rel="stylesheet" href="${manfiest[file]}"/>`
        );
  const assets =
    process.env.ASSETS_STRATEGY !== 'production'
      ? `
      <script src="/static/vendors.js"></script>
      <script src="/static/app.js"></script>
       `
      : ['vendors.js', 'app.js'].map(
          (file) => `<script src="${manfiest[file]}"></script>`
        );
  return `
    <!doctype html>
    <html lang="en">
      <head>
         <script> 
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js');
            }
        </script>
        <link rel="icon" type="image/jpeg" href="/image/icon-48.png">
        <link rel="manifest" href="/static/manifest.json">
        <meta charset="utf-8" />
        <meta name="theme-color" content="#0066ff"/>
        <meta name="description" content="My tests to get the perfect webapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        ${styles}
        <title>My SSR APP</title>
      </head>
      <body>
        <div id="body">${html}</div>
        ${assets}
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(
            store.getState()
          ).replace(/</g, '\\u003c')}
        </script>
      </body>
    </html>
    `;
}
