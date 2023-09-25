import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaUtils from '@pothos/plugin-prisma-utils';
import RelayPlugin from '@pothos/plugin-relay';

import type { Prisma } from '@/lib/prisma';
import { prisma } from '@/lib/prisma';

import type PrismaTypes from './__generated__/pothos';

const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin, PrismaUtils, RelayPlugin],
  prisma: {
    client: prisma,
    // uses /// comments from prisma schema as descriptions
    // for object types, relations and exposed fields.
    // descriptions can be omitted by setting description to false
    exposeDescriptions: true,
    // use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
    filterConnectionTotalCount: true,
    // warn when not using a query parameter correctly
    onUnusedQuery: process.env.NODE_ENV === 'production' ? null : 'warn',
  },
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'String',
  },
});

builder.prismaNode('Mini', {
  id: { field: 'id' },
  fields: t => ({
    name: t.exposeString('name'),
    quantity: t.exposeInt('quantity'),
    size: t.string({
      select: {
        size: {
          select: {
            name: true,
          },
        },
      },
      resolve: mini => mini.size.name,
    }),
    type: t.string({
      select: {
        type: {
          select: {
            name: true,
          },
        },
      },
      resolve: mini => mini.type.name,
    }),
    subType: t.string({
      nullable: true,
      select: {
        subType: {
          select: {
            name: true,
          },
        },
      },
      resolve: mini =>
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        mini.subType == null ? null : mini.subType.name,
    }),
    monsters: t.relation('monsters'),
  }),
});

builder.prismaNode('Monster', {
  id: { field: 'id' },
  fields: t => ({
    name: t.exposeString('name'),
    size: t.string({
      select: {
        size: {
          select: {
            name: true,
          },
        },
      },
      resolve: monster => monster.size.name,
    }),
    type: t.string({
      select: {
        type: {
          select: {
            name: true,
          },
        },
      },
      resolve: monster => monster.type.name,
    }),
    subType: t.string({
      nullable: true,
      select: {
        subType: {
          select: {
            name: true,
          },
        },
      },
      resolve: monster =>
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        monster.subType == null ? null : monster.subType.name,
    }),
    image: t.relation('image'),
    sheetUrl: t.exposeString('sheetUrl'),
    sheetType: t.string({
      select: {
        type: {
          select: {
            name: true,
          },
        },
      },
      resolve: monster => monster.type.name,
    }),
    minis: t.relation('minis'),
  }),
});

builder.prismaNode('Image', {
  id: { field: 'id' },
  fields: t => ({
    url: t.exposeString('url'),
  }),
});

const MINI_SEARCH_REGEX = /(name|type|sub[Tt]ype):(.*)/;
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
      },
      resolve: (query, _, args) => {
        function findAll() {
          return prisma.mini.findMany({ ...query });
        }

        if (args.search == null || args.search === '') {
          return findAll();
        }

        const searchText = args.search;
        const where = ((): Prisma.MiniWhereInput | null => {
          const match = MINI_SEARCH_REGEX.exec(searchText);
          if (!match) {
            return {
              OR: [
                {
                  name: {
                    contains: searchText,
                  },
                },
                {
                  type: {
                    is: {
                      name: {
                        contains: searchText,
                      },
                    },
                  },
                },
                {
                  subType: {
                    is: {
                      name: {
                        contains: searchText,
                      },
                    },
                  },
                },
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
            return null;
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

        if (where == null) {
          return findAll();
        }

        return prisma.mini.findMany({
          ...query,
          where,
        });
      },
    }),
  }),
});

export const schema = builder.toSchema();
