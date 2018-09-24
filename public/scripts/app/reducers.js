import { combineReducers } from 'redux';
import menu from './menu/redux';
import films from './films/redux';
import editor from './main/redux';

export default combineReducers({ ...menu, ...films, ...editor });
