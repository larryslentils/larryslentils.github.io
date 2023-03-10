import messages from './translations'

export default {
  mode: "universal",
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com/css?family=Muli:400,700&display=swap" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:"https://fonts.googleapis.com/css?family=Muli:400,700&display=swap",
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    "@nuxt/typescript-build",
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/sentry",
    "@nuxtjs/i18n"
  ],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages,
    },
  },
  /*
  ** Sentry configuration
  */
  sentry: {
    dsn:
      "https://d6352c3a17124246a0effb6282e65e3e@o108936.ingest.sentry.io/5269230",
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        "postcss-url": false,
        "postcss-nested": {},
        "postcss-responsive-type": {},
        "postcss-hexrgba": {},
      },
      preset: {
        autoprefixer: {
          overrideBrowserslist: [
            "defaults",
          ],
          grid: true,
        },
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
};
