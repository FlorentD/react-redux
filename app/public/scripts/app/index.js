"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/esnext.weak-map.delete-all.js");

var _react = _interopRequireDefault(require("react"));

var _component = _interopRequireDefault(require("@loadable/component"));

var _reactRouterDom = require("react-router-dom");

var _menu = _interopRequireDefault(require("./menu"));

var _main = _interopRequireDefault(require("./main"));

var _why = _interopRequireDefault(require("./why"));

var _about = _interopRequireDefault(require("./about"));

var _NoMatch = _interopRequireDefault(require("./NoMatch"));

var _CheckConnection = _interopRequireDefault(require("./CheckConnection"));

var _Films = _interopRequireDefault(require("./films/Films"));

var _components = require("./components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let App = () => {
  return /*#__PURE__*/_react.default.createElement(_components.Layout, null, /*#__PURE__*/_react.default.createElement(_components.Layout.Menu, null, /*#__PURE__*/_react.default.createElement(_menu.default, null)), /*#__PURE__*/_react.default.createElement(_CheckConnection.default, null), /*#__PURE__*/_react.default.createElement(_components.Layout.Body, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/_react.default.createElement(_main.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/why"
  }, /*#__PURE__*/_react.default.createElement(_why.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/about"
  }, /*#__PURE__*/_react.default.createElement(_about.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/films"
  }, /*#__PURE__*/_react.default.createElement(_Films.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/lazy",
    render: () => {
      const Lazy = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require('./lazy'))));
      return /*#__PURE__*/_react.default.createElement(Lazy, null);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, null, /*#__PURE__*/_react.default.createElement(_NoMatch.default, null)))));
};

var _default = App;
exports.default = _default;