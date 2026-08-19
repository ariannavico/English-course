/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split the monolith into cacheable chunks: third-party libs, the
        // didactic content registry, and the app itself. Page code is already
        // route-split via React.lazy (see app/routes.tsx).
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Firebase is optional + only dynamically imported — keep it in its
            // own chunk so it stays lazy and never bloats the initial load.
            if (id.includes("firebase") || id.includes("@firebase")) return "firebase";
            return "vendor";
          }
          if (id.includes("/src/data/")) return "content";
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
  },
});
