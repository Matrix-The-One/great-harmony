const baseRules = require('./base')

const reactRules = {
  'react/display-name': 0,
  'react/no-array-index-key': 1,
  'react/no-arrow-function-lifecycle': 1,
  'react/prop-types': 0,
  'react/react-in-jsx-scope': 0,
  'react/self-closing-comp': 1,
  'react/style-prop-object': 1,
  'react/void-dom-elements-no-children': 1,
  'react/jsx-boolean-value': 1,
  'react/jsx-curly-brace-presence': 1,
  'react/jsx-fragments': 1,
  'react/jsx-key': 1,
}

const reactHooksRules = {
  'react-hooks/rules-of-hooks': 2,
  'react-hooks/exhaustive-deps': 1,
}

module.exports = {
  ...baseRules,
  ...reactRules,
  ...reactHooksRules,
}
