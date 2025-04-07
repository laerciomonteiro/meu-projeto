// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-03-11",
  srcDir: 'app/',
  dir: {
    app: 'app'
  },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true, // Garante que todos os links sejam rastreados
      routes: ['/'], // Rotas iniciais a serem pré-renderizadas
      ignore: ['**/*_payload.json'] // Ignora arquivos de payload
    }
  },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    baseURL: '/meu-projeto/' // URL base para o aplicativo
  }
})