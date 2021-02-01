"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _menu = _interopRequireDefault(require("./menu"));

var _main = _interopRequireDefault(require("./main"));

var _why = _interopRequireDefault(require("./why"));

var _about = _interopRequireDefault(require("./about"));

var _NoMatch = _interopRequireDefault(require("./NoMatch"));

var _CheckConnection = _interopRequireDefault(require("./CheckConnection"));

var _LoadableFilms = _interopRequireDefault(require("./films/LoadableFilms"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\nhtml, body, #body {\n  height: 100%;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  color: rgb(0, 0, 0);\n  &:visited {\n    color: blue;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var Layout = _styledComponents["default"].div.withConfig({
  displayName: "app__Layout",
  componentId: "vbjlqm-0"
})(["padding:10px;background-image:url('/image/background.jpg');background-position:center;background-size:cover;background-attachment:fixed;background-color:#f0efef;color:black;height:100%;"]);

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(Layout, null, /*#__PURE__*/_react["default"].createElement(GlobalStyle, null), /*#__PURE__*/_react["default"].createElement(_menu["default"], null), /*#__PURE__*/_react["default"].createElement(_CheckConnection["default"], null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
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