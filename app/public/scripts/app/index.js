"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _menu = _interopRequireDefault(require("./menu"));

var _main = _interopRequireDefault(require("./main"));

var _why = _interopRequireDefault(require("./why"));

var _about = _interopRequireDefault(require("./about"));

var _NoMatch = _interopRequireDefault(require("./NoMatch"));

var _LoadableFilms = _interopRequireDefault(require("./films/LoadableFilms"));

const GlobalStyle = _styledComponents.createGlobalStyle`
ul {
  list-style: none;
}

a {
  color: rgb(0, 0, 0);
  &:visited {
    color: blue;
  }
}
`;

const Container = _styledComponents.default.div.withConfig({
  displayName: "app__Container",
  componentId: "vbjlqm-0"
})(["padding:10px;background-color:#f0efef;color:black;"]);

let App = () => {
  return _react.default.createElement(Container, null, _react.default.createElement(GlobalStyle, null), _react.default.createElement(_menu.default, null), _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _main.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/why",
    component: _why.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/about",
    component: _about.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/films",
    component: _LoadableFilms.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    component: _NoMatch.default
  })));
};

if (process.env.NODE_ENV !== 'production') {
  const {
    hot
  } = require('react-hot-loader/root');

  App = hot(App);
}

var _default = App;
exports.default = _default;