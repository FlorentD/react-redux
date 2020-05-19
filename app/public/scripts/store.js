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

var preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var store = (0, _redux.createStore)(_reducers.default, preloadedState, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk.default, _logger.default)));
var _default = store;
exports.default = _default;