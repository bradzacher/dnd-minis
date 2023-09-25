import type {
  OperationType,
  RequestParameters,
  VariablesOf,
} from 'relay-runtime';
import type { ConcreteRequest } from 'relay-runtime/lib/util/RelayConcreteNode';

import { networkFetch } from './network-fetch';

export interface SerializablePreloadedQuery<TQuery extends OperationType> {
  params: ConcreteRequest['params'];
  variables: VariablesOf<TQuery>;
  response: TQuery['response'];
}

// Call into raw network fetch to get serializable GraphQL query response
// This response will be sent to the client to "warm" the QueryResponseCache
// to avoid the client fetches.
export async function loadSerializableQuery<TQuery extends OperationType>(
  parameters: RequestParameters,
  variables: VariablesOf<TQuery>,
): Promise<SerializablePreloadedQuery<TQuery>> {
  const response = await networkFetch(parameters, variables);
  return {
    params: parameters,
    variables,
    response,
  };
}
