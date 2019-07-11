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

var _root = require("react-hot-loader/root");

var _menu = _interopRequireDefault(require("./menu"));

var _main = _interopRequireDefault(require("./main"));

var _why = _interopRequireDefault(require("./why"));

var _about = _interopRequireDefault(require("./about"));

var _NoMatch = _interopRequireDefault(require("./NoMatch"));

var _LoadableFilms = _interopRequireDefault(require("./films/LoadableFilms"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

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

const App = () => {
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

const _default = (0, _root.hot)(App);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GlobalStyle, "GlobalStyle", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js");
  reactHotLoader.register(Container, "Container", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js");
  reactHotLoader.register(App, "App", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();