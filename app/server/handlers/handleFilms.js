"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilm = void 0;

var _store = require("../store");

var _render = require("../render");

var _redux = require("../../public/scripts/app/films/redux");

const handleFilm = async (req, res) => {
  const store = (0, _store.create)();
  await (0, _redux.fetchFilms)()(store.dispatch);
  res.status(200).send((0, _render.renderFullPage)(req, store));
};

exports.handleFilm = handleFilm;