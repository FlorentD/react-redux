"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getMenu = void 0;

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const NAME = 'MENU';
const initialState = {
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
    label: 'Films',
    link: 'films'
  }]
};

function reducer(state = initialState) {
  switch (state.type) {
    default:
      return state;
  }
}

const getMenu = state => state[NAME].menu;

exports.getMenu = getMenu;
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

  reactHotLoader.register(NAME, "NAME", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js");
  reactHotLoader.register(initialState, "initialState", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js");
  reactHotLoader.register(reducer, "reducer", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js");
  reactHotLoader.register(getMenu, "getMenu", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/menu/redux.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();