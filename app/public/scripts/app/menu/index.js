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

PageMenu.propTypes = {
  menu: _propTypes.default.arrayOf(_propTypes.default.object)
};
var _default = PageMenu;
exports.default = _default;