const path = require('path')
const tsRules = require('./rules/ts')
const vueRules = require('./rules/vue')
const reactRules = require('./rules/react')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
    mocha: true,
    jasmine: true,
    jquery: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['html', 'import', 'react', 'react-hooks'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    requireConfigFile: false,
    babelOptions: {
      cwd: path.join(__dirname, '..'),
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      extends: [
        'standard-with-typescript',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      plugins: ['import', 'react', 'react-hooks', '@typescript-eslint'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        requireConfigFile: false,
        createDefaultProgram: true,
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      rules: tsRules,
    },
    {
      files: ['**/*.vue'],
      parser: 'vue-eslint-parser',
      extends: [
        'standard',
        'plugin:import/recommended',
        'plugin:vue/recommended',
        'prettier',
      ],
      plugins: ['import', 'vue'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        requireConfigFile: false,
        createDefaultProgram: true,
        parser: '@babel/eslint-parser',
      },
      rules: vueRules,
    },
  ],
  rules: reactRules,
}
