import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Use the function form of defineConfig to access the mode
export default defineConfig(({ mode }) => {
  return {
    // Set base conditionally based on the mode
    base: mode === 'production' ? "/Youtube-Live-Chat-Fullscreen-Docs/" : "/",
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  };
});
