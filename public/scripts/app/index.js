import React from 'react';
import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';
import Menu from './menu';
import Main from './main';
import Why from './why';
import About from './about';
import NoMatch from './NoMatch';
import CheckConnection from './CheckConnection';
import Films from './films/Films';
import { Layout } from './components';

const Lazy = loadable(() => import('./lazy'));

let App = () => {
  return (
    <Layout>
      <Layout.Menu>
        <Menu />
      </Layout.Menu>
      <CheckConnection />
      <Layout.Body>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="why" element={<Why />} />
          <Route path="about" element={<About />} />
          <Route path="films" element={<Films />} />
          <Route path="lazy" element={<Lazy />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout.Body>
    </Layout>
  );
};

export default App;
