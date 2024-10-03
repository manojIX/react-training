import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@contexts": "/src/contexts",
      "@hooks": "/src/hooks",
      "@svg": "/src/svg",
      "@type": "/src/type",
      "@pages": "/src/pages",
    },
  },
});
