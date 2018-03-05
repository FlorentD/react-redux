import './app.css';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/index';
import store from './store';
import { Provider } from 'react-redux';

hydrate(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('body')
);
