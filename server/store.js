import { applyMiddleware, createStore } from 'redux';
import reducers from '../public/scripts/app/reducers';
import thunk from 'redux-thunk';

export const create = () => createStore(reducers, applyMiddleware(thunk));
