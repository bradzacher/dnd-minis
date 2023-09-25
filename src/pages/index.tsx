import type { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { graphql } from 'react-relay';

import { useSerializablePreloadedQuery } from '@/lib/relay/useSerializablePreloadedQuery';
import type { pages_HomeQuery } from '@/relay/pages_HomeQuery.graphql';

import { MiniList } from '../components/MiniList';
import { getRelayServerSideProps } from '../lib/relay/get-relay-server-side-props';

const HomeQuery = graphql`
  query pages_HomeQuery($count: Int, $cursor: String, $search: String) {
    ...MiniList_minis
  }
`;

export default function Home({
  preloadedQuery,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [searchText, setSearchText] = useState(
    (router.query.search ?? '') as string,
  );

  const query = useSerializablePreloadedQuery(HomeQuery, preloadedQuery);
  const onChangeSearch = useCallback<NonNullable<TextFieldProps['onChange']>>(
    event => {
      const newSearch = event.target.value;
      if (router.query.search !== newSearch) {
        router.query.search = newSearch;
        setSearchText(newSearch);
        void router.replace(router);
      }
    },
    [router],
  );

  return (
    <div>
      <Typography variant="h2">Minis</Typography>
      <TextField
        key="search-text-field"
        label="Search"
        variant="outlined"
        fullWidth={true}
        sx={{ marginBottom: '8px' }}
        onChange={onChangeSearch}
        value={searchText}
      />
      <MiniList minis={query} />
    </div>
  );
}

export const getServerSideProps = getRelayServerSideProps<pages_HomeQuery>(
  HomeQuery,
  ctx => {
    return {
      search: ctx.query.search?.toString() ?? null,
    };
  },
);
