import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./lib/concate.ts"),
      name: "Concate",
      fileName: (format) => `concate.${format}.js`,
    },
  },
});