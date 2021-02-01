"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.string.link.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRedux = require("react-redux");

var _redux = require("./redux");

var _reactRouterDom = require("react-router-dom");

var List = _styledComponents["default"].ul.withConfig({
  displayName: "menu__List",
  componentId: "sc-1c9xkt1-0"
})(["padding:0;margin:0;background-color:white;border-radius:4px;display:flex;"]);

var Item = _styledComponents["default"].li.withConfig({
  displayName: "menu__Item",
  componentId: "sc-1c9xkt1-1"
})(["padding:12px;position:relative;font-size:smaller;::before{position:absolute;content:'';top:0;right:0;height:100%;width:1px;background:gainsboro;}"]);

var PageMenu = function PageMenu() {
  return /*#__PURE__*/_react["default"].createElement(List, null, (0, _reactRedux.useSelector)(_redux.getMenu).map(function (_ref) {
    var id = _ref.id,
        label = _ref.label,
        link = _ref.link;
    return /*#__PURE__*/_react["default"].createElement(Item, {
      key: id,
      name: id
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: link
    }, label));
  }));
};

var _default = PageMenu;
exports["default"] = _default;