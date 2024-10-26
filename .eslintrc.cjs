module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    typescript: {
      project: './tsconfig.json',
    },
  },
  plugins: ['@typescript-eslint', 'lit', 'lit-a11y', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:lit/recommended',
    'plugin:lit-a11y/recommended',
    'prettier',
  ],
};
