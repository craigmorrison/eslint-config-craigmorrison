'use strict';

module.exports = {
  env: {
    'jest/globals': true
  },
  plugins: ['jest'],
  settings: {
    jest: {
      version: 26
    }
  },
  extends: ['plugin:jest/all']
};