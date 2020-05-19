"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("isomorphic-fetch");

var _push = require("./push");

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _compression = _interopRequireDefault(require("compression"));

var _logger = _interopRequireDefault(require("./logger"));

var _store = require("./store");

var _render = require("./render");

var _handleFilms = require("./handlers/handleFilms");

var app = (0, _express.default)();
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.use((0, _compression.default)());
app.use("/static", _express.default.static("".concat(__dirname, "/static")));
app.use("/image", _express.default.static("".concat(__dirname, "/image")));
app.get("/films", _handleFilms.handleFilm);
app.get("/vapidPublicKey", function (req, res) {
  return res.send(_push.publicKey);
});
app.post("/sendNotification", function (req, res) {
  var subscription = req.body.subscription;
  (0, _push.sendNotification)(subscription).then(function () {
    res.sendStatus(201);
  }).catch(function (error) {
    res.sendStatus(500);
    console.log(error);
  });
});
app.get("*", function (req, res) {
  _logger.default.info(req.url);

  if (req.url === "/robots.txt") {
    return res.status(300).sendFile("".concat(__dirname, "/robots.txt"));
  }

  if (req.url === "/sw.js") {
    return res.status(200).sendFile("".concat(__dirname, "/sw.js"));
  }

  if (req.url === "/favicon.ico") {
    return res.status(200).sendFile("".concat(__dirname, "/favicon.ico"));
  }

  if (req.url === "/404.html") {
    return res.status(200).sendFile("".concat(__dirname, "/static/404.html"));
  }

  if (req.url === "/offline.html") {
    return res.status(200).sendFile("".concat(__dirname, "/static/offline.html"));
  }

  var store = (0, _store.create)();
  res.status(200).send((0, _render.renderFullPage)(req, store));
});
app.listen(process.env.PORT || 8080, function () {
  return _logger.default.info("App running on port 8080 o//");
});