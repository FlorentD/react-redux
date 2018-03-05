import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Menu from './menu';
import Main from './main';
import Why from './why';
import About from './about';
import NoMatch from './NoMatch';
import Films from './films/Films';

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/why" component={Why} />
        <Route path="/about" component={About} />
        <Route path="/films" component={Films} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default hot(module)(App);
