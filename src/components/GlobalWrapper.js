import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../graphql-client";
import { Auth0Provider } from "@auth0/auth0-react";

export const wrapRootElement = ({ element }) => (
  <Auth0Provider
    domain={process.env.GATSBY_AUTH0_DOMAIN}
    clientId={process.env.GATSBY_AUTH0_CLIENT_ID}
    redirectUri={process.env.GATSBY_AUTH0_REDIRECT_URL}
  >
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </Auth0Provider>
);
