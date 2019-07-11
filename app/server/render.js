"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFullPage = renderFullPage;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _reduxReactHook = require("redux-react-hook");

var _reactRouter = require("react-router");

var _server = require("react-dom/server");

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _webpack = require("react-loadable/webpack");

var _reactLoadable2 = _interopRequireDefault(require("./static/react-loadable.json"));

var _index = _interopRequireDefault(require("../public/scripts/app/index"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const sheet = new _styledComponents.ServerStyleSheet();

function renderFullPage(req, store, context = {}) {
  const fullContext = _objectSpread({
    fromServer: true
  }, context);

  let modules = [];
  const html = (0, _server.renderToString)(_react.default.createElement(_styledComponents.StyleSheetManager, {
    sheet: sheet.instance
  }, _react.default.createElement(_reactRouter.StaticRouter, {
    location: req.url,
    context: fullContext
  }, _react.default.createElement(_reduxReactHook.StoreContext.Provider, {
    value: store
  }, _react.default.createElement(_reactLoadable.default.Capture, {
    report: moduleName => modules.push(moduleName)
  }, _react.default.createElement(_index.default, null))))));
  const styleTags = sheet.getStyleTags();
  const bundles = (0, _webpack.getBundles)(_reactLoadable2.default, modules);
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
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/vendors~app.js"></script>
        <script src="/static/app.js"></script>
        ${bundles.map(bundle => `<script src="/static/${bundle.file}"></script>`)}
      </body>
    </html>
    `;
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sheet, "sheet", "/Users/florentduveau/WebstormProjects/react-redux/server/render.js");
  reactHotLoader.register(renderFullPage, "renderFullPage", "/Users/florentduveau/WebstormProjects/react-redux/server/render.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();