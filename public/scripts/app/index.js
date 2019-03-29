import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Menu from './menu';
import Main from './main';
import Why from './why';
import About from './about';
import NoMatch from './NoMatch';
import Films from './films/Films';

const Container = styled.div`
  padding: 10px;
  background-color: #f0efef;
  color: black;
`;

const App = () => {
  return (
    <Container>
      <Menu />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/why" component={Why} />
        <Route path="/about" component={About} />
        <Route path="/films" component={Films} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  );
};

export default hot(App);
