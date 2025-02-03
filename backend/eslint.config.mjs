import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import js from "@eslint/js";

export default [
  {
    files: ["src/**/*.ts"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
      prettier: prettier
    },
    languageOptions: {
      globals: {
        ...globals.node
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
      }
    },
    rules: {
      ...typescriptEslint.configs["recommended"].rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "prettier/prettier": "error"
    }
  }
];
