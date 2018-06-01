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
    scrollBehavior: function(to, from, savedPosition) {
      let top =
        document.querySelector("#top").getBoundingClientRect().top +
        window.scrollY

      if (from.name != "project-id" && to.name == "project-id") {
        setTimeout(function() {
          console.log("top", top)
          window.scrollTo({
            top: top,
            behavior: "smooth"
          })
        }, 0)
      } else if (from.name == "project-id" && to.name == "project-id") {
        setTimeout(function() {
          console.log("top", top)
          console.log("savedPosition", savedPosition)
          window.scrollTo({
            top: savedPosition ? savedPosition.y : top
          })
        }, 100)
      }
    }
  },

  /*
	** Customize the progress bar color
	*/
  loading: { color: "#e55407" },
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
