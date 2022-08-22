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
    'function-url-quotes': 'always',
    'selector-type-no-unknown': null,
    'no-descending-specificity': null,
    'selector-attribute-quotes': 'always',
    'font-family-no-missing-generic-family-keyword': null,
    'value-keyword-case': ['lower', { ignoreKeywords: ['composes'] }],
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*(-[a-z0-9]+)*)$',
      { message: 'Expected class selector to be kebab-case' },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'content',
          'each',
          'error',
          'extend',
          'for',
          'function',
          'if',
          'include',
          'mixin',
          'return',
          'while',
        ],
      },
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
