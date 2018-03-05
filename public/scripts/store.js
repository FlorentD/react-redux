import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './app/reducers';
import thunk from 'redux-thunk';
import logger from './middleware/logger';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

console.log(preloadedState);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
