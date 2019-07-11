"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FilmsRequest = _interopRequireDefault(require("./FilmsRequest"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const Films = () => _react.default.createElement(_FilmsRequest.default, null, films => _react.default.createElement("ul", null, films.map(film => _react.default.createElement("li", {
  key: film.id
}, film.title))));

const _default = Films;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Films, "Films", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/Films.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/Films.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();