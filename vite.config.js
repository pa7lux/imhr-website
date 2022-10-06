import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        mainRu: resolve(__dirname, "/ru/index.html"),
        about: resolve(__dirname, "about.html"),
        aboutRu: resolve(__dirname, "/ru/about.html"),
        odessaTbilisi: resolve(__dirname, "odessa-tbilisi.html"),
        odessaTbilisiRu: resolve(__dirname, "/ru/odessa-tbilisi.html"),
        teensTroubles: resolve(__dirname, "teens-troubles.html"),
        teensTroublesRu: resolve(__dirname, "/ru/teens-troubles.html"),
        khersonMinecraft: resolve(__dirname, "kherson-minecraft.html"),
        khersonMinecraftRu: resolve(__dirname, "/ru/kherson-minecraft.html"),
        grechaAndBombs: resolve(__dirname, "grecha-and-bombs.html"),
        grechaAndBombsRu: resolve(__dirname, "/ru/grecha-and-bombs.html"),
      },
    },
  },
});
