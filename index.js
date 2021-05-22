'use strict';

module.exports = {
  env: {
    browser: true,
    node: true
  },
  rules: {
    /*
     * Basic rules
     */
    // Constructors of classes that are extending should use super()
    'constructor-super': 'error',
    // Getters and setters need to be defined in pairs
    'accessor-pairs': 'error',
    // Getters need to have a return
    'getter-return': 'error',
    // Getters need to be defined before setters
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    // Array method callbacks must have a return
    'array-callback-return': 'error',
    // Braces are returned for arrow functions where it is less ambiguous
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false
      }
    ],
    // Parenthesis should be used to clarify arrow functions
    'no-confusing-arrow': ['error', { allowParens: false }],
    // Don't allow the new keyword with primitive wrappers (e.g. String())
    'no-new-wrappers': 'error',
    // Class methods should use the 'this' keyword, or be static
    'class-methods-use-this': 'error',
    // Returns within a statement or function should either return a value or not
    'consistent-return': 'error',
    // Require default in all switch statements
    'default-case': 'off',
    // If default is used in switch statements, it should be last
    'default-case-last': 'error',
    // Default parameters should be specified last in a function
    'default-param-last': 'error',
    // Don't use the undefined variable
    'no-undef': 'error',
    // Prefer const over let or var
    'prefer-const': 'error',
    // Require type checking equality (=== or !==, not == or !==)
    'eqeqeq': 'error',
    // Don't define for loops with stop conditions that are never reached
    'for-direction': 'error',
    // Disallow use of the __iterator__ property
    'no-iterator': 'error',
    // Define functions as declarations, not assignments
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    // Don't use var for assignments (use let or const)
    'no-var': 'error',
    // No assignments on return
    'no-return-assign': 'error',
    // No yoda conditions (harder to read, and no necessary)
    'yoda': ['error', 'never'],
    // Require guard conditions in for-in loops
    'guard-for-in': 'error',
    // Disallow alert()
    'no-alert': 'error',
    // No Array constructors
    'no-array-constructor': 'error',
    // Promise executor functions must be synchronous
    'no-async-promise-executor': 'error',
    // No await inside loops
    'no-await-in-loop': 'error',
    // No bitwise operators
    'no-bitwise': 'error',
    // No callers (not allowed in strict mode anyway)
    'no-caller': 'error',
    // No declarations in case statements without a block
    'no-case-declarations': 'error',
    // No class assignments
    'no-class-assign': 'error',
    // No comparisons against negative zero
    'no-compare-neg-zero': 'error',
    // No assignments in a conditional
    'no-cond-assign': 'error',
    // No reassignment of const values
    'no-const-assign': 'error',
    // No constant conditions
    'no-constant-condition': 'error',
    // No return in class constructors
    'no-constructor-return': 'error',
    // No continue keyword
    'no-continue': 'error',
    // Don't use delete on variables, only properties
    'no-delete-var': 'error',
    // Require regex literals to escape division operators
    'no-div-regex': 'error',
    // Function arguments must be unique
    'no-dupe-args': 'error',
    // Class members must be unique
    'no-dupe-class-members': 'error',
    // Conditions in if-else chains must be unique
    'no-dupe-else-if': 'error',
    // Property keys must be unique in object literals
    'no-dupe-keys': 'error',
    // Case statements must be unique
    'no-duplicate-case': 'error',
    // Don't import from the same module twice
    'no-duplicate-imports': 'error',
    // Don't use return within else blocks, return outside the if-else
    'no-else-return': 'error',
    // No empty blocks
    'no-empty': 'error',
    // No empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // No empty functions
    'no-empty-function': 'error',
    // No empty destructuring patterns
    'no-empty-pattern': 'error',
    // No loose null comparisons (redundant with eqeqeq setting)
    'no-eq-null': 'error',
    // Don't use eval
    'no-eval': 'error',
    // No reassigning exceptions
    'no-ex-assign': 'error',
    // No extending native objects
    'no-extend-native': 'error',
    // No unnecessary function binding
    'no-extra-bind': 'error',
    // No unnecessary boolean casting
    'no-extra-boolean-cast': 'error',
    // No unnecessary use of labels
    'no-extra-label': 'error',
    // Disallow case statement fallthrough
    'no-fallthrough': 'error',
    // No reassignment of function declarations
    'no-func-assign': 'error',
    // No reassignment of global variables
    'no-global-assign': 'error',
    // No implicit type coortion (readability)
    'no-implicit-coercion': 'error',
    // No implicitly global assignments or function declarations
    'no-implicit-globals': 'error',
    // No implied eval-like uses of certain functions
    'no-implied-eval': 'error',
    // No reassignment of imported bindings
    'no-import-assign': 'error',
    // No invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': 'error',
    // No use of this outside of classes and similar objects
    'no-invalid-this': 'error',
    // No unusual whitespace characters
    'no-irregular-whitespace': 'error',
    // No labels that are variable names
    'no-label-var': 'error',
    // No labels (can optionaly enable for loops and switch)
    'no-labels': 'error',
    // No unecessarily nested blocks
    'no-lone-blocks': 'error',
    // Never define functions inside of loops
    'no-loop-func': 'error',
    // No number literals that lose precision at runtime
    'no-loss-of-precision': 'error',
    // No misleading character classes in regular expressions
    'no-misleading-character-class': 'error',
    // Each variable declaration must use a seperate keyword
    'one-var': ['error', 'never'],
    // No chained variable assignments
    'no-multi-assign': 'error',
    // No multi-line strings (hard to compare with copy)
    'no-multi-str': 'error',
    // Use positive conditions for if statements with else
    'no-negated-condition': 'error',
    // No nested ternary statements
    'no-nested-ternary': 'error',
    // No use of "new Contructor" without an assignment
    'no-new': 'error',
    // No "new Function" constuctor (use declarations)
    'no-new-func': 'error',
    // No "new Object" constructor (use literal)
    'no-new-object': 'error',
    // No "new Symbol", it should be used as a function
    'no-new-symbol': 'error',
    // Symbols must have descriptions
    'symbol-description': 'error',
    // No octal literals
    'no-octal': 'error',
    // No octal escape sequences
    'no-octal-escape': 'error',
    // No \8 or \9 esape sequences
    'no-nonoctal-decimal-escape': 'error',
    // No calling Math, JSON, Reflect and Atomics objects as functions
    'no-obj-calls': 'error',
    // No paramater reassignment (exceptions for reduce accumulators)
    'no-param-reassign': [
      'error',
      { ignorePropertyModificationsFor: ['acc', 'accumulator'] }
    ],
    // Disallow ++ and -- (except for loops)
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // Disallow returning values from Promise executor functions
    'no-promise-executor-return': 'error',
    // Disallow Use of __proto__
    'no-proto': 'error',
    // No direct use of prototype built-ins
    'no-prototype-builtins': 'off',
    // No variable redeclaration
    'no-redeclare': 'error',
    // Disallow multiple spaces in regular expression literals
    'no-regex-spaces': 'error',
    // No javascript: URLs
    'no-script-url': 'error',
    // Use isNaN rather than comparators to check NaN
    'use-isnan': 'error',
    // Disallow use of undefined as a variable
    'no-undefined': 'error',
    // No unreachable code
    'no-unreachable': 'error',
    // No loops with one iteration
    'no-unreachable-loop': 'error',
    // No unnecessary ternary statements
    'no-unneeded-ternary': 'error',
    // No self-assignments (e.g. foo = foo)
    'no-self-assign': 'error',
    // No self-comparisons (e.g. foo === foo)
    'no-self-compare': 'error',
    // No comma operator
    'no-sequences': 'error',
    // Use template literals over concatenation
    'prefer-template': 'error',
    // Use spread operator over .apply()
    'prefer-spread': 'error',
    // Prefer rest parameters over arguments keyword
    'prefer-rest-params': 'error',
    // No concatenation of two string literals on one line
    'no-useless-concat': 'error',
    // No useless backreferences in regular expressions
    'no-useless-backreference': 'error',
    // No unused variables
    'no-unused-vars': 'error',
    // No unused labels
    'no-unused-labels': 'error',
    // No unused expressions (e.g. "n + 1" without an assignment)
    'no-unused-expressions': 'error',
    // No use of optional chaining where the undefined value is not allowed
    'no-unsafe-optional-chaining': 'error',
    // Setters must not have return values
    'no-setter-return': 'error',
    // Don't throw literals (prefer Error object)
    'no-throw-literal': 'error',
    // No template ${var} syntax in string literals
    'no-template-curly-in-string': 'error',
    // No unnecessary "return await"
    'no-return-await': 'error',
    // No shadowing of variables in upper scopes
    'no-shadow': 'error',
    // No shadowing of restricted names
    'no-shadow-restricted-names': 'error',
    // No arrays with empty entries (except no entries)
    'no-sparse-arrays': 'error',
    // No this before super() in constructors
    'no-this-before-super': 'error',
    // No initializing to undefined
    'no-undef-init': 'error',
    // No unmodified conditions of loops
    'no-unmodified-loop-condition': 'error',
    // No control flow statements in finally blocks
    'no-unsafe-finally': 'error',
    // Disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',
    // No use of variables or functions before definition
    'no-use-before-define': 'error',
    // No unnecessary .call() and .apply()
    'no-useless-call': 'error',
    // No unnecessary catch in try-catch statements
    'no-useless-catch': 'error',
    // No unnecessary computed property keys in objects and classes
    'no-useless-computed-key': 'error',
    // No unnecessary class constructors
    'no-useless-constructor': 'error',
    // No useless escapes
    'no-useless-escape': 'error',
    // No useless renames when importing, exporting or destructuring
    'no-useless-rename': 'error',
    // No useless return statements
    'no-useless-return': 'error',
    // Disallow use of void operator
    'no-void': 'error',
    // Disallow use of with statements
    'no-with': 'error',
    // Use Error objects with Promise.reject
    'prefer-promise-reject-errors': 'error',
    // No assignments that can lead to race conditions if using await or yield
    'require-atomic-updates': 'error',
    // No async without await
    'require-await': 'error',
    // No generators without yield
    'require-yield': 'error',

    /*
     * Warnings
     */
    // Warning comment patterns, for example: "// TODO: Implement later"
    'no-warning-comments': [
      'warn',
      { terms: ['TODO', 'FIX', 'FIXME'], location: 'start' }
    ],

    /*
     * Situational
     */
    // No console object by default (can re-enable for Node.js)
    'no-console': 'error',
    // No debugger keyword (probably a mistake to commit)
    'no-debugger': 'error',
    // Require strict mode (implicit when using ES6 modules)
    'strict': 'error',

    /*
     * Redundant: rules which are made redundant by less specific rules
     */
    // Vars aren't allowed, no need to check their scope
    'block-scoped-var': 'off',

    /*
     * Decide Later
     */
    // Not sure, wait until imports libary is also used
    'sort-imports': 'off',
    // Complex options, review each case before deciding
    'padding-line-between-statements': 'off',
    // Review specific cases later
    'prefer-destructuring': 'error',
    // No sure if this is really a problem
    'require-unicode-regexp': 'off',
    // Need to review options
    'func-names': ['error', 'as-needed'],

    /*
     * Unused rules
     */
    // Cyclomatic complexity limit not set
    'complexity': 'off',
    // Function names don't need to match with their variable or property assignments
    'func-name-matching': 'off',
    // Use a consistent variable for referencing this from another scope
    'consistent-this': 'off',
    // Don't disallow any names in assignment and function names
    'id-denylist': 'off',
    // Don't disallow any naming convention allowed by other rules
    'id-match': 'off',
    // Allow assignments to be initialised with or without a value
    'init-declarations': 'off',
    // Comments above are preferred but inline is situationally acceptable
    'line-comment-position': 'off',
    // No maximum file length
    'max-lines': 'off',
    // No maximum function length
    'max-lines-per-function': 'off',
    // Don't limit the number of statements a function can have
    'max-statements': 'off',
    // Don't check for control characters in regex
    'no-control-regex': 'off',
    // Allow inline comments
    'no-inline-comments': 'off',
    // Not necessary with block scoped functions
    'no-inner-declarations': 'off',
    // Allow nested "else if"
    'no-lonely-if': 'off',
    // Allow numbers that aren't assigned to variables
    'no-magic-numbers': 'off',
    // Don't restrict typeof to basic types
    'valid-typeof': 'off',
    // Let the developer decide how to sort variables
    'sort-vars': 'off',
    /*
     * Let the developer decide the order of variables and other statements
     * 'no-use-before-define' prevents hoisting issues instead
     */
    'vars-on-top': 'off',
    // Let the developer decide how to sort object keys
    'sort-keys': 'off',
    // Allow ternary operators
    'no-ternary': 'off',
    // Don't care if the is specified or not, when parsing decimals (old ES5 problem)
    'radix': 'off',

    /*
     * Stylistic rules
     */
    // Require braces even when they are optional (e.g. single line if)
    'curly': ['error', 'all'],
    // Require camelCase variable names
    'camelcase': 'error',
    // Require constructor names to use PascalCase
    'new-cap': 'error',
    // No unexpected tab characters
    'no-tabs': 'error',
    // Dot notation should be preferred where possible
    'dot-notation': 'error',
    // Generators should have a single space after the star
    'generator-star-spacing': 'error',
    // Variable and property names must be at least 3 chars long
    'id-length': ['error', { min: 3 }],
    // Properties of a class must be spaced with blank lines
    'lines-between-class-members': ['error', 'always'],
    // Only define a single class per file
    'max-classes-per-file': ['error', 1],
    // Blocks cannot be more than 4 (default) deep
    'max-depth': 'error',
    // Limit the number of nested callbacks
    'max-nested-callbacks': ['error', 5],
    // Limit the number of parameters a function can have
    'max-params': ['error', 3],
    // Only one statement per line
    'max-statements-per-line': ['error', { max: 1 }],
    // Comments don't need to be capitalized
    'capitalized-comments': 'off',
    // Used the 'starred-block' comment style
    'multiline-comment-style': ['error', 'starred-block'],
    // Always space before comments
    'spaced-comment': ['error', 'always'],
    // No dangling underscores in identifiers
    'no-underscore-dangle': 'error',
    // No restricted global list
    'no-restricted-globals': 'off',
    // No restricted property name list
    'no-restricted-properties': 'off',
    // No restricted import name list
    'no-restricted-imports': 'off',
    // No restricted export name list
    'no-restricted-exports': 'off',
    // No restricted syntax list
    'no-restricted-syntax': 'off',
    // Prefer object literal shorthands
    'object-shorthand': ['error', 'consistent-as-needed'],
    // No operator shorthands (x = x / y) over (x /= y)
    'operator-assignment': ['error', 'never'],
    // Prefer arrow functions for callbacks
    'prefer-arrow-callback': 'error',
    // Prefer the ES2016 exponential operator over Math.pow()
    'prefer-exponentiation-operator': 'error',
    // Prefer ES2018 capture groups
    'prefer-named-capture-group': 'error',
    // Prefer numeric (decimal) literals
    'prefer-numeric-literals': 'error',
    // Prefer object spread over Object.assign()
    'prefer-object-spread': 'error',
    // Prefer regex literals where possible
    'prefer-regex-literals': 'error',

    /*
     * Disable stylistic rules which clash with Prettier
     */
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',
    'dot-location': 'off',
    'eol-last': 'off',
    'func-call-spacing': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'generator-star': 'off',
    'generator-star-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    'indent': 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'max-len': 'off',
    'multiline-ternary': 'off',
    'newline-per-chained-call': 'off',
    'new-parens': 'off',
    'no-arrow-condition': 'off',
    'no-comma-dangle': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-floating-decimal': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-reserved-keys': 'off',
    'no-space-before-semi': 'off',
    'no-trailing-spaces': 'off',
    'no-unexpected-multiline': 'off',
    'no-whitespace-before-property': 'off',
    'no-wrap-func': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'quotes': 'off',
    'quote-props': 'off',
    'rest-spread-spacing': 'off',
    'semi': 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'space-after-function-name': 'off',
    'space-after-keywords': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-before-function-parentheses': 'off',
    'space-before-keywords': 'off',
    'space-in-brackets': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-return-throw-case': 'off',
    'space-unary-ops': 'off',
    'space-unary-word-ops': 'off',
    'switch-colon-spacing': 'off',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'off'
  }
};
