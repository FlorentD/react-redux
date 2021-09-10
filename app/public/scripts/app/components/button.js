"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Button = ({ ...props
}) => {
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: "rounded-md bg-button hover:bg-buttonFocused py-2 px-4 text-white font-bold text-sm"
  }, props));
};

var _default = Button;
exports.default = _default;