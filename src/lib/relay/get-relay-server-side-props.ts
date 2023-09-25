import type { ParsedUrlQuery } from 'node:querystring';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next/types';
import type { GraphQLTaggedNode, OperationType } from 'relay-runtime';
import { getRequest } from 'relay-runtime';

import type { SerializablePreloadedQuery } from './load-serializable-query';
import { loadSerializableQuery } from './load-serializable-query';

export function getRelayServerSideProps<
  TQuery extends OperationType,
  TParams extends ParsedUrlQuery = ParsedUrlQuery,
>(
  gqlQuery: GraphQLTaggedNode,
  getVariables: (
    ctx: GetServerSidePropsContext<TParams>,
  ) => TQuery['variables'] = () => ({}),
): GetServerSideProps<
  { preloadedQuery: SerializablePreloadedQuery<TQuery> },
  TParams
> {
  return async ctx => {
    console.log(getVariables(ctx));
    const preloadedQuery = await loadSerializableQuery<TQuery>(
      getRequest(gqlQuery).params,
      getVariables(ctx),
    );
    return {
      props: {
        preloadedQuery,
      },
    };
  };
}
