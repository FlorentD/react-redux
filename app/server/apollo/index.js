"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.resolvers = exports.typeDefs = void 0;

var _apolloServerExpress = require("apollo-server-express");

const typeDefs = (0, _apolloServerExpress.gql)`
  type Film {
    id: ID!
    image: String
    title: String
  }

  type Query {
    films: [Film]
  }
`;
exports.typeDefs = typeDefs;
const resolvers = {
  Query: {
    films: () => [{
      id: '1',
      image: 'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      title: 'Braveheart'
    }]
  }
};
exports.resolvers = resolvers;
var _default = {
  typeDefs,
  resolvers
};
exports.default = _default;