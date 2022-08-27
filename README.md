<p align="center">
  English | <a href="./docs/README.zh-CN.md">中文</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/great-harmony"><img src="https://img.shields.io/npm/v/great-harmony.svg?sanitize=true" alt="Version"></a>
  <a href="https://npmcharts.com/compare/great-harmony?minimal=true"><img src="https://img.shields.io/npm/dm/great-harmony.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/great-harmony"><img src="https://img.shields.io/npm/l/great-harmony.svg?sanitize=true" alt="License"></a>
</p>

# great-harmony

A lint configuration library containing [ESlint], [Stylelint], [Prettier], [TSConfig] configurations for React, Vue projects.

## Installation

```shell
npm install great-harmony --save-dev
```

## Usage

- Eslint: Add the following configuration to the `.eslintrc.js` file.

  - The default is to use Vue2 (JS) rules, if you need to use Vue3 (TS) rules, please change to `great-harmony/eslint/vue3`.

```js
module.exports = {
  extends: require.resolve('great-harmony/eslint'),
  rules: {
    /* You can rewrite the rules here */
  },
}
```

- Stylelint: Add the following configuration to the `.stylelint.js` file.

```js
module.exports = {
  extends: require.resolve('great-harmony/stylelint'),
  rules: {
    /* You can rewrite the rules here */
  },
}
```

- Prettier: Add the following configuration to the `.prettier.js` file.

```js
module.exports = require('great-harmony/prettier')
```

_If the rules need to be rewritten._

```js
module.exports = {
  ...require('great-harmony/prettier'),
  /* You can rewrite the rules here */
}
```

- TSConfig: Add the following configuration to the `tsconfig.json` file.

```js
{
  "extends": "great-harmony/tsconfig/base.json",
  /* You can rewrite the rules here */

  /* You can modify the following configuration according to your project */
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src", "mock", "test", "typings", "config"],
  "exclude": ["node_modules", "build", "dist", "scripts", "webpack", "jest"]
}
```

- VSCode: First you need to install [ESlint][vscode-eslint], [Stylelint][vscode-stylelint], [Prettier][vscode-prettier] plugins, and then add the following configuration to the [settings.json][vscode-settings] file with the following configuration.

```js
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "stylelint.snippet": ["css", "less", "scss", "sass", "postcss", "vue"],
  "stylelint.validate": ["css", "less", "scss", "sass", "postcss", "vue"]
}
```

## VSCode Global Usage

- Global Installation.

```shell
npm install great-harmony -g
```

- VSCode: First you need to install [ESlint][vscode-eslint], [Stylelint][vscode-stylelint], [Prettier][vscode-prettier] plugins, and then add the following configuration to the [settings.json][vscode-settings] file with the following configuration.

  - Please replace `$path` with the directory where the npm global package is installed on your computer, you can use `npm prefix -g` command to see it.
  - If you use `Less`, replace the value of `stylelint.customSyntax` with `postcss-less`.

```js
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  /* eslint */
  "eslint.nodePath": "$path/node_modules/great-harmony/node_modules",
  "eslint.options": {
    "ignorePath": "$path/node_modules/great-harmony/.eslintignore",
    "overrideConfigFile": "$path/node_modules/great-harmony/eslint/index.js"
  },
  /* stylelint */
  "stylelint.customSyntax": "postcss-scss",
  "stylelint.snippet": ["css", "less", "scss", "sass", "postcss", "vue"],
  "stylelint.validate": ["css", "less", "scss", "sass", "postcss", "vue"],
  "stylelint.configBasedir": "$path/node_modules/great-harmony",
  "stylelint.configFile": "$path/node_modules/great-harmony/stylelint/index.js",
  "stylelint.stylelintPath": "$path/node_modules/great-harmony/node_modules/stylelint",
  /* prettier */
  "prettier.configPath": "$path/node_modules/great-harmony/prettier/index.js"
}
```

- **Tips:**

  - There is a conflict between the global use of VSCode and the local use of the project, just choose one of the usage methods.
  - VSCode global use of Stylelint is not yet ready in Vue projects.

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022 Matrix-The-One

[eslint]: https://eslint.org/
[stylelint]: https://stylelint.io/
[prettier]: https://prettier.io/
[tsconfig]: https://www.typescriptlang.org/tsconfig
[vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vscode-stylelint]: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
[vscode-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-settings]: https://code.visualstudio.com/docs/getstarted/settings
