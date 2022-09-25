import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sasha: resolve(__dirname, "sasha.html"),
        vika: resolve(__dirname, "vika.html"),
        maks: resolve(__dirname, "maks.html"),
        nsasha: resolve(__dirname, "/ua/sasha.html"),
      },
    },
  },
});
