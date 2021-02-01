"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.string.link.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("./redux");

var _reactRouterDom = require("react-router-dom");

var PageMenu = function PageMenu() {
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "flex flex-row bg-white rounded-sm border border-solid border-gray-200"
  }, (0, _reactRedux.useSelector)(_redux.getMenu).map(function (_ref) {
    var id = _ref.id,
        label = _ref.label,
        link = _ref.link;
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: id,
      name: id,
      className: "py-3.5 px-4"
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: link
    }, label));
  }));
};

var _default = PageMenu;
exports["default"] = _default;