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
        kate: resolve(__dirname, "kate.html"),
        nsasha: resolve(__dirname, "/ua/sasha.html"),
        kateua: resolve(__dirname, "/ua/kate.html"),
      },
    },
  },
});
