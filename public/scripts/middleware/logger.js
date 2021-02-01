/* eslint no-console:0 */
import isFunction from 'lodash/isFunction';

const logger = (store) => (next) => (action) => {
  if (isFunction(action)) {
    console.info(
      ['%c', 'call ', action.name.slice(1), '()'].join(''),
      'font-weight:bold;'
    );
  } else {
    console.group(action.type);
    console.info('dispatching', action);
  }
  const result = next(action);
  if (!isFunction(action)) {
    console.info('next state', store.getState());
    console.groupEnd(action.type);
  }
  return result;
};

export default logger;
