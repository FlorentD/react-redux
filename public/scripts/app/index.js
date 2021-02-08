import React from 'react';
import loadable from '@loadable/component';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Menu from './menu';
import Main from './main';
import Why from './why';
import About from './about';
import NoMatch from './NoMatch';
import CheckConnection from './CheckConnection';
import LoadableFilms from './films/LoadableFilms';

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color:#f0efef;
    --primary-color: #000;
  }
  
  html.dark {
    --background-color:#000;
    --primary-color: #f0efef;
  }

  html.theming, 
  html.theming * {
    transition: all 0.2s linear;
  }
  
html, body, #body {
  height: 100%;
}

ul {
  list-style: none;
}

a {
  color: var(--primary-color);
  &:visited {
    color: blue;
  }
}
`;

const Layout = styled.div`
  padding: 10px;
  background-image: url('/image/background.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  color: var(--primary-color);
  height: 100%;
`;

let App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Menu />
      <CheckConnection />
      <div>
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
      </div>
      <button
        onClick={() => {
          document.documentElement.classList.add('theming');
          document.documentElement.addEventListener(
            'transitionend',
            () => document.documentElement.classList.remove('theming'),
            { once: true }
          );
          document.documentElement.classList.toggle('dark');
        }}
      >
        Switch theme
      </button>
    </Layout>
  );
};

export default App;
