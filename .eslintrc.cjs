// @ts-check
/** @type {import('@typescript-eslint/utils/dist/ts-eslint').Linter.Config} */
module.exports = {
  root: true,
  plugins: [
    '@stylexjs',
    '@typescript-eslint',
    'eslint-comments',
    'import',
    'node',
    'react',
    'react-hooks',
    'relay',
    'simple-import-sort',
    'unicorn',
  ],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:relay/strict',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    curly: 'error',
    eqeqeq: ['error', 'always', { null: 'never' }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/no-default-export': 'error',
    'import/consistent-type-specifier-style': 'error',

    // reconfigurations
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          props: false,
          prop: false,
        },
      },
    ],

    // ew god no
    'unicorn/no-null': 'off',
    'no-inner-declarations': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
  },
  ignorePatterns: ['**/__generated__/**'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.cjs', '*.mjs'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['src/pages/**/*'],
      excludedFiles: ['src/pages/api/**/*'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
      ],
      rules: {
        '@stylexjs/valid-styles': 'error',
        'import/default': 'error',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['src/pages/api/**/*'],
      extends: ['plugin:node/recommended'],
      rules: {
        'node/no-unsupported-features/es-syntax': [
          'error',
          {
            version: '>=18.0.0',
            ignores: ['modules'],
          },
        ],
        'node/no-missing-import': 'off',
      },
    },
  ],
};
