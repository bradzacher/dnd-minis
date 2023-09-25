// @ts-check

const path = require('node:path');

// eslint-disable-next-line unicorn/prefer-module -- it's actually a CJS file
module.exports = {
  artifactDirectory: path.resolve(__dirname, './src/lib/relay/__generated__/'),
  excludes: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  language: 'typescript',
  schema: path.resolve(__dirname, './prisma/__generated__/schema.graphql'),
  src: path.resolve(__dirname, './src'),
};
