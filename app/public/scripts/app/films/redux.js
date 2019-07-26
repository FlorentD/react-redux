"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getFilms = exports.fetchFilms = exports.updateFilms = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _getFilmsAPI = require("../api/getFilmsAPI");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const NAME = 'FILM';
const UPDATE_FILMS = `${NAME}/UPDATE_FILMS`;
const initialState = {
  films: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILMS:
      return _objectSpread({}, state, {}, action.payload);

    default:
      return state;
  }
}

const updateFilms = films => ({
  type: UPDATE_FILMS,
  payload: {
    films
  }
});

exports.updateFilms = updateFilms;

const fetchFilms = () => async dispatch => {
  const films = await (0, _getFilmsAPI.getFilmsAPI)();
  dispatch(updateFilms(films));
};

exports.fetchFilms = fetchFilms;

const getFilms = state => state[NAME].films;

exports.getFilms = getFilms;
var _default = {
  [NAME]: reducer
};
exports.default = _default;