const baseRules = {
  'for-direction': 2,
  'getter-return': 1,
  'no-prototype-builtins': 0,
  'guard-for-in': 0,
  'no-eval': 0,
  'no-void': 0,
  'no-with': 0,
  'prefer-promise-reject-errors': 0,
  'no-unused-vars': 1,
  'comma-dangle': [1, 'only-multiline'],
  'no-new-object': 0,
  quotes: [1, 'single'],
  semi: [1, 'never'],
}

const tsRules = {
  '@typescript-eslint/adjacent-overload-signatures': 0,
  '@typescript-eslint/ban-ts-comment': 0,
  '@typescript-eslint/consistent-type-imports': [1, { prefer: 'type-imports' }],
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/no-duplicate-enum-values': 1,
  '@typescript-eslint/no-floating-promises': 0,
  '@typescript-eslint/no-inferrable-types': 1,
  '@typescript-eslint/no-namespace': 1,
  '@typescript-eslint/no-non-null-assertion': 0,
  '@typescript-eslint/no-unnecessary-qualifier': 1,
  '@typescript-eslint/no-unnecessary-type-arguments': 1,
  '@typescript-eslint/no-unsafe-argument': 0,
  '@typescript-eslint/no-unsafe-assignment': 0,
  '@typescript-eslint/no-unsafe-call': 0,
  '@typescript-eslint/no-unsafe-member-access': 0,
  '@typescript-eslint/no-unsafe-return': 0,
  '@typescript-eslint/no-useless-empty-export': 1,
  '@typescript-eslint/no-var-requires': 0,
  '@typescript-eslint/prefer-nullish-coalescing': [
    1,
    { ignoreTernaryTests: false },
  ],
  '@typescript-eslint/prefer-optional-chain': 1,
  '@typescript-eslint/prefer-string-starts-ends-with': 1,
  '@typescript-eslint/require-array-sort-compare': 0,
  '@typescript-eslint/restrict-template-expressions': 0,
  '@typescript-eslint/strict-boolean-expressions': 0,
  '@typescript-eslint/no-empty-function': 0,
  '@typescript-eslint/no-use-before-define': 0,
}

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
  extends: ['standard', 'plugin:import/recommended', 'prettier'],
  plugins: ['html', 'import'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    requireConfigFile: false,
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      extends: [
        'standard-with-typescript',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      plugins: ['import', '@typescript-eslint'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        requireConfigFile: false,
        createDefaultProgram: true,
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        ...baseRules,
        ...tsRules,
      },
    },
    {
      files: ['**/*.vue'],
      parser: 'vue-eslint-parser',
      extends: [
        'standard-with-typescript',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
      ],
      plugins: ['import', 'vue', '@typescript-eslint'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        requireConfigFile: false,
        createDefaultProgram: true,
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        parser: '@typescript-eslint/parser',
      },
      rules: {
        ...baseRules,
        ...tsRules,
        ...vueRules,
      },
    },
  ],
  rules: baseRules,
}