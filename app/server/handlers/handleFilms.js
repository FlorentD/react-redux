"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _store = require("../store");

var _render = require("../render");

var _redux = require("../../public/scripts/app/films/redux");

var handleFilm = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var store;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = (0, _store.create)();
            _context.next = 3;
            return (0, _redux.fetchFilms)()(store.dispatch);

          case 3:
            res.status(200).send((0, _render.renderFullPage)(req, store));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleFilm(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.handleFilm = handleFilm;