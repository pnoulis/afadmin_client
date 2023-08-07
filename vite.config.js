/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { loadenv } from "js_utils/node/loadenv";
const ENVIRONMENT = loadenv(".", {});
import { createHtmlPlugin } from "vite-plugin-html";

// https:vitejs.dev/config/
export default defineConfig({
  base: "/administration/",
  define: {
    __STATIC_ENV__: ENVIRONMENT,
    __MQTT_CLIENT_LIB__:
      ENVIRONMENT.HOST === "browser" ? "precompiled-mqtt" : "mqtt",
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
      entry: "src/index.jsx",
      template: "index.html",
      inject: {
        data: {
          title: "agent factory",
          BASEPATH: "/administration",
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
