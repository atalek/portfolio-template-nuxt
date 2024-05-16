// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
  ],
  css: ['~/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
  },

  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 400, 700],
      },
      Poppins: {
        wght: [100, 400],
      },
    },
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
  },
})
