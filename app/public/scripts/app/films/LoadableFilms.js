"use strict";

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireWildcard3(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var Films = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2["default"])(require("./Films"));
  });
});

var LoadableFilms = function LoadableFilms() {
  return /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dimmer, {
      active: true
    }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Loader, {
      indeterminate: true
    }, "Loading")))
  }, /*#__PURE__*/_react["default"].createElement(Films, null));
};

var _default = LoadableFilms;
exports["default"] = _default;