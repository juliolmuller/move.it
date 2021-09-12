module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'next',
    'lacussoft',
    'lacussoft/react',
    'lacussoft/typescript',
    'next/core-web-vitals',
  ],
  rules: {
    '@next/next/no-img-element': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
