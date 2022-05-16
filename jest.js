'use strict';

module.exports = {
  env: {
    'jest/globals': true
  },
  settings: {
    jest: {
      version: 27
    }
  },
  overrides: [
    {
      files: [
        '*.test.js',
        '*.spec.js',
        '*.test.ts',
        '*.spec.ts',
        '*.test.tsx',
        '*.spec.tsx'
      ],
      plugins: ['jest'],
      extends: ['plugin:jest/all']
    }
  ],
  rules: {
    'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'jest/prefer-expect-assertions': [
      'error',
      {
        onlyFunctionsWithAsyncKeyword: true,
        onlyFunctionsWithExpectInLoop: true,
        onlyFunctionsWithExpectInCallback: true
      }
    ]
  }
};
