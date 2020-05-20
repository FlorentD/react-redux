import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Menu from "./menu";
import Main from "./main";
import Why from "./why";
import About from "./about";
import NoMatch from "./NoMatch";
import CheckConnection from "./CheckConnection";
import LoadableFilms from "./films/LoadableFilms";
import Graph, { MyResponsiveBar } from "./Graph";

const GlobalStyle = createGlobalStyle`
html, body, #body {
  height: 100%;
}

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

const Layout = styled.div`
  padding: 10px;
  background-image: url("/image/background.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-color: #f0efef;
  color: black;
  height: 100%;
`;

let App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Menu />
      <Graph />
      <MyResponsiveBar />
      <CheckConnection />
      <Container>
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
      </Container>
    </Layout>
  );
};

if (process.env.NODE_ENV !== "production") {
  const { hot } = require("react-hot-loader/root");
  App = hot(App);
}

export default App;
