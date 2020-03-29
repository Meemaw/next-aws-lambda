module.exports = {
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
  plugins: ['react', 'prettier', 'jest', 'react-hooks', 'import', 'testing-library', 'testcafe'],
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/display-name': ['off'],
    'react/prop-types': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],

    'import/no-extraneous-dependencies': ['off'],
    'import/extensions': ['off'],
    'import/prefer-default-export': ['off'],

    '@typescript-eslint/explicit-function-return-type': ['off'],
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
      },
    },
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  parser: '@typescript-eslint/parser',
};
