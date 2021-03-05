"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.resolvers = exports.typeDefs = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

var typeDefs = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  type Film {\n    id: ID!\n    image: String\n    title: String\n  }\n\n  type Query {\n    films: [Film]\n  }\n"])));
exports.typeDefs = typeDefs;
var resolvers = {
  Query: {
    films: function films() {
      return [{
        id: '1',
        image: 'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        title: 'Braveheart'
      }];
    }
  }
};
exports.resolvers = resolvers;
var _default = {
  typeDefs: typeDefs,
  resolvers: resolvers
};
exports.default = _default;