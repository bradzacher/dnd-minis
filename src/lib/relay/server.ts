import type {
  GraphQLResponse,
  RequestParameters,
  Variables,
} from 'relay-runtime';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import { handleRelayError } from './handle-relay-error';

export async function networkFetch(
  parameters: RequestParameters,
  variables: Variables,
): Promise<GraphQLResponse> {
  // intentional dynamic dep to prevent client-side dep
  const { default: graphqlApi, graphqlEndpoint } = await import(
    '@/api/graphql'
  );
  const response = await graphqlApi.fetch(graphqlEndpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: parameters.text, // GraphQL text from input
      variables,
    }),
  });
  const responseJson = (await response.json()) as GraphQLResponse;

  handleRelayError(parameters, variables, responseJson);

  return responseJson;
}

const network = Network.create(networkFetch);

const store = new Store(RecordSource.create());

export const getServerEnvironment = () =>
  new Environment({
    network,
    store,
    isServer: true,
  });
