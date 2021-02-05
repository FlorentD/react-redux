import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: '/api',
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});
