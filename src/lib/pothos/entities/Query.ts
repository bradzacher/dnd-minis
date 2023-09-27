import type { Prisma } from '@/lib/prisma';
import { prisma } from '@/lib/prisma';

import type { BuilderType } from '..';

const MINI_SEARCH_REGEX = /(name|type|sub[Tt]ype):(.*)/;

export function Query(builder: BuilderType) {
  enum SortColumn {
    name = 'name',
    size = 'size',
    subType = 'subType',
    type = 'type',
  }
  builder.enumType(SortColumn, { name: 'MiniSortColumn' });
  enum SortDirection {
    asc = 'asc',
    desc = 'desc',
  }
  builder.enumType(SortDirection, {
    name: 'SortDirection',
  });
  const SortInputObject = builder.inputType('MiniSort', {
    fields: t => ({
      column: t.field({
        type: SortColumn,
      }),
      direction: t.field({
        type: SortDirection,
      }),
    }),
  });

  builder.queryType({
    fields: t => ({
      minis: t.prismaConnection({
        type: 'Mini',
        cursor: 'id',
        nullable: false,
        nodeNullable: false,
        edgesNullable: false,
        defaultSize: 25,
        args: {
          search: t.arg.string(),
          sort: t.arg({
            type: SortInputObject,
          }),
        },
        resolve: (query, _, args) => {
          const where = ((): Prisma.MiniWhereInput => {
            const searchText = args.search;
            if (searchText == null || searchText === '') {
              return {};
            }

            const match = MINI_SEARCH_REGEX.exec(searchText);
            if (!match) {
              return {
                OR: [
                  { name: { contains: searchText } },
                  { type: { is: { name: { contains: searchText } } } },
                  { subType: { is: { name: { contains: searchText } } } },
                ],
              };
            }

            const [, field, fieldSearchTextRaw] = match as unknown as [
              string,
              'name' | 'type' | 'subType' | 'subtype',
              string,
            ];
            const fieldSearchText = fieldSearchTextRaw.trim();

            if (fieldSearchText === '') {
              return {};
            }

            switch (field) {
              case 'name': {
                return {
                  name: {
                    contains: fieldSearchText,
                  },
                };
              }

              case 'subType':
              case 'subtype': {
                return {
                  subType: {
                    is: {
                      name: {
                        contains: fieldSearchText,
                      },
                    },
                  },
                };
              }

              case 'type': {
                return {
                  type: {
                    is: {
                      name: {
                        contains: fieldSearchText,
                      },
                    },
                  },
                };
              }
            }
          })();

          const orderBy = ((): Prisma.MiniOrderByWithRelationInput => {
            const defaultDirection = 'asc';

            if (args.sort == null || args.sort.column == null) {
              return {
                name: defaultDirection,
              };
            }

            switch (args.sort.column) {
              case 'name': {
                return {
                  name: args.sort.direction ?? defaultDirection,
                };
              }

              case 'size':
              case 'subType':
              case 'type': {
                return {
                  [args.sort.column]: {
                    name: args.sort.direction ?? defaultDirection,
                  },
                };
              }

              default: {
                throw new Error(`Unexpected column ${args.sort.column}`);
              }
            }
          })();

          return prisma.mini.findMany({
            ...query,
            where,
            orderBy,
          });
        },
      }),
    }),
  });
}
