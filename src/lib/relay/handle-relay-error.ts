import type {
  GraphQLResponse,
  GraphQLSingularResponse,
  RequestParameters,
  Variables,
} from 'relay-runtime';

export function handleRelayError(
  operation: RequestParameters,
  variables: Variables,
  responseJson: GraphQLResponse,
) {
  const responses: readonly GraphQLSingularResponse[] = Array.isArray(
    responseJson,
  )
    ? responseJson
    : [responseJson];
  for (const response of responses) {
    // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
    // property of the response. If any exceptions occurred when processing the request,
    // throw an error to indicate to the developer what went wrong.
    if ('errors' in response && response.errors) {
      console.error(response.errors);
      throw new Error(
        `Error fetching GraphQL query '${
          operation.name
        }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
          response.errors,
          null,
          2,
        )}`,
      );
    }
  }
}
