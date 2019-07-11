"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reduxReactHook = require("redux-react-hook");

var _Menu = _interopRequireDefault(require("./Menu"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _redux = require("./redux");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const PageMenu = () => {
  return _react.default.createElement(_Menu.default, null, (0, _reduxReactHook.useMappedState)(_redux.getMenu).map(({
    id,
    label,
    link
  }) => _react.default.createElement(_MenuItem.default, {
    key: id,
    label: label,
    link: link
  })));
};

__signature__(PageMenu, "useMappedState{}", () => [_reduxReactHook.useMappedState]);

PageMenu.propTypes = {
  menu: _propTypes.default.arrayOf(_propTypes.default.object)
};
const _default = PageMenu;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PageMenu, "PageMenu", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();