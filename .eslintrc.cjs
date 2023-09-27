// @ts-check
/** @type {import('@typescript-eslint/utils/dist/ts-eslint').Linter.Config} */
module.exports = {
  root: true,
  plugins: [
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
    '@typescript-eslint/strict-boolean-expressions': 'error',
    curly: 'error',
    eqeqeq: ['error', 'always', { null: 'never' }],
    'import/no-default-export': 'error',
    'import/consistent-type-specifier-style': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

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
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          {
            char: '>',
            alternatives: ['&gt;'],
          },
          {
            char: '}',
            alternatives: ['&#125;'],
          },
        ],
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: [/\.tsx$/, /^use[A-Z].+\.tsx?$/],
      },
    ],

    // ew god no
    'no-inner-declarations': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
    'relay/generated-flow-types': 'off',
    'unicorn/no-negated-condition': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-ternary': 'off',
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
        'import/default': 'error',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['src/pages/api/**/*'],
      extends: ['plugin:node/recommended'],
      rules: {
        // reconfigurations
        'node/no-unsupported-features/es-syntax': [
          'error',
          {
            version: '>=18.0.0',
            ignores: ['modules'],
          },
        ],

        // ew god no
        'node/no-missing-import': 'off',
        'node/no-unpublished-import': 'off',
      },
    },
    {
      files: ['src/lib/pothos/entities/**/*'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
          },
        ],
      },
    },
  ],
};
