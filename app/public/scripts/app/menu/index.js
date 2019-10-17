"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _semanticUiReact = require("semantic-ui-react");

var _redux = require("./redux");

var _reactRouterDom = require("react-router-dom");

const PageMenu = () => {
  return _react.default.createElement(_semanticUiReact.Menu, null, (0, _reactRedux.useSelector)(_redux.getMenu).map(({
    id,
    label,
    link
  }) => _react.default.createElement(_semanticUiReact.Menu.Item, {
    key: id,
    name: id
  }, _react.default.createElement(_reactRouterDom.Link, {
    to: link
  }, label))));
};

var _default = PageMenu;
exports.default = _default;