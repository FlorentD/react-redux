"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _component = _interopRequireDefault(require("@loadable/component"));

var _styledComponents = _interopRequireWildcard3(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _menu = _interopRequireDefault(require("./menu"));

var _main = _interopRequireDefault(require("./main"));

var _why = _interopRequireDefault(require("./why"));

var _about = _interopRequireDefault(require("./about"));

var _NoMatch = _interopRequireDefault(require("./NoMatch"));

var _CheckConnection = _interopRequireDefault(require("./CheckConnection"));

var _LoadableFilms = _interopRequireDefault(require("./films/LoadableFilms"));

var _templateObject;

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  :root {\n    --background-color:#f0efef;\n    --primary-color: #000;\n  }\n  \n  html.dark {\n    --background-color:#000;\n    --primary-color: #f0efef;\n  }\n\n  html.theming, \n  html.theming * {\n    transition: all 0.2s linear;\n  }\n  \nhtml, body, #body {\n  height: 100%;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  color: var(--primary-color);\n  &:visited {\n    color: blue;\n  }\n}\n"])));

var Layout = _styledComponents["default"].div.withConfig({
  displayName: "app__Layout",
  componentId: "vbjlqm-0"
})(["padding:10px;background-image:url('/image/background.jpg');background-position:center;background-size:cover;background-attachment:fixed;color:var(--primary-color);height:100%;"]);

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
  }, /*#__PURE__*/_react["default"].createElement(_LoadableFilms["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/lazy",
    render: function render() {
      var Lazy = (0, _component["default"])(function () {
        return Promise.resolve().then(function () {
          return (0, _interopRequireWildcard2["default"])(require('./lazy'));
        });
      });
      return /*#__PURE__*/_react["default"].createElement(Lazy, null);
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, null, /*#__PURE__*/_react["default"].createElement(_NoMatch["default"], null)))), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      document.documentElement.classList.add('theming');
      document.documentElement.addEventListener('transitionend', function () {
        return document.documentElement.classList.remove('theming');
      }, {
        once: true
      });
      document.documentElement.classList.toggle('dark');
    }
  }, "Switch theme"));
};

var _default = App;
exports["default"] = _default;