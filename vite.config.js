/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { loadenv } from "js_utils/node/loadenv";
import { createHtmlPlugin } from "vite-plugin-html";

const ENVIRONMENT = loadenv(".", {});

// https:vitejs.dev/config/
export default defineConfig({
  base: ENVIRONMENT.BASENAME,
  define: {
    __STATIC_ENV__: ENVIRONMENT,
    __MQTT_CLIENT_LIB__: JSON.stringify("precompiled-mqtt"),
  },
  plugins: [
    react({
      babel: {
        plugins: ["@babel/plugin-syntax-import-assertions"],
      },
    }),
    svgr(),
    createHtmlPlugin({
      minify: false,
      entry: ENVIRONMENT.SCRATCH ? "src/index.scratch.jsx" : "src/index.jsx",
      template: ENVIRONMENT.SCRATCH ? "index.scratch.html" : "index.html",
      inject: {
        data: {
          title: "agent factory",
          BASENAME: ENVIRONMENT.BASENAME,
        },
      },
    }),
  ],
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
