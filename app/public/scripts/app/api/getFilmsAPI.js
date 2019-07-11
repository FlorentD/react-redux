"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilmsAPI = void 0;

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const getFilmsAPI = async () => {
  const response = await fetch('https://startmeup.herokuapp.com/api/movies');
  return await response.json();
};

exports.getFilmsAPI = getFilmsAPI;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getFilmsAPI, "getFilmsAPI", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/api/getFilmsAPI.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();