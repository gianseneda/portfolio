import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  // Configs padrão do Next
  ...nextVitals,
  ...nextTs,

  // Seus plugins e regras customizadas
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // React e Next
            ["^react", "^next"],

            // Bibliotecas externas
            ["^@?\\w"],

            // Aliases do projeto (@/)
            ["^@/"],

            // Imports relativos
            ["^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./"],

            // Estilos
            ["^.+\\.css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },

  // Overrides dos ignores
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
