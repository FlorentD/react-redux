import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { StaticRouter as Router } from 'react-router-dom';
import manfiest from './static/manifest.assets.json';
import App from '../public/scripts/app/index';
import { makeExecutableSchema } from 'apollo-server-express';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { resolvers, typeDefs } from './apollo';
import { getDataFromTree } from '@apollo/client/react/ssr';

export function renderFullPage(req, context = {}) {
  const sheet = new ServerStyleSheet();
  const client = new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({
      schema: makeExecutableSchema({ resolvers, typeDefs }),
    }),
    cache: new InMemoryCache(),
  });
  const fullContext = { fromServer: true, ...context };
  const FullApp = (
    <StyleSheetManager sheet={sheet.instance}>
      <ApolloProvider client={client} context={fullContext}>
        <Router location={req.url} context={fullContext}>
          <App />
        </Router>
      </ApolloProvider>
    </StyleSheetManager>
  );
  return getDataFromTree(FullApp).then((content) => {
    const initialState = client.extract();
    const styleTags = sheet.getStyleTags();
    const styles = ['app.css'].map(
      (file) => `<link rel="stylesheet" href="${manfiest[file]}"/>`
    );
    const assets = ['vendors.js', 'app.js']
      .map((file) => `<script src="${manfiest[file]}"></script>`)
      .join('');
    sheet.seal();
    return `
    <!doctype html>
    <html lang="fr">
      <head>
        <link rel="icon" type="image/jpeg" href="/image/icon-48.png">
        <link rel="manifest" href="/manifest.json">
        <meta charset="utf-8" />
        <meta name="theme-color" content="#0066ff"/>
        <meta name="description" content="My tests to get the perfect webapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.0.0/modern-normalize.min.css" />
         ${styles}
        <title>My SSR APP</title>
        ${styleTags}
      </head>
      <body>
        <div id="body">${content}</div>
        <script>
            window.__APOLLO_STATE__ = ${JSON.stringify(initialState).replace(
              /</g,
              '\\u003c'
            )}
        </script>
        ${assets}
      </body>
    </html>
    `;
  });
}
