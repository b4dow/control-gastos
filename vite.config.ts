import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@hook": path.resolve(__dirname, "src/hook"),
      "@schema": path.resolve(__dirname, "src/schema"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@context": path.resolve(__dirname, "src/context"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
    },
  },
});
