import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Menu from './menu';
import Main from './main';
import Why from './why';
import About from './about';
import NoMatch from './NoMatch';
import CheckConnection from './CheckConnection';
import LoadableFilms from './films/LoadableFilms';

const GlobalStyle = createGlobalStyle`
html, body, #body {
  height: 100%;
}

ul {
  list-style: none;
}

a {
  color: ${({ theme }) => theme.color};
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
  color: ${({ theme }) => theme.color};
  height: 100%;
`;

const lightTheme = {
  bgColor: '#f0efef',
  color: '#000',
};

const darkTheme = {
  color: '#f0efef',
  bgColor: '#000',
};

let App = () => {
  const [isLight, setTheme] = useState(true);
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
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
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
        <button onClick={() => setTheme(!isLight)}>Switch theme</button>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
