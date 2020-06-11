module.exports = {
  env: {
    jest: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    'comma-dangle': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
  },
};
