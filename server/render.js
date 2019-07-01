import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { StoreContext } from 'redux-react-hook';
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
        <StoreContext.Provider value={store}>
          <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <App />
          </Loadable.Capture>
        </StoreContext.Provider>
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
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
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
