import { ApolloClient } from 'apollo-boost';
import { ApolloLink } from 'apollo-link';
import { setContext } from "apollo-link-context";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-fetch';

const cache = new InMemoryCache();

export const client = new ApolloClient({
    cache,
    fetch,
    link: ApolloLink.from([
        setContext((req, prev) => {
          return ({
            headers: {
              ...prev.headers,
              "X-WP-Nonce": req.variables.nonce ? req.variables.nonce : '',
            },
          })
        }
        ),
        new HttpLink({
            uri: 'http://localhost:3030/graphql',
            credentials: 'include',
        }),
    ])
});
