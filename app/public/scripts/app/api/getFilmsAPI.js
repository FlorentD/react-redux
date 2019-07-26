"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilmsAPI = void 0;

var _dexie = _interopRequireDefault(require("dexie"));

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

const db = new _dexie.default('reactredux-fr-db');
db.version(1).stores({
  films: '++id,title,image'
});

const getFilmsAPI = async () => {
  const localFilms = await db.films.toArray();

  if (!navigator.onLine) {
    return localFilms;
  } else if ((0, _isEmpty.default)(localFilms)) {
    const response = await fetch('https://startmeup.herokuapp.com/api/movies');
    const films = await response.json();
    await db.films.bulkPut(films);
    return films;
  } else fetch('https://startmeup.herokuapp.com/api/movies').then(response => response.json()).then(films => db.films.bulkPut(films));

  return localFilms;
};

exports.getFilmsAPI = getFilmsAPI;