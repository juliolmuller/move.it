module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@lacussoft',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'class-methods-use-this': 'off',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-newline': 'off',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-bracket-location': 'error',
    'react/prop-types': 'off',
  },
}
