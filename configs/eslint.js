module.exports = {
  extends: ['eslint:recommended'],
  plugins: [],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  globals: {
    process: 'readonly',
  },
  rules: {
    'default-param-last': 'error',
    'no-caller': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      }
    ],
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'prefer-regex-literals': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-useless-concat': 'error',
    'no-void': 'error',
    'no-with': 'error',
    radix: 'error',
    'wrap-iife': ['error', 'any'],
    'no-async-promise-executor': 'error',
    'no-extra-parens': ['error', 'functions'],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
    'no-catch-shadow': 'error',
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
      },
    ],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],
    'array-callback-return': 'warn',
    'block-scoped-var': 'warn',
    curly: ['warn', 'multi-line'],
    eqeqeq: [
      'warn',
      'always',
      {
        null: 'ignore',
      },
    ],
    'no-div-regex': 'warn',
    'no-loop-func': 'warn',
    'no-script-url': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-useless-call': 'warn',
    'vars-on-top': 'warn',
    'no-inner-declarations': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-spread': 'warn'
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.test.js', '*.test.jsx'],
      env: {
        jest: true,
      },
    },
  ],
}
