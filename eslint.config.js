import configPrettier from "eslint-config-prettier";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

import js from "@eslint/js";

export default tseslint.config(
  configPrettier,
  { ignores: ["dist", "node_modules", "vite.config.mts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    // files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react-compiler": reactCompiler,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react-compiler/react-compiler": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      // "react/jsx-pascal-case": ["warn", { allowLeadingUnderscore: true }],
    },
  },
);
