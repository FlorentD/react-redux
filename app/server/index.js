"use strict";

var _push = require("./push");

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _apolloServerExpress = require("apollo-server-express");

var _apollo = require("./apollo");

var _compression = _interopRequireDefault(require("compression"));

var _logger = _interopRequireDefault(require("./logger"));

var _render = require("./render");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const server = new _apolloServerExpress.ApolloServer({
  typeDefs: _apollo.typeDefs,
  resolvers: _apollo.resolvers,
  uploads: false
});
server.start().then(() => {
  server.applyMiddleware({
    app
  });
});
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.use((0, _compression.default)());
app.use('/static', _express.default.static(`${__dirname}/static`));
app.use('/image', _express.default.static(`${__dirname}/image`));
app.post('/api', function (req, res) {
  res.redirect(307, '/graphql');
});
app.get('/vapidPublicKey', (req, res) => res.send(_push.publicKey));
app.post('/sendNotification', (req, res) => {
  const subscription = req.body.subscription;
  (0, _push.sendNotification)(subscription).then(function () {
    res.sendStatus(201);
  }).catch(function (error) {
    res.sendStatus(500);
    console.log(error);
  });
});
app.get('*', (req, res) => {
  _logger.default.info(req.url);

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
    return res.status(200).sendFile(`${__dirname}/static/google4ced536c6d2b891f.html`);
  }

  if (req.url.includes('/workbox-') || req.url.includes('/.js.map')) {
    return res.status(200).sendFile(`${__dirname}/static/${req.url}`);
  }

  (0, _render.renderFullPage)(req).then(result => res.status(200).send(result));
});
app.listen(process.env.PORT || 8080, () => _logger.default.info('App running on port 8080 o//'));