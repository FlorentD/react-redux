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

var _reactRouterDom = require("react-router-dom");

var menu = [{
  id: 'item1',
  label: 'Main',
  link: ''
}, {
  id: 'item2',
  label: 'Why',
  link: 'why'
}, {
  id: 'item3',
  label: 'About',
  link: 'about'
}, {
  id: 'item4',
  label: 'NoMatch',
  link: 'nomatch'
}, {
  id: 'item5',
  label: 'Filmz',
  link: 'films'
}];

var List = _styledComponents["default"].ul.withConfig({
  displayName: "menu__List",
  componentId: "sc-1c9xkt1-0"
})(["padding:0;margin:0;background-color:", ";border-radius:4px;display:flex;"], function (_ref) {
  var theme = _ref.theme;
  return theme.bgColor;
});

var Item = _styledComponents["default"].li.withConfig({
  displayName: "menu__Item",
  componentId: "sc-1c9xkt1-1"
})(["padding:12px;position:relative;font-size:smaller;::before{position:absolute;content:'';top:0;right:0;height:100%;width:1px;background:gainsboro;}"]);

var PageMenu = function PageMenu() {
  return /*#__PURE__*/_react["default"].createElement(List, null, menu.map(function (_ref2) {
    var id = _ref2.id,
        label = _ref2.label,
        link = _ref2.link;
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