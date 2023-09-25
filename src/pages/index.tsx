import type { InferGetStaticPropsType } from 'next';
import { graphql } from 'react-relay';

import { useSerializablePreloadedQuery } from '@/lib/relay/use-serializable-preloaded-query';
import type { pages_HomeQuery } from '@/relay/pages_HomeQuery.graphql';

import { getRelayStaticProp } from '../lib/relay/get-relay-static-props';

const HomeQuery = graphql`
  query pages_HomeQuery {
    minis {
      edges {
        node {
          id
          name
          size
        }
      }
    }
  }
`;

export default function Home({
  preloadedQuery,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const query = useSerializablePreloadedQuery(HomeQuery, preloadedQuery);

  return (
    <div>
      <h1>SQLite3 in Next.js application</h1>
      <pre>
        {query.minis.edges.map((edge) => (
          <div key={edge.node.id}>
            {edge.node.name} - {edge.node.size}
          </div>
        ))}
      </pre>
    </div>
  );
}

export const getStaticProps = getRelayStaticProp<pages_HomeQuery>(HomeQuery);
