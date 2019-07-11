"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilmsAPI = void 0;

const getFilmsAPI = async () => {
  const response = await fetch('https://startmeup.herokuapp.com/api/movies');
  return await response.json();
};

exports.getFilmsAPI = getFilmsAPI;