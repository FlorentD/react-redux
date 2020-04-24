"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFullPage = renderFullPage;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _server = _interopRequireDefault(require("react-dom/server"));

var _manifestAssets = _interopRequireDefault(require("./static/manifest.assets.json"));

var _index = _interopRequireDefault(require("../public/scripts/app/index"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function renderFullPage(req, store, context = {}) {
  const sheet = new _styledComponents.ServerStyleSheet();

  const fullContext = _objectSpread({
    fromServer: true
  }, context);

  const html = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_styledComponents.StyleSheetManager, {
    sheet: sheet.instance
  }, /*#__PURE__*/_react.default.createElement(_reactRouter.StaticRouter, {
    location: req.url,
    context: fullContext
  }, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_index.default, null)))));

  const styleTags = sheet.getStyleTags();
  const assets = process.env.ASSETS_STRATEGY !== "production" ? `
      <script src="/static/vendors~app.js">
      </script><script src="/static/app.js"></script>
       ` : ["vendors~app.js", "app.js"].map(file => `<script src="${_manifestAssets.default[file]}"></script>`);
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
        ${assets}
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, "\\u003c")}
        </script>
      </body>
    </html>
    `;
}