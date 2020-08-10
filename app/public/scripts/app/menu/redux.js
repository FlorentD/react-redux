"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getMenu = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var NAME = 'MENU';
var initialState = {
  menu: [{
    id: 'item1',
    label: 'Main',
    link: ''
  }, {
    id: 'item2',
    label: 'Why',
    link: 'why'
  }, {
    id: 'item3',
    label: 'About',
    link: 'about'
  }, {
    id: 'item4',
    label: 'NoMatch',
    link: 'nomatch'
  }, {
    id: 'item5',
    label: 'Filmz',
    link: 'films'
  }]
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  switch (state.type) {
    default:
      return state;
  }
}

var getMenu = function getMenu(state) {
  return state[NAME].menu;
};

exports.getMenu = getMenu;

var _default = (0, _defineProperty2["default"])({}, NAME, reducer);

exports["default"] = _default;