module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint/eslint-plugin'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'comma', requireLast: true },
      singleline: { delimiter: 'comma', requireLast: false },
    }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'arrow-parens': 'off', // Erreur avec les generics de TS.
    'import/extensions': 'off',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'max-len': ['error', { code: 120, ignorePattern: '^\\s*className=' }],
    'no-console': 'error',
    'no-restricted-syntax': ['error',
      { selector: 'CallExpression[callee.name=\'dump\']', message: 'Dump expresions are not allowed' },
      { selector: 'CallExpression[callee.name=\'dumpParams\']', message: 'Dump expresions are not allowed' },
    ],
    'object-curly-newline': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    indent: 'off',
    semi: ['error', 'never'],
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        semi: ['error', 'always'],
        'global-require': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
    {
      files: ['pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.json', '.d.ts', '.ts', '.tsx', '.js'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
