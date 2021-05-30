# Craig Morrison's ESLint Config

## Instructions

### Install

Install the package, and it's peer dependencies.

```shell
npm install eslint prettier @craigmorrison/eslint-config --save-dev
```

### Configure with ESLint

Add the required packages to the `extends` object in your ESLint config file.

#### Base

You should always import the base config.

```json
{
  "extends": "@craigmorrison/eslint-config"
}
```

#### Add other packages as needed

For additional features, add the relevant files.

```json
{
  "extends": [
    "@craigmorrison/eslint-config",
    "@craigmorrison/eslint-config/typescript",
    "@craigmorrison/eslint-config/jest",
    "@craigmorrison/eslint-config/react"
  ]
}
```

### Configure Prettier with the included config

Write a prettier config file in JavaScript (e.g. `prettier.config.js`) and spread the imported config object into the one for you project. You can add any overrides or additional rules on subsequent lines.

```js
'use strict';

const baseConfig = require('@craigmorrison/eslint-config/prettier.config.js');

module.exports = {
  ...baseConfig
};
```
