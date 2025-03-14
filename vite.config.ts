import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/cyberpunk-avatar-portal/", // Ensure this matches your repo name
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    host: true,
    strictPort: true,
    hmr: false, // Disable Hot Module Replacement for GitHub Pages
  },
});
