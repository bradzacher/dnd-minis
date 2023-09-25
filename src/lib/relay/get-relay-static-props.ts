import type { GraphQLTaggedNode, OperationType } from 'relay-runtime';
import { getRequest } from 'relay-runtime';

import { loadSerializableQuery } from './load-serializable-query';

export function getRelayStaticProp<TQuery extends OperationType>(
  gqlQuery: GraphQLTaggedNode,
) {
  return async () => {
    const preloadedQuery = await loadSerializableQuery<TQuery>(
      getRequest(gqlQuery).params,
      {},
    );
    return {
      props: { preloadedQuery },
    };
  };
}
