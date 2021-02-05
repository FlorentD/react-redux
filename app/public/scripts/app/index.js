"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _menu = _interopRequireDefault(require("./menu"));

var _main = _interopRequireDefault(require("./main"));

var _why = _interopRequireDefault(require("./why"));

var _about = _interopRequireDefault(require("./about"));

var _NoMatch = _interopRequireDefault(require("./NoMatch"));

var _CheckConnection = _interopRequireDefault(require("./CheckConnection"));

var _LoadableFilms = _interopRequireDefault(require("./films/LoadableFilms"));

var _templateObject;

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\nhtml, body, #body {\n  height: 100%;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  color: ", ";\n  &:visited {\n    color: blue;\n  }\n}\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.color;
});

var Layout = _styledComponents["default"].div.withConfig({
  displayName: "app__Layout",
  componentId: "vbjlqm-0"
})(["padding:10px;background-image:url('/image/background.jpg');background-position:center;background-size:cover;background-attachment:fixed;color:", ";height:100%;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.color;
});

var lightTheme = {
  bgColor: '#f0efef',
  color: '#000'
};
var darkTheme = {
  color: '#f0efef',
  bgColor: '#000'
};

var App = function App() {
  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isLight = _useState2[0],
      setTheme = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: isLight ? lightTheme : darkTheme
  }, /*#__PURE__*/_react["default"].createElement(Layout, null, /*#__PURE__*/_react["default"].createElement(GlobalStyle, null), /*#__PURE__*/_react["default"].createElement(_menu["default"], null), /*#__PURE__*/_react["default"].createElement(_CheckConnection["default"], null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/_react["default"].createElement(_main["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/why"
  }, /*#__PURE__*/_react["default"].createElement(_why["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/about"
  }, /*#__PURE__*/_react["default"].createElement(_about["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/films"
  }, /*#__PURE__*/_react["default"].createElement(_LoadableFilms["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, null, /*#__PURE__*/_react["default"].createElement(_NoMatch["default"], null)))), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setTheme(!isLight);
    }
  }, "Switch theme")));
};

var _default = App;
exports["default"] = _default;