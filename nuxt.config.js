export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Гостиница "Navruz Hotel" в Ташкенте',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Отель премиум класса в Ташкенте для бизнеса и отдыха. Забронируйте свой номер онлайн!' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/favicon.png' }
    ],
    script: [
      {
        src: '/travellineRU.js',
        async: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/scss/base.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-session.js', mode: 'client' },
    { src: '~/plugins/vue-meta.js', mode: 'client' },
    { src: '~/plugins/vuelidate.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: false,
      polyfill: false,
      directiveOnly: false,
    }]
  ],
  i18n: {
    lazy: true,
    langDir: 'lang',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    locales: [
      {
        code: 'ru',
        iso: 'RU',
        file: 'ru-RU.js'
      },
      {
        code: 'uz',
        iso: 'UZ',
        file: 'uz-UZ.js'
      },
      {
        code: 'en',
        iso: 'EN',
        file: 'en-US.js'
      }
    ],
    defaultLocale: 'ru',
  },

  serverMiddleware: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
