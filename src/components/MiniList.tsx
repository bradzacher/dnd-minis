import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useMemo } from 'react';
import { graphql, usePaginationFragment } from 'react-relay';

import { useRelayPagination } from '@/lib/relay/useRelayPagination';
import type { MiniList_minis$key } from '@/relay/MiniList_minis.graphql';

const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

type Props = Readonly<{
  minis: MiniList_minis$key;
}>;

export function MiniList(props: Props) {
  const { data, ...paginationProps } = usePaginationFragment(
    graphql`
      fragment MiniList_minis on Query
      @refetchable(queryName: "MininListMinisPaginationQuery") {
        minis(first: $count, after: $cursor, search: $search)
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

  const rows = useMemo(() => {
    return data.minis.edges.map(({ node: mini }) => (
      <TableRow key={mini.id}>
        <TableCell scope="row">{mini.name}</TableCell>
        <TableCell>{mini.size}</TableCell>
        <TableCell>{mini.type}</TableCell>
        <TableCell>{mini.subType}</TableCell>
      </TableRow>
    ));
  }, [data]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Minis">
        <TableHead>
          <TableRow>
            <HeaderTableCell>Mini Name</HeaderTableCell>
            <HeaderTableCell>Size</HeaderTableCell>
            <HeaderTableCell>Type</HeaderTableCell>
            <HeaderTableCell>Sub-Type</HeaderTableCell>
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
