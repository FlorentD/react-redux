import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { StaticRouter as Router } from 'react-router';
import ReactDOM from 'react-dom/server';
import manfiest from './static/manifest.assets.json';
import App from '../public/scripts/app/index';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { client } from '../public/scripts/app/api';

export function renderFullPage(req, context = {}) {
  const sheet = new ServerStyleSheet();
  const fullContext = { fromServer: true, ...context };
  getDataFromTree(
    <StyleSheetManager sheet={sheet.instance}>
      <Router location={req.url} context={fullContext}>
        <App />
      </Router>
    </StyleSheetManager>
  ).then((content) => {
    const initialState = client.extract();
    console.log(initialState);
  });
  const html = ReactDOM.renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Router location={req.url} context={fullContext}>
        <App />
      </Router>
    </StyleSheetManager>
  );
  const styleTags = sheet.getStyleTags();
  const assets =
    process.env.ASSETS_STRATEGY !== 'production'
      ? `
      <script src="/static/vendors.js">
      </script><script src="/static/app.js"></script>
       `
      : ['vendors.js', 'app.js'].map(
          (file) => `<script src="${manfiest[file]}"></script>`
        );
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
        <link rel="icon" type="image/jpeg" href="/image/icon-48.png">
        <link rel="manifest" href="/static/manifest.json">
        <meta charset="utf-8" />
        <meta name="theme-color" content="#0066ff"/>
        <meta name="description" content="My tests to get the perfect webapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.0.0/modern-normalize.min.css" />
        
        <title>My SSR APP</title>
        ${styleTags}
      </head>
      <body>
        <div id="body">${html}</div>
        ${assets}
      </body>
    </html>
    `;
}
