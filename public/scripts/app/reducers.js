import { combineReducers } from 'redux';
import menu from './menu/redux';
import films from './films/redux';

export default combineReducers({ ...menu, ...films });
