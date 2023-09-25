import type { RequestParameters, Variables } from 'relay-runtime';

import * as client from './client';
import { IS_SERVER } from './is-server';
import * as server from './server';

export async function networkFetch(
  operation: RequestParameters,
  variables: Variables,
) {
  if (IS_SERVER) {
    return server.networkFetch(operation, variables);
  }
  return client.networkFetch(operation, variables);
}
