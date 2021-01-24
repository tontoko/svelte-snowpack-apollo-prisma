module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  overrides: [
    {
      files: ["*.svelte"],
      plugins: ["svelte3"],
      processor: "svelte3/svelte3",
    },
  ],
  rules: {
    "no-var": "error",
  },
  settings: {
    // Nothing
  },
};
