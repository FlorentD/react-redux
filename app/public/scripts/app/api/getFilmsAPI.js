"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilmsAPI = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dexie = _interopRequireDefault(require("dexie"));

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

var db = new _dexie.default('reactredux-fr-db');
db.version(1).stores({
  films: '++id,title,image'
});

var getFilmsAPI = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var localFilms, response, films;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.films.toArray();

          case 2:
            localFilms = _context.sent;

            if (navigator.onLine) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", localFilms);

          case 7:
            if (!(0, _isEmpty.default)(localFilms)) {
              _context.next = 19;
              break;
            }

            _context.next = 10;
            return fetch('https://startmeup.herokuapp.com/api/movies');

          case 10:
            response = _context.sent;
            _context.next = 13;
            return response.json();

          case 13:
            films = _context.sent;
            _context.next = 16;
            return db.films.bulkPut(films);

          case 16:
            return _context.abrupt("return", films);

          case 19:
            fetch('https://startmeup.herokuapp.com/api/movies').then(function (response) {
              return response.json();
            }).then(function (films) {
              return db.films.bulkPut(films);
            });

          case 20:
            return _context.abrupt("return", localFilms);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getFilmsAPI() {
    return _ref.apply(this, arguments);
  };
}();

exports.getFilmsAPI = getFilmsAPI;