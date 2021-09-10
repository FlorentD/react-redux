"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFullPage = renderFullPage;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _reactRouterDom = require("react-router-dom");

var _manifestAssets = _interopRequireDefault(require("./static/manifest.assets.json"));

var _index = _interopRequireDefault(require("../public/scripts/app/index"));

var _schema = require("@graphql-tools/schema");

var _client = require("@apollo/client");

var _schema2 = require("@apollo/client/link/schema");

var _apollo = require("./apollo");

var _ssr = require("@apollo/client/react/ssr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderFullPage(req, context = {}) {
  const sheet = new _styledComponents.ServerStyleSheet();
  const client = new _client.ApolloClient({
    ssrMode: true,
    link: new _schema2.SchemaLink({
      schema: (0, _schema.makeExecutableSchema)({
        resolvers: _apollo.resolvers,
        typeDefs: _apollo.typeDefs
      })
    }),
    cache: new _client.InMemoryCache()
  });
  const fullContext = {
    fromServer: true,
    ...context
  };

  const FullApp = /*#__PURE__*/_react.default.createElement(_styledComponents.StyleSheetManager, {
    sheet: sheet.instance
  }, /*#__PURE__*/_react.default.createElement(_client.ApolloProvider, {
    client: client,
    context: fullContext
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: fullContext
  }, /*#__PURE__*/_react.default.createElement(_index.default, null))));

  return (0, _ssr.getDataFromTree)(FullApp).then(content => {
    const initialState = client.extract();
    const styleTags = sheet.getStyleTags();
    const styles = ['app.css'].map(file => `<link rel="stylesheet" href="${_manifestAssets.default[file]}"/>`);
    const assets = ['vendors.js', 'app.js'].map(file => `<script src="${_manifestAssets.default[file]}"></script>`).join('');
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
            window.__APOLLO_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')}
        </script>
        ${assets}
      </body>
    </html>
    `;
  });
}