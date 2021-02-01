"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _menu = _interopRequireDefault(require("./menu"));

var _main = _interopRequireDefault(require("./main"));

var _why = _interopRequireDefault(require("./why"));

var _about = _interopRequireDefault(require("./about"));

var _NoMatch = _interopRequireDefault(require("./NoMatch"));

var _CheckConnection = _interopRequireDefault(require("./CheckConnection"));

var _LoadableFilms = _interopRequireDefault(require("./films/LoadableFilms"));

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-2 bg-hero bg-center bg-cover bg-fixed bg-white text-black h-full"
  }, /*#__PURE__*/_react["default"].createElement(_menu["default"], null), /*#__PURE__*/_react["default"].createElement(_CheckConnection["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/_react["default"].createElement(_main["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/why"
  }, /*#__PURE__*/_react["default"].createElement(_why["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/about"
  }, /*#__PURE__*/_react["default"].createElement(_about["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/films"
  }, /*#__PURE__*/_react["default"].createElement(_LoadableFilms["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, null, /*#__PURE__*/_react["default"].createElement(_NoMatch["default"], null)))));
};

var _default = App;
exports["default"] = _default;