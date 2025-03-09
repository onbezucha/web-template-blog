// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['nuxt-gtag'],
  gtag: {
    id: 'GTM-W36CLFX3'
  },

  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_lfvXWEBxfGfbjWQFAx4xBHJCJbR3Pqm8WeW637V62RD',
      posthogHost: 'https://us.i.posthog.com'
    }
  }
})