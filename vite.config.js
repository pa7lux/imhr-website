import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        odessaTbilisi: resolve(__dirname, "odessa-tbilisi.html"),
        teensTroubles: resolve(__dirname, "teens-troubles.html"),
        khersonMinecraft: resolve(__dirname, "kherson-minecraft.html"),
        grechaAndBombs: resolve(__dirname, "grecha-and-bombs.html"),
        mainRu: resolve(__dirname, "/ru/index.html"),
        aboutRu: resolve(__dirname, "/ru/about.html"),
        odessaTbilisiRu: resolve(__dirname, "/ru/odessa-tbilisi.html"),
        teensTroublesRu: resolve(__dirname, "/ru/teens-troubles.html"),
        khersonMinecraftRu: resolve(__dirname, "/ru/kherson-minecraft.html"),
        grechaAndBombsRu: resolve(__dirname, "/ru/grecha-and-bombs.html"),
        mainEn: resolve(__dirname, "/en/index.html"),
        aboutEn: resolve(__dirname, "/en/about.html"),
        odessaTbilisiEn: resolve(__dirname, "/en/odessa-tbilisi.html"),
        teensTroublesEn: resolve(__dirname, "/en/teens-troubles.html"),
        khersonMinecraftEn: resolve(__dirname, "/en/kherson-minecraft.html"),
        grechaAndBombsEn: resolve(__dirname, "/en/grecha-and-bombs.html"),
      },
    },
  },
});
