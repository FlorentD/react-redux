"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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
var _default = Menu;
exports.default = _default;