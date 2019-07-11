import React from 'react';
import { hydrate } from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/index';
import store from './store';
import JmyJSON from './test.json'

console.log(JmyJSON);

hydrate(
  <Router>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </Router>,
  document.getElementById('body')
);
