// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@unocss/nuxt'
  ],
  unocss: {},
  vite: {
    devBundler: 'legacy'
  },
  typescript: {
    strict: true
  }
})
