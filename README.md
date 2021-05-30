# Craig Morrison's ESLint Config

## Instructions

### Install

```shell
npm install @craigmorrison/eslint-config --save-dev
```

### Configure with ESLint

#### Base

```json
{
  "extends": "@craigmorrison/eslint-config"
}
```

#### Add other packages as needed

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

Write a prettier config in JavaScript (e.g. `prettier.config.js`) and spread the imported config object into the one for you project. You can add any overrides or additional rules on subsequent lines.

```js
'use strict';

const baseConfig = require('@craigmorrison/eslint-config/prettier.config.js');

module.exports = {
  ...baseConfig
};
```
