import type {
  GraphQLResponse,
  RequestParameters,
  Variables,
} from 'relay-runtime';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import { handleRelayError } from './handle-relay-error';
import { responseCache } from './response-cache';

export async function networkFetch(
  parameters: RequestParameters,
  variables: Variables,
): Promise<GraphQLResponse> {
  const rawResponse = await fetch('/api/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: parameters.text,
      variables,
    }),
  });
  const responseJson = (await rawResponse.json()) as GraphQLResponse;

  handleRelayError(parameters, variables, responseJson);

  return responseJson;
}

const network = Network.create((parameters, variables, cacheConfig) => {
  const isQuery = parameters.operationKind === 'query';
  const cacheKey = parameters.id ?? parameters.cacheID;
  const forceFetch = cacheConfig.force;
  if (responseCache != null && isQuery && !forceFetch) {
    const fromCache = responseCache.get(cacheKey, variables);
    if (fromCache != null) {
      return Promise.resolve(fromCache);
    }
  }

  return networkFetch(parameters, variables);
});

const store = new Store(RecordSource.create());

let clientEnvironment: Environment | null = null;
export const getClientEnvironment = () => {
  return (clientEnvironment ??= new Environment({
    network,
    store,
    requiredFieldLogger: (event) => {
      switch (event.kind) {
        case 'missing_field.log': {
          console.log(event);
          break;
        }

        case 'missing_field.throw': {
          throw new Error(`Missing required field: ${event.fieldPath}`);
        }

        case 'relay_resolver.error': {
          throw new Error(`Missing required field: ${event.fieldPath}`, {
            cause: event.error,
          });
        }
      }
    },
    isServer: false,
  }));
};
