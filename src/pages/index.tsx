import type { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { graphql } from 'react-relay';

import { useSerializablePreloadedQuery } from '@/lib/relay/useSerializablePreloadedQuery';
import type {
  MiniSort,
  pages_HomeQuery,
} from '@/relay/pages_HomeQuery.graphql';

import type { TableSort, TableSortColumn } from '../components/MiniList';
import { MiniList } from '../components/MiniList';
import { getRelayServerSideProps } from '../lib/relay/get-relay-server-side-props';

const HomeQuery = graphql`
  query pages_HomeQuery(
    $count: Int
    $cursor: String
    $search: String
    $sort: MiniSort
  ) {
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
      setSearchText(() => {
        const newSearch = event.target.value;
        if (router.query.search !== newSearch) {
          router.query.search = newSearch;
          void router.replace({ query: { ...router.query } });
        }
        return newSearch;
      });
    },
    [router],
  );
  const [tableSort, setTableSort] = useState<TableSort>(() => {
    const defaultValue = {
      column: 'name',
      direction: 'asc',
    };
    return {
      column: router.query.sortColumn ?? defaultValue.column,
      direction: router.query.sortDirection ?? defaultValue.direction,
    } as TableSort;
  });
  const onChangeTableSort = useCallback(
    (column: TableSortColumn) => {
      setTableSort(tableSort => {
        const newTableSort: TableSort =
          tableSort.column === column
            ? {
                column,
                direction: tableSort.direction === 'asc' ? 'desc' : 'asc',
              }
            : {
                column,
                direction: 'asc',
              };

        let hasChanges = false;
        if (router.query.sortColumn !== newTableSort.column) {
          router.query.sortColumn = newTableSort.column;
          hasChanges = true;
        }
        if (router.query.sortDirection !== newTableSort.direction) {
          router.query.sortDirection = newTableSort.direction;
          hasChanges = true;
        }
        if (hasChanges) {
          void router.replace({ query: { ...router.query } });
        }

        return newTableSort;
      });
    },
    [router],
  );

  return (
    <div>
      <Head>
        <title>Brad's D&D Minis</title>
      </Head>
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
      <MiniList
        minis={query}
        onChangeTableSort={onChangeTableSort}
        tableSort={tableSort}
      />
    </div>
  );
}

export const getServerSideProps = getRelayServerSideProps<pages_HomeQuery>(
  HomeQuery,
  ctx => {
    return {
      search: ctx.query.search?.toString() ?? null,
      sort: {
        column: ctx.query.sortColumn?.toString() ?? null,
        direction: ctx.query.sortDirection?.toString() ?? null,
      } as MiniSort,
    };
  },
);
