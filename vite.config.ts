import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import analyze from "rollup-plugin-analyzer";
export default defineConfig({
  plugins: [solidPlugin(), analyze({ summaryOnly: true })],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
