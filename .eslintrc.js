module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  overrides: [
    { files: ['*.svelte'], plugins: ['svelte3'], processor: 'svelte3/svelte3' },
    { files: ['*.html'], plugins: ['html'] }
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019
  },
  env: {
    browser: true,
    node: true,
    es2017: true
  }
}
