import React from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { Provider } from "react-redux";
import { StaticRouter as Router } from "react-router";
import ReactDOM from "react-dom/server";
import manfiest from "./static/manifest.assets.json";
import App from "../public/scripts/app/index";

export function renderFullPage(req, store, context = {}) {
  const sheet = new ServerStyleSheet();
  const fullContext = { fromServer: true, ...context };
  const html = ReactDOM.renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Router location={req.url} context={fullContext}>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </StyleSheetManager>
  );
  const styleTags = sheet.getStyleTags();
  const assets =
    process.env.ASSETS_STRATEGY !== "production"
      ? `
      <script src="/static/vendors.js">
      </script><script src="/static/app.js"></script>
       `
      : ["vendors.js", "app.js"].map(
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        
        <title>My SSR APP</title>
        ${styleTags}
      </head>
      <body>
        <div id="body">${html}</div>
        ${assets}
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(
            store.getState()
          ).replace(/</g, "\\u003c")}
        </script>
      </body>
    </html>
    `;
}
