"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./webWorker");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _index = _interopRequireDefault(require("./app/index"));

var _store = _interopRequireDefault(require("./store"));

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: _store["default"]
}, /*#__PURE__*/_react["default"].createElement(_index["default"], null))), document.getElementById('body'));