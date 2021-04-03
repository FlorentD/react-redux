import { sendNotification, publicKey } from './push';
import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './apollo';
import compression from 'compression';
import logger from './logger';
import { renderFullPage } from './render';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers, uploads: false });
server.applyMiddleware({ app });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use('/static', express.static(`${__dirname}/static`));
app.use('/image', express.static(`${__dirname}/image`));

app.post('/api', function (req, res) {
  res.redirect(307, '/graphql');
});

app.get('/vapidPublicKey', (req, res) => res.send(publicKey));

app.post('/sendNotification', (req, res) => {
  const subscription = req.body.subscription;
  sendNotification(subscription)
    .then(function () {
      res.sendStatus(201);
    })
    .catch(function (error) {
      res.sendStatus(500);
      console.log(error);
    });
});

app.get('*', (req, res) => {
  logger.info(req.url);
  if (req.url === '/robots.txt') {
    return res.status(300).sendFile(`${__dirname}/robots.txt`);
  }
  if (req.url === '/manifest.json') {
    return res.status(300).sendFile(`${__dirname}/manifest.json`);
  }
  if (req.url === '/service-worker.js') {
    return res.status(200).sendFile(`${__dirname}/static/service-worker.js`);
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
  if (req.url === '/google4ced536c6d2b891f.html') {
    return res
      .status(200)
      .sendFile(`${__dirname}/static/google4ced536c6d2b891f.html`);
  }
  if (req.url.includes('/workbox-') || req.url.includes('/.js.map')) {
    return res.status(200).sendFile(`${__dirname}/static/${req.url}`);
  }
  renderFullPage(req).then((result) => res.status(200).send(result));
});

app.listen(process.env.PORT || 8080, () =>
  logger.info('App running on port 8080 o//')
);
