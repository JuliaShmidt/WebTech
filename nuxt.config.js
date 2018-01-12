module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Магазин',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Магазин'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  mode: 'spa',
  css: [
    {src: '@/assets/app.scss', lang: 'scss'}
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/api`,
    init (axios, ctx) {
      axios.defaults.ContentType = 'application/json'
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#d1e6e1'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    linkExactActiveClass: 'active'
  }
}
