import * as fs from 'node:fs';
import * as path from 'node:path';
import * as url from 'node:url';

import { lexicographicSortSchema, printSchema } from 'graphql';

import { schema } from '@/lib/pothos';

const schemaAsString = printSchema(lexicographicSortSchema(schema));

fs.writeFileSync(
  path.resolve(
    path.dirname(url.fileURLToPath(import.meta.url)),
    '..',
    'prisma',
    '__generated__',
    'schema.graphql',
  ),
  schemaAsString,
);
