import { TableSortLabel } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type { MouseEvent } from 'react';
import { useCallback, useMemo } from 'react';
import { graphql, usePaginationFragment } from 'react-relay';

import { useRelayPagination } from '@/lib/relay/useRelayPagination';
import type { MiniList_minis$key } from '@/relay/MiniList_minis.graphql';

const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

export type TableSortColumn = 'name' | 'size' | 'subType' | 'type';
export type TableSort = Readonly<{
  column: TableSortColumn;
  direction: 'asc' | 'desc';
}>;

type Props = Readonly<{
  minis: MiniList_minis$key;
  onChangeTableSort: (sort: TableSortColumn) => void;
  tableSort: TableSort;
}>;

export function MiniList({ onChangeTableSort, tableSort, ...props }: Props) {
  const { data, ...paginationProps } = usePaginationFragment(
    graphql`
      fragment MiniList_minis on Query
      @refetchable(queryName: "MininListMinisPaginationQuery") {
        minis(first: $count, after: $cursor, search: $search, sort: $sort)
          @connection(key: "MiniList_query_minis") {
          edges {
            node {
              id
              name
              size
              subType
              type
            }
          }
        }
      }
    `,
    props.minis,
  );
  const loadMoreTrigger = useRelayPagination(paginationProps);

  const onClickTableSort = useCallback(
    (evt: MouseEvent<HTMLElement>) => {
      const column = evt.currentTarget.dataset[
        'sortKey'
      ] as TableSort['column'];
      onChangeTableSort(column);
    },
    [onChangeTableSort],
  );

  const rows = useMemo(() => {
    return data.minis.edges.map(({ node: mini }) => (
      <TableRow key={mini.id}>
        <TableCell scope="row">{mini.name}</TableCell>
        <TableCell>{mini.size.charAt(0)}</TableCell>
        <TableCell>
          {mini.type}
          {mini.subType != null ? ` (${mini.subType})` : null}
        </TableCell>
      </TableRow>
    ));
  }, [data]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Minis">
        <TableHead>
          <TableRow>
            <HeaderTableCell>
              <TableSortLabel
                data-sort-key="name"
                active={tableSort.column === 'name'}
                direction={tableSort.direction}
                onClick={onClickTableSort}>
                Name
              </TableSortLabel>
            </HeaderTableCell>
            <HeaderTableCell>&nbsp;</HeaderTableCell>
            <HeaderTableCell>
              <TableSortLabel
                data-sort-key="type"
                active={tableSort.column === 'type'}
                direction={tableSort.direction}
                onClick={onClickTableSort}>
                Type
              </TableSortLabel>
            </HeaderTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
          {loadMoreTrigger}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
