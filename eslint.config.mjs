import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import path from "node:path";
import { includeIgnoreFile } from "@eslint/compat";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  includeIgnoreFile(gitignorePath),
  { files: ["**/*.{ts}"] },
  {
    languageOptions: { globals: globals.node },
    linterOptions: {
      noInlineConfig: true,
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
);
