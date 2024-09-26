import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@contexts": "/src/contexts",
      "@hooks": "/src/hooks",
      "@svg": "/src/svg",
      "@type": "/src/type",
    },
  },
});
