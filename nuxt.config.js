/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    base: '/ivanpik.co.uk-vue-version/'
} : {}

module.exports = {
  head: {
    title: "Ivan Pik - Front-End Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Ivan Pik&apos;s Portfolio Site"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    script: [{ src: "/3rd_party/typekit.js" }]
  },
  modules: [
    [
      "nuxt-sass-resources-loader",
      [
        "@/assets/scss/global/_global.scss",
        "@/assets/scss/global/_mixins.scss",
        "@/assets/scss/global/_partials.scss"
      ]
    ]
  ],
  css: [{ src: "~assets/scss/main.scss", lang: "scss" }],
  router: {
    ...routerBase,
    scrollBehavior: function(to, from, savedPosition) {
      let top =
        document.querySelector("#top").getBoundingClientRect().top +
        window.scrollY

      if (from.name != "project-id" && to.name == "project-id") {
        setTimeout(function() {
          window.scrollTo({
            top: top,
            behavior: "smooth"
          })
        }, 0)
      } else if (from.name == "project-id" && to.name == "project-id") {
        setTimeout(function() {
          window.scrollTo({
            top: savedPosition ? savedPosition.y : top
          })
        }, 100)
      }
    }
  },
  loading: { color: "#e55407" },
  generate: {
    routes: [
      // @todo: read this from my projects.json file
      'project/weatherplane-com',
      'project/blubolt-ecommerce',
      'project/basekit-templates',
      'project/tuesday-events',
      'project/dobry-web',
      'project/internet-info-magazines',
      'project/experienceu',
      'project/tuesday-business-network',
      'project/internet-info-site'
    ]
  },
  /*
	** Build configuration
	*/
  build: {
    /*
		** Run ESLint on save
		*/
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
