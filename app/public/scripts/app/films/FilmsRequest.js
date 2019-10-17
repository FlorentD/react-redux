"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _redux = require("./redux");

const FilmsRequest = ({
  children,
  staticContext
}) => {
  const dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(() => {
    if (!staticContext || !staticContext.fromServer) dispatch((0, _redux.fetchFilms)());
  }, []);
  return children((0, _reactRedux.useSelector)(_redux.getFilms));
};

var _default = (0, _reactRouter.withRouter)(FilmsRequest);

exports.default = _default;