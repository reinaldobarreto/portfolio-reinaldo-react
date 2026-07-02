import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base para GitHub Pages: https://<usuario>.github.io/portfolio-reinaldo-react/
  // Em desenvolvimento, mantém raiz "/" para evitar caminhos quebrados
  base: mode === 'development' ? '/' : '/portfolio-reinaldo-react/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
