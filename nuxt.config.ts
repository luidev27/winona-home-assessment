// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/main.css'],
  modules: ["@pinia/nuxt"],
  
  runtimeConfig: {
    public: {
      apiBase: "https://2gtshonemmlvswaqfcepdjsbqy0rdwth.lambda-url.us-west-2.on.aws",
      apiAuth: "ZDY0MTg3ZDUtMTVlOS00ZDZmLTk5OTMtNzg2MGE2NGM2ZWZmOiBJZiB5b3Ugc2VlIHRoaXMsIGxldCBtZSBrbm93Lg=="
    }
  }
});