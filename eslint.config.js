import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "react/prop-types": "off"
    }
  },
  {
    files: ["*.config.{js,cjs}"],
    languageOptions: { globals: globals.node }
  },
  {
    files: ["**/*.cjs"],
    languageOptions: { sourceType: "commonjs" }
  },
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: { version: "detect" }
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/prop-types": "off"
    }
  }
]);
