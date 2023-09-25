/* eslint-disable react-hooks/rules-of-hooks */

import type { JSX } from 'react';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import type { LoadMoreFn } from 'react-relay';
import type { OperationType } from 'relay-runtime';

type PaginationProps = {
  hasNext: boolean;
  isLoadingNext: boolean;
  loadNext: LoadMoreFn<OperationType>;
};

const PAGE_SIZE = 25;

export function useRelayPagination(
  paginationProps: PaginationProps,
): JSX.Element {
  // using refs here to ensure we don't reconstruct the layout effect or observer ever
  const paginationPropsRef = useRef(paginationProps);
  paginationPropsRef.current = paginationProps;

  const { ref } = useInView({
    threshold: 0,
    onChange: inView => {
      if (
        inView &&
        !paginationPropsRef.current.isLoadingNext &&
        paginationPropsRef.current.hasNext
      ) {
        paginationPropsRef.current.loadNext(PAGE_SIZE);
      }
    },
  });

  const loadMoreTrigger = (
    <tr key="load-more-marker" style={{ height: '0px' }} ref={ref} />
  );

  return loadMoreTrigger;
}
