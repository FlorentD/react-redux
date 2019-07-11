"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const MenuUl = _styledComponents.default.ul.withConfig({
  displayName: "Menu__MenuUl",
  componentId: "sc-87iqw0-0"
})(["display:flex;justify-content:space-around;"]);

const Menu = ({
  children
}) => _react.default.createElement(MenuUl, null, children);

Menu.propTypes = {
  children: _propTypes.default.arrayOf(_propTypes.default.object)
};
const _default = Menu;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MenuUl, "MenuUl", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js");
  reactHotLoader.register(Menu, "Menu", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/Menu/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();