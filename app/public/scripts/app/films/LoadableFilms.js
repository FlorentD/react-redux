"use strict";

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireWildcard3(require("react"));

var _semanticUiReact = require("semantic-ui-react");

const Films = (0, _react.lazy)(() => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require("./Films"))));

const LoadableFilms = () => {
  return /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement(_semanticUiReact.Segment, null, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dimmer, {
      active: true
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Loader, {
      indeterminate: true
    }, "Loading")))
  }, /*#__PURE__*/_react.default.createElement(Films, null));
};

var _default = LoadableFilms;
exports.default = _default;