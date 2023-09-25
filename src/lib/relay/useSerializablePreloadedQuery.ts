// Convert preloaded query object (with raw GraphQL Response) into Relay's PreloadedQuery.

import { useMemo } from 'react';
import type { PreloadedQuery, PreloadFetchPolicy } from 'react-relay';
import { usePreloadedQuery, useRelayEnvironment } from 'react-relay';
import type {
  GraphQLResponse,
  GraphQLTaggedNode,
  OperationType,
} from 'relay-runtime';

import type { SerializablePreloadedQuery } from './load-serializable-query';
import { responseCache } from './response-cache';

// This hook convert serializable preloaded query
// into Relay's PreloadedQuery object.
// It is also writes this serializable preloaded query
// into QueryResponseCache, so we the network layer
// can use these cache results when fetching data
// in `usePreloadedQuery`.
export function useSerializablePreloadedQuery<TQuery extends OperationType>(
  gqlQuery: GraphQLTaggedNode,
  preloadQuery: SerializablePreloadedQuery<TQuery>,
  fetchPolicy: PreloadFetchPolicy = 'store-or-network',
): TQuery['response'] {
  const environment = useRelayEnvironment();

  useMemo(() => {
    writePreloadedQueryToCache(preloadQuery);
  }, [preloadQuery]);

  const queryReference: PreloadedQuery<TQuery> = {
    environment,
    fetchKey: preloadQuery.params.id ?? preloadQuery.params.cacheID,
    fetchPolicy,
    isDisposed: false,
    name: preloadQuery.params.name,
    kind: 'PreloadedQuery',
    variables: preloadQuery.variables,
    dispose: () => {
      return;
    },
  };

  return usePreloadedQuery(gqlQuery, queryReference);
}

function writePreloadedQueryToCache<TQuery extends OperationType>(
  preloadedQueryObject: SerializablePreloadedQuery<TQuery>,
) {
  const cacheKey =
    preloadedQueryObject.params.id ?? preloadedQueryObject.params.cacheID;
  responseCache?.set(
    cacheKey,
    preloadedQueryObject.variables,
    preloadedQueryObject.response as GraphQLResponse,
  );
}
