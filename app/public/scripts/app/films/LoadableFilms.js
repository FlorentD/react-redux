"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireDefault(require("react"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const LoadableFilms = (0, _reactLoadable.default)({
  loader: () => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('./Films'))).catch(e => console.log(e)),
  modules: ['./Films'],
  webpack: () => [require.resolveWeak('./Films')],

  loading() {
    return _react.default.createElement("div", null, "Chargement");
  }

});
const _default = LoadableFilms;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoadableFilms, "LoadableFilms", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/LoadableFilms.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/LoadableFilms.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();