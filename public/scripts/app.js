import React from 'react';
import { hydrate } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { StoreContext } from 'redux-react-hook';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/index';
import store from './store';

const GlobalStyle = createGlobalStyle`
ul {
  list-style: none;
}

a {
  color: rgb(0, 0, 0);
  &:visited {
    color: blue;
  }
}
`;

hydrate(
  <Router>
    <GlobalStyle />
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </Router>,
  document.getElementById('body')
);
