import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './menu';
import Main from './main';
import Why from './why';
import About from './about';
import NoMatch from './NoMatch';
import CheckConnection from './CheckConnection';
import LoadableFilms from './films/LoadableFilms';

let App = () => {
  return (
    <div className="p-2 bg-hero bg-center bg-cover bg-fixed bg-white text-black h-full">
      <Menu />
      <CheckConnection />
      <div className="container mx-auto">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/why">
            <Why />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/films">
            <LoadableFilms />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
