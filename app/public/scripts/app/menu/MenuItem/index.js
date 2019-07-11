"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const MenuLi = _styledComponents.default.li.withConfig({
  displayName: "MenuItem__MenuLi",
  componentId: "sc-1kfc9ed-0"
})(["font-weight:bold;"]);

const MenuItem = ({
  label,
  link
}) => {
  return _react.default.createElement(MenuLi, null, _react.default.createElement(_reactRouterDom.Link, {
    to: link
  }, label));
};

MenuItem.propTypes = {
  label: _propTypes.default.string,
  link: _propTypes.default.string
};
const _default = MenuItem;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MenuLi, "MenuLi", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js");
  reactHotLoader.register(MenuItem, "MenuItem", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/MenuItem/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();