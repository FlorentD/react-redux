"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("./app/reducers"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _logger = _interopRequireDefault(require("./middleware/logger"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
const store = (0, _redux.createStore)(_reducers.default, preloadedState, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk.default, _logger.default)));
const _default = store;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(preloadedState, "preloadedState", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js");
  reactHotLoader.register(composeEnhancers, "composeEnhancers", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js");
  reactHotLoader.register(store, "store", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/store.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();