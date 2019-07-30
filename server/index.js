import 'isomorphic-fetch';
import { sendNotification, publicKey } from './push';
import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import logger from './logger';
import { create } from './store';
import { renderFullPage } from './render';
import { handleFilm } from './handlers/handleFilms';
import Loadable from 'react-loadable';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use('/static', express.static(`${__dirname}/static`));
app.use('/image', express.static(`${__dirname}/image`));

app.get('/films', handleFilm);
app.get('/vapidPublicKey', (req, res) => res.send(publicKey));

app.post('/sendNotification', (req, res) => {
  const subscription = req.body.subscription;
  sendNotification(subscription)
    .then(function() {
      res.sendStatus(201);
    })
    .catch(function(error) {
      res.sendStatus(500);
      console.log(error);
    });
});

app.get('*', (req, res) => {
  logger.info(req.url);
  if (req.url === '/robots.txt') {
    return res.status(300).sendFile(`${__dirname}/robots.txt`);
  }
  if (req.url === '/sw.js') {
    return res.status(200).sendFile(`${__dirname}/sw.js`);
  }
  if (req.url === '/favicon.ico') {
    return res.status(200).sendFile(`${__dirname}/favicon.ico`);
  }
  if (req.url === '/404.html') {
    return res.status(200).sendFile(`${__dirname}/static/404.html`);
  }
  if (req.url === '/offline.html') {
    return res.status(200).sendFile(`${__dirname}/static/offline.html`);
  }
  const store = create();
  res.status(200).send(renderFullPage(req, store));
});

Loadable.preloadAll().then(() =>
  app.listen(process.env.PORT || 8080, () =>
    logger.info('App running on port 8080 o//')
  )
);
