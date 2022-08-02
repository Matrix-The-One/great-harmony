module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'no-descending-specificity': null,
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'font-family-no-missing-generic-family-keyword': null,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'selector-type-no-unknown': null,
    'value-keyword-case': ['lower', { ignoreKeywords: ['composes'] }],
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*(-[a-z0-9]+)*)$',
      { message: 'Expected class selector to be kebab-case' },
    ],
  },
  customSyntax: 'postcss-scss',
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
    {
      customSyntax: 'postcss-scss',
      files: ['**/*.css', '**/*.scss'],
    },
    {
      customSyntax: 'postcss-less',
      files: ['**/*.less'],
    },
    {
      customSyntax: 'postcss-html',
      files: ['**/*.html', '**/*.vue'],
    },
  ],
}
