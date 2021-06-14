module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react-hooks/recommended'],
  plugins: ['testing-library'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'testing-library/no-debug': 'warn',
    'testing-library/no-manual-cleanup': 'warn',
    'testing-library/prefer-explicit-assert': 'error',
    'react/prop-types': 'error'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    'jest/globals': true
  }
};
