"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reduxReactHook = require("redux-react-hook");

var _reactRouter = require("react-router");

var _redux = require("./redux");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const FilmsRequest = ({
  children,
  staticContext
}) => {
  const dispatch = (0, _reduxReactHook.useDispatch)();
  (0, _react.useEffect)(() => {
    if (!staticContext || !staticContext.fromServer) dispatch((0, _redux.fetchFilms)());
  }, []);
  return children((0, _reduxReactHook.useMappedState)(_redux.getFilms));
};

__signature__(FilmsRequest, "useDispatch{dispatch}\nuseEffect{}\nuseMappedState{}", () => [_reduxReactHook.useDispatch, _reduxReactHook.useMappedState]);

const _default = (0, _reactRouter.withRouter)(FilmsRequest);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FilmsRequest, "FilmsRequest", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js");
  reactHotLoader.register(_default, "default", "/Users/florentduveau/WebstormProjects/react-redux/public/scripts/app/films/FilmsRequest.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();