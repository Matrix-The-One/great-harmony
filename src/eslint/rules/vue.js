const baseRules = require('./base')

const vueRules = {
  'vue/multi-word-component-names': 0,
  'vue/no-unused-vars': [
    2,
    {
      ignorePattern: '^_',
    },
  ],
  'vue/html-self-closing': [
    2,
    {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    },
  ],
  'vue/no-template-shadow': 2,
  'vue/no-v-html': 1,
  'vue/no-potential-component-option-typo': [
    2,
    {
      presets: ['all'],
    },
  ],
  'vue/no-useless-mustaches': 1,
  'vue/no-unused-refs': 1,
  'vue/no-unused-properties': 1,
  'vue/no-undef-properties': 1,
  'vue/no-undef-components': 1,
  'vue/no-this-in-before-route-enter': 1,
  'vue/no-template-target-blank': 1,
  'vue/v-on-function-call': 1,
  'vue/require-name-property': 1,
  'vue/require-direct-export': 1,
  'vue/prefer-true-attribute-shorthand': 1,
  'vue/prefer-separate-static-class': 1,
}

module.exports = {
  ...baseRules,
  ...vueRules,
}
