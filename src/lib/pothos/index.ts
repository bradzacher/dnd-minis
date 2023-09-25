import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaUtils from '@pothos/plugin-prisma-utils';
import RelayPlugin from '@pothos/plugin-relay';

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
  fields: (t) => ({
    name: t.exposeString('name'),
    size: t.string({
      select: {
        size: {
          select: {
            name: true,
          },
        },
      },
      resolve: (mini) => mini.size.name,
    }),
    type: t.string({
      select: {
        type: {
          select: {
            name: true,
          },
        },
      },
      resolve: (mini) => mini.type.name,
    }),
    subType: t.string({
      select: {
        subType: {
          select: {
            name: true,
          },
        },
      },
      resolve: (mini) => mini.subType.name,
    }),
    monsters: t.relation('monsters'),
  }),
});

builder.prismaNode('Monster', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    size: t.string({
      select: {
        size: {
          select: {
            name: true,
          },
        },
      },
      resolve: (monster) => monster.size.name,
    }),
    type: t.string({
      select: {
        type: {
          select: {
            name: true,
          },
        },
      },
      resolve: (monster) => monster.type.name,
    }),
    subType: t.string({
      select: {
        subType: {
          select: {
            name: true,
          },
        },
      },
      resolve: (monster) => monster.subType.name,
    }),
    sheet: t.relation('sheet'),
    image: t.relation('image'),
    minis: t.relation('minis'),
  }),
});

builder.prismaNode('Image', {
  id: { field: 'id' },
  fields: (t) => ({
    url: t.exposeString('url'),
  }),
});

builder.prismaNode('Sheet', {
  id: { field: 'id' },
  fields: (t) => ({
    url: t.exposeString('url'),
    sheetType: t.string({
      select: {
        type: {
          select: {
            name: true,
          },
        },
      },
      resolve: (sheet) => sheet.type.name,
    }),
  }),
});

builder.queryType({
  fields: (t) => ({
    minis: t.prismaConnection({
      type: 'Mini',
      cursor: 'id',
      nullable: false,
      nodeNullable: false,
      edgesNullable: false,
      resolve: (query) => prisma.mini.findMany({ ...query }),
    }),
    monsters: t.prismaConnection({
      type: 'Mini',
      cursor: 'id',
      nullable: false,
      nodeNullable: false,
      edgesNullable: false,
      resolve: (query) => prisma.mini.findMany({ ...query }),
    }),
  }),
});

export const schema = builder.toSchema();
