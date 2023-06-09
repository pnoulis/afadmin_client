/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https:vitejs.dev/config/
export default defineConfig({
  base: "/administration/",
  plugins: [
    react({
      babel: {
        plugins: ["@babel/plugin-syntax-import-assertions"],
      },
    }),
    svgr(),
  ],
  define: {
    "import.meta.env.BACKEND_URL": JSON.stringify(process.env.BACKEND_URL),
    "import.meta.env.BACKEND_AUTH_USERNAME": JSON.stringify(
      process.env.BACKEND_AUTH_USERNAME
    ),
    "import.meta.env.BACKEND_AUTH_PASSWORD": JSON.stringify(
      process.env.BACKEND_AUTH_PASSWORD
    ),
  },
  build: {
    outDir: "dist",
    target: "esnext",
    sourcemap: true,
    emptyOutDir: true,
  },
  test: {
    // ...
    include: [
      ...configDefaults.include,
      "tests.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
  },
});
