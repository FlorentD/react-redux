"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.string.link.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
}, {
  id: 'item6',
  label: 'Lazy',
  link: 'lazy'
}];

var PageMenu = function PageMenu() {
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "flex flex-col mt-4"
  }, menu.map(function (_ref) {
    var id = _ref.id,
        label = _ref.label,
        link = _ref.link;
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: id,
      name: id
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      className: "block p-4 text-white visited:text-blue-100 font-bold hover:text-blue-200 text-xl",
      to: link
    }, label));
  }));
};

var _default = PageMenu;
exports["default"] = _default;