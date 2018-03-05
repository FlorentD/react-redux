import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router';
import { renderToString } from 'react-dom/server';
import App from '../public/scripts/app/index';

export function renderFullPage(req, store, context = {}) {
  const fullContext = { fromServer: true, ...context };
  const html = renderToString(
    <Router location={req.url} context={fullContext}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  return `
    <!doctype html>
    <html>
      <head>
        <title>My SSR APP</title>
      </head>
      <body>
        <div id="body">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(
            store.getState()
          ).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/vendor.js"></script>
        <script src="/static/app.js"></script>
      </body>
    </html>
    `;
}
