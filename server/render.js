import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router';
import { renderToString } from 'react-dom/server';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from './static/react-loadable.json';
import App from '../public/scripts/app/index';

const sheet = new ServerStyleSheet();

export function renderFullPage(req, store, context = {}) {
  const fullContext = { fromServer: true, ...context };
  let modules = [];
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Router location={req.url} context={fullContext}>
        <Provider store={store}>
          <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <App />
          </Loadable.Capture>
        </Provider>
      </Router>
    </StyleSheetManager>
  );
  const styleTags = sheet.getStyleTags();
  const bundles = getBundles(stats, modules);
  sheet.seal();
  return `
    <!doctype html>
    <html lang="en">
      <head>
         <script> 
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js');
            }
        </script>
        <link rel="icon" type="image/jpeg" href="/image/icon-48.jpg">
        <link rel="manifest" href="/static/manifest.json">
        <meta charset="utf-8" />
        <meta name="theme-color" content="#0066ff"/>
        <meta name="description" content="My tests to get the perfect webapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <link
          rel="stylesheet"
          href="/static/app.css"
        />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <title>My SSR APP</title>
        ${styleTags}
      </head>
      <body>
        <div id="body">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(
            store.getState()
          ).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/vendors~app.js"></script>
        <script src="/static/app.js"></script>
        ${bundles.map(
          bundle => `<script src="/static/${bundle.file}"></script>`
        )}
      </body>
    </html>
    `;
}
