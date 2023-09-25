import { createYoga } from 'graphql-yoga';

import { schema } from '@/lib/pothos';

// While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
export const graphqlEndpoint = '/api/graphql';

const yoga = createYoga({
  schema,
  graphiql: {},

  graphqlEndpoint,

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
});
const handleRequest = yoga.handleRequest;

export default yoga;
export { handleRequest as GET, handleRequest as POST };
