import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  root: path.resolve(__dirname, "."),
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: command === "build" ? "/" : "/",
  server: {
    watch: { usePolling: true },
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
}));