// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from "@primevue/themes/lara";

export default defineNuxtConfig({
  css: ["~/assets/styles/main.css"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: Lara,
        options: {
          prefix: "p",
          darkModeSelector: "light",
          cssLayer: false,
        },
      },
    },
  },
});
