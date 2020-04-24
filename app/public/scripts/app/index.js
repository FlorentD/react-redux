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

var _semanticUiReact = require("semantic-ui-react");

var _menu = _interopRequireDefault(require("./menu"));

var _main = _interopRequireDefault(require("./main"));

var _why = _interopRequireDefault(require("./why"));

var _about = _interopRequireDefault(require("./about"));

var _NoMatch = _interopRequireDefault(require("./NoMatch"));

var _CheckConnection = _interopRequireDefault(require("./CheckConnection"));

var _LoadableFilms = _interopRequireDefault(require("./films/LoadableFilms"));

const GlobalStyle = (0, _styledComponents.createGlobalStyle)`
html, body, #body {
  height: 100%;
}

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

const Layout = _styledComponents.default.div.withConfig({
  displayName: "app__Layout",
  componentId: "vbjlqm-0"
})(["padding:10px;background-image:url('/image/background.jpg');background-position:center;background-size:cover;background-attachment:fixed;background-color:#f0efef;color:black;height:100%;"]);

let App = () => {
  return /*#__PURE__*/_react.default.createElement(Layout, null, /*#__PURE__*/_react.default.createElement(GlobalStyle, null), /*#__PURE__*/_react.default.createElement(_menu.default, null), /*#__PURE__*/_react.default.createElement(_CheckConnection.default, null), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Container, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _main.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/why",
    component: _why.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/about",
    component: _about.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/films",
    component: _LoadableFilms.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    component: _NoMatch.default
  }))));
};

if (process.env.NODE_ENV !== 'production') {
  const {
    hot
  } = require('react-hot-loader/root');

  App = hot(App);
}

var _default = App;
exports.default = _default;