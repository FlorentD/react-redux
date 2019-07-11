import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Menu from './menu';
import Main from './main';
import Why from './why';
import About from './about';
import NoMatch from './NoMatch';
import LoadableFilms from './films/LoadableFilms';

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

const Container = styled.div`
  padding: 10px;
  background-color: #f0efef;
  color: black;
`;

let App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Menu />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/why" component={Why} />
        <Route path="/about" component={About} />
        <Route path="/films" component={LoadableFilms} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  );
};

if (process.env.NODE_ENV !== 'production') {
  const { hot } = require('react-hot-loader/root');
  App = hot(App);
}

export default App;
