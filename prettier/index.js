module.exports = {
  semi: false,
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  endOfLine: 'lf',
  proseWrap: 'never',
  arrowParens: 'avoid',
  trailingComma: 'all',
  plugins: [
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrder: [
    '^(react|vue)(.*)$',
    '^umi(.*)$',
    '^antd(.*)$',
    '^@?ant-design(.*)$',
    '^@?element(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/components(.*)$',
    '^@/models(.*)$',
    '^@/assets(.*)$',
    '^@/common(.*)$',
    '^@/constant(.*)$',
    '^@/services(.*)$',
    '^@/hooks(.*)$',
    '^@/utils(.*)$',
    '^@/(.*)$',
  ],
}
