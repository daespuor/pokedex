import { HttpLink, InMemoryCache, from, ApolloClient } from "@apollo/client";
import fetch from "isomorphic-fetch";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
  fetch,
});

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      const err = `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`;
      console.error(err);
    });
  }
  if (networkError) {
    const err = `[Network error]: ${operation.operationName} ${networkError}`;
    console.error(err);
  }
});

export const client = new ApolloClient({
  cache,
  link: from([errorLink, httpLink]),
});
