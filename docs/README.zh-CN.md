<p align="center">
  <a href="../README.md">English</a> | 中文
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/great-harmony"><img src="https://img.shields.io/npm/v/great-harmony.svg?sanitize=true" alt="Version"></a>
  <a href="https://npmcharts.com/compare/great-harmony?minimal=true"><img src="https://img.shields.io/npm/dm/great-harmony.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/great-harmony"><img src="https://img.shields.io/npm/l/great-harmony.svg?sanitize=true" alt="License"></a>
</p>

# great-harmony

一个 lint 配置库，包含 React、Vue 项目的 [ESlint]、[Stylelint]、[Prettier]、[TSConfig] 配置。

## 安装

```shell
npm install great-harmony --save-dev
```

## 使用

- Eslint：在 `.eslintrc.js` 文件添加如下配置。

  - 默认使用 Vue2（JS）的规则，如果你需要使用 Vue3（TS）的规则，请更改为 `great-harmony/eslint/vue3`。

```js
module.exports = {
  extends: require.resolve('great-harmony/eslint'),
  rules: {
    /* 你可以在这里重写规则 */
  },
}
```

- Stylelint：在 `.stylelint.js` 文件添加如下配置。

```js
module.exports = {
  extends: require.resolve('great-harmony/stylelint'),
  rules: {
    /* 你可以在这里重写规则 */
  },
}
```

- Prettier：在 `.prettier.js` 文件添加如下配置。

```js
module.exports = require('great-harmony/prettier')
```

_如果需要重写规则。_

```js
module.exports = {
  ...require('great-harmony/prettier'),
  /* 你可以在这里重写规则 */
}
```

- TSConfig：在 `tsconfig.json` 文件添加如下配置。

```js
{
  "extends": "great-harmony/tsconfig/base.json",
  /* 你可以在这里重写规则 */

  /* 可以根据你的项目来修改下面的配置 */
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

- VSCode：首先你需要安装 [ESlint][vscode-eslint]、[Stylelint][vscode-stylelint]、[Prettier][vscode-prettier] 插件，然后在 [settings.json][vscode-settings] 文件添加如下配置。

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

## VSCode 全局使用

- 全局安装。

```shell
npm install great-harmony -g
```

- VSCode：首先你需要安装 [ESlint][vscode-eslint]、[Stylelint][vscode-stylelint]、[Prettier][vscode-prettier] 插件，然后在 [settings.json][vscode-settings] 文件添加如下配置。

  - 请将 `$path` 替换成你电脑上 npm 全局包安装的目录，可以使用 `npm prefix -g` 命令查看。
  - 如果你使用 `Less`，请将 `stylelint.customSyntax` 的值替换为 `postcss-less`。

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

- **Tips：**

  - VSCode 全局使用与项目局部使用存在冲突，选择其中一种使用方式即可。
  - VSCode 全局使用 Stylelint 在 Vue 项目中尚欠火候。

## 开源许可证

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
