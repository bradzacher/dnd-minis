import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaUtils from '@pothos/plugin-prisma-utils';
import RelayPlugin from '@pothos/plugin-relay';

import { prisma } from '@/lib/prisma';

import type PrismaTypes from './__generated__/pothos';
import { Image } from './entities/Image';
import { Mini } from './entities/Mini';
import { Monster } from './entities/Monster';
import { Query } from './entities/Query';

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

export type BuilderType = typeof builder;

Mini(builder);
Monster(builder);
Image(builder);
Query(builder);

export const schema = builder.toSchema();
