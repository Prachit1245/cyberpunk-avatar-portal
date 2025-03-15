
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/cyberpunk-avatar-portal/", // Ensure this matches your repo name
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    hmr: false, // Disable Hot Module Replacement for GitHub Pages
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
