// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  css: [
    '~/assets/styles/index.scss',
  ],
  runtimeConfig: {
    public: {
      vueAppApi: process.env.VUE_APP_API,
      vueAppApiHost: process.env.VUE_APP_API_HOST,
      vueAppTinymceKey: process.env.VUE_APP_TINYMCE_KEY,
    }
  },
  routeRules: {
    '/static/**': {
      proxy: process.env.VUE_APP_API_HOST + 'static/**',
    }
  }
})