"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.for-each");

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

function renderFullPage(req, store) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var sheet = new _styledComponents.ServerStyleSheet();

  var fullContext = _objectSpread({
    fromServer: true
  }, context);

  var html = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_styledComponents.StyleSheetManager, {
    sheet: sheet.instance
  }, /*#__PURE__*/_react.default.createElement(_reactRouter.StaticRouter, {
    location: req.url,
    context: fullContext
  }, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_index.default, null)))));

  var styleTags = sheet.getStyleTags();
  var assets = process.env.ASSETS_STRATEGY !== "production" ? "\n      <script src=\"/static/vendors~app.js\">\n      </script><script src=\"/static/app.js\"></script>\n       " : ["vendors~app.js", "app.js"].map(function (file) {
    return "<script src=\"".concat(_manifestAssets.default[file], "\"></script>");
  });
  sheet.seal();
  return "\n    <!doctype html>\n    <html lang=\"en\">\n      <head>\n         <script> \n            if ('serviceWorker' in navigator) {\n                navigator.serviceWorker.register('/sw.js');\n            }\n        </script>\n        <link rel=\"icon\" type=\"image/jpeg\" href=\"/image/icon-48.jpg\">\n        <link rel=\"manifest\" href=\"/static/manifest.json\">\n        <meta charset=\"utf-8\" />\n        <meta name=\"theme-color\" content=\"#0066ff\"/>\n        <meta name=\"description\" content=\"My tests to get the perfect webapp\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\">\n        <link\n          rel=\"stylesheet\"\n          href=\"/static/app.css\"\n        />\n        <link rel=\"stylesheet\" href=\"//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css\" />\n        <title>My SSR APP</title>\n        ".concat(styleTags, "\n      </head>\n      <body>\n        <div id=\"body\">").concat(html, "</div>\n        ").concat(assets, "\n        <script>\n          window.__PRELOADED_STATE__ = ").concat(JSON.stringify(store.getState()).replace(/</g, "\\u003c"), "\n        </script>\n      </body>\n    </html>\n    ");
}