module.exports = {
  // "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "import"
  ],
  "rules": {
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": [
      "off",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": [
      "off",
      null
    ],
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-parens": [
      "off",
      "as-needed"
    ],
    "camelcase": "error",
    "comma-dangle": "off",
    "curly": [
      "error",
      "multi-line"
    ],
    "eol-last": "off",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "id-blacklist": [
      "error",
      "any",
      // "Number",
      // "number",
      // "String",
      // "string",
      // "Boolean",
      // "boolean",
      // "Undefined",
      // "undefined"
    ],
    "id-match": "error",
    "import/no-deprecated": "error",
    "linebreak-style": "off",
    "max-len": [
      "error",
      {
        "code": 160
      }
    ],
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-duplicate-imports": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-extra-semi": "off",
    "no-fallthrough": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": "off",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-return-await": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-underscore-dangle": "error",
    "no-unused-expressions": [
      "error",
      {
        "allowTaggedTemplates": true,
        "allowShortCircuit": true
      }
    ],
    "no-unused-labels": "error",
    "no-var": "error",
    "one-var": [
      "error",
      "never"
    ],
    "quote-props": "off",
    "radix": "error",
    "space-before-function-paren": "off",
    "space-in-parens": [
      "off",
      "never"
    ],
    "spaced-comment": "error",
    "use-isnan": "error",
    "handle-callback-err": [
      2,
      "^(err|error)$"
    ],
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-inner-declarations": [
      2,
      "functions"
    ],
    "no-unexpected-multiline": 2,
    "no-sparse-arrays": 2,
    "valid-typeof": 2,
    "@typescript-eslint/tslint/config": [
      "error",
      {
        "rules": {
          "jsdoc-format": true,
          "no-reference-import": true,
          "strict-type-predicates": true,
        }
      }
    ]
  }
};
