import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
import Menu from './menu';
import Main from './main';
import Why from './why';
import About from './about';
import NoMatch from './NoMatch';
import CheckConnection from './CheckConnection';
import LoadableFilms from './films/LoadableFilms';
import { Layout } from './components';

let App = () => {
  return (
    <Layout>
      <Layout.Menu>
        <Menu />
      </Layout.Menu>
      <CheckConnection />
      <Layout.Body>
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
          <Route
            path="/lazy"
            render={() => {
              const Lazy = loadable(() => import('./lazy'));
              return <Lazy />;
            }}
          />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Layout.Body>
    </Layout>
  );
};

export default App;
