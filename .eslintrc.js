module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'standard', 'standard-react', 'standard', 'plugin:react-hooks/recommended'],
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'ignore',
      },
    ],
    'no-console': 'warn',
    'no-labels': 'off',
    'no-unused-vars': 'warn',
    semi: [
      'error',
      'always',
    ],
  },
};
