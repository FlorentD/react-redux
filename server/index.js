import 'isomorphic-fetch';
import React from 'react';
import express from 'express';
import compression from 'compression';
import logger from './logger';
import { create } from './store';
import { renderFullPage } from './render';
import { handleFilm } from './handlers/handleFilms';
import Loadable from 'react-loadable';

const app = express();

app.use(compression());
app.use('/static', express.static(`${__dirname}/static`));
app.use('/image', express.static(`${__dirname}/image`));

app.get('/films', handleFilm);

app.get('*', (req, res) => {
  logger.info(req.url);
  if (req.url === '/robots.txt') {
    return res.status(300).sendFile(`${__dirname}/robots.txt`);
  }
  if (req.url === '/sw.js') {
    return res.status(200).sendFile(`${__dirname}/sw.js`);
  }
  if (req.url === '/404.html') {
    return res.status(404).sendFile(`${__dirname}/static/404.html`);
  }
  if (req.url === '/offline.html') {
    return res.status(503).sendFile(`${__dirname}/static/offline.html`);
  }
  const store = create();
  res.status(200).send(renderFullPage(req, store));
});

Loadable.preloadAll().then(() =>
  app.listen(process.env.PORT || 8080, () =>
    logger.info('App running on port 8080 o//')
  )
);
