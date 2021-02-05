"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _client = require("@apollo/client");

var client = new _client.ApolloClient({
  uri: '/api',
  cache: new _client.InMemoryCache().restore(window.__APOLLO_STATE__)
});
exports.client = client;