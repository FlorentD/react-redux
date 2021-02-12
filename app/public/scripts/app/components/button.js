"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var Button = function Button(_ref) {
  var props = Object.assign({}, _ref);
  return /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
    className: "rounded-md bg-button hover:bg-buttonFocused py-2 px-4 text-white font-bold text-sm"
  }, props));
};

var _default = Button;
exports["default"] = _default;