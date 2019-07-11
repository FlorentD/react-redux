"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilm = void 0;

var _store = require("../store");

var _render = require("../render");

var _redux = require("../../public/scripts/app/films/redux");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const handleFilm = async (req, res) => {
  const store = (0, _store.create)();
  await (0, _redux.fetchFilms)()(store.dispatch);
  res.status(200).send((0, _render.renderFullPage)(req, store));
};

exports.handleFilm = handleFilm;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(handleFilm, "handleFilm", "/Users/florentduveau/WebstormProjects/react-redux/server/handlers/handleFilms.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();