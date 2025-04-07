// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-03-11",
  srcDir: 'app/',
  dir: {
    app: 'app'
  },
  ssr: true
})