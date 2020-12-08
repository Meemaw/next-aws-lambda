module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  reportUnusedDisableDirectives: true,
  plugins: [
    'react',
    'prettier',
    'jest',
    'react-hooks',
    'import',
    'testing-library',
    'testcafe',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'plugin:testcafe/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    'arrow-body-style': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'no-use-before-define': ['off'],

    'jsx-a11y/anchor-is-valid': ['off'],

    'jest/expect-expect': ['off'],

    'import/no-unresolved': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/extensions': ['off'],
    'import/prefer-default-export': ['off'],
    'import/order': [
      1,
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          ['external', 'internal'],
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
  overrides: [
    {
      files: ['*.e2e.ts'],
      rules: {
        'jest/expect-expect': ['off'],
        'jest/no-test-callback': ['off'],
        'jest/no-done-callback': ['off'],
      },
    },
  ],
};
