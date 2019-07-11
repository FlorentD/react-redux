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
var _default = MenuItem;
exports.default = _default;