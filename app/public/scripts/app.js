"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reduxReactHook = require("redux-react-hook");

var _reactRouterDom = require("react-router-dom");

var _index = _interopRequireDefault(require("./app/index"));

var _store = _interopRequireDefault(require("./store"));

(0, _reactDom.hydrate)(_react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_reduxReactHook.StoreContext.Provider, {
  value: _store.default
}, _react.default.createElement(_index.default, null))), document.getElementById('body'));