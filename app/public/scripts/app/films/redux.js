"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getFilms = exports.fetchFilms = exports.updateFilms = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _getFilmsAPI = require("../api/getFilmsAPI");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

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
const _default = {
  [NAME]: reducer
};
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NAME, "NAME", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js");
  reactHotLoader.register(UPDATE_FILMS, "UPDATE_FILMS", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js");
  reactHotLoader.register(initialState, "initialState", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js");
  reactHotLoader.register(reducer, "reducer", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js");
  reactHotLoader.register(updateFilms, "updateFilms", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js");
  reactHotLoader.register(fetchFilms, "fetchFilms", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js");
  reactHotLoader.register(getFilms, "getFilms", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/redux.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();