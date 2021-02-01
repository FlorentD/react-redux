"use strict";

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireWildcard3(require("react"));

var Films = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2["default"])(require('./Films'));
  });
});

var LoadableFilms = function LoadableFilms() {
  return /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading")
  }, /*#__PURE__*/_react["default"].createElement(Films, null));
};

var _default = LoadableFilms;
exports["default"] = _default;