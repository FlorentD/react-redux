"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFullPage = renderFullPage;

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.exec.js");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _reactRouterDom = require("react-router-dom");

var _manifestAssets = _interopRequireDefault(require("./static/manifest.assets.json"));

var _index = _interopRequireDefault(require("../public/scripts/app/index"));

var _apolloServerExpress = require("apollo-server-express");

var _client = require("@apollo/client");

var _schema = require("@apollo/client/link/schema");

var _apollo = require("./apollo");

var _ssr = require("@apollo/client/react/ssr");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function renderFullPage(req) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var sheet = new _styledComponents.ServerStyleSheet();
  var client = new _client.ApolloClient({
    ssrMode: true,
    link: new _schema.SchemaLink({
      schema: (0, _apolloServerExpress.makeExecutableSchema)({
        resolvers: _apollo.resolvers,
        typeDefs: _apollo.typeDefs
      })
    }),
    cache: new _client.InMemoryCache()
  });

  var fullContext = _objectSpread({
    fromServer: true
  }, context);

  var FullApp = /*#__PURE__*/_react.default.createElement(_styledComponents.StyleSheetManager, {
    sheet: sheet.instance
  }, /*#__PURE__*/_react.default.createElement(_client.ApolloProvider, {
    client: client,
    context: fullContext
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: fullContext
  }, /*#__PURE__*/_react.default.createElement(_index.default, null))));

  return (0, _ssr.getDataFromTree)(FullApp).then(function (content) {
    var initialState = client.extract();
    var styleTags = sheet.getStyleTags();
    var styles = ['app.css'].map(function (file) {
      return "<link rel=\"stylesheet\" href=\"".concat(_manifestAssets.default[file], "\"/>");
    });
    var assets = ['vendors.js', 'app.js'].map(function (file) {
      return "<script src=\"".concat(_manifestAssets.default[file], "\"></script>");
    }).join('');
    sheet.seal();
    return "\n    <!doctype html>\n    <html lang=\"fr\">\n      <head>\n        <link rel=\"icon\" type=\"image/jpeg\" href=\"/image/icon-48.png\">\n        <link rel=\"manifest\" href=\"/manifest.json\">\n        <meta charset=\"utf-8\" />\n        <meta name=\"theme-color\" content=\"#0066ff\"/>\n        <meta name=\"description\" content=\"My tests to get the perfect webapp\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\">\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.0.0/modern-normalize.min.css\" />\n         ".concat(styles, "\n        <title>My SSR APP</title>\n        ").concat(styleTags, "\n      </head>\n      <body>\n        <div id=\"body\">").concat(content, "</div>\n        <script>\n            window.__APOLLO_STATE__ = ").concat(JSON.stringify(initialState).replace(/</g, "\\u003c"), "\n        </script>\n        ").concat(assets, "\n      </body>\n    </html>\n    ");
  });
}