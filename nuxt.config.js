export default {
  mode: 'spa',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hype Mint | NFT Art & Development Services',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We are a NFT art studio that creates and develops NFTs.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap',
        rel: 'stylesheet'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    baseUrl: 'https://hypemint.io',
    vueI18nLoader: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
    //  {
    //    code: 'pt',
    //    iso: 'pt-BR'
    //  }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */
     extend(config, ctx) {}
  }
}

