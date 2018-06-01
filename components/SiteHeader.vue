<template>
  <header class="site-header">
    <div class="site-header__wrapper">

      <h2 class="site-header__name">
        <nuxt-link to="/" class="site-header__name-link" data-transition-to="index">Ivan Pik</nuxt-link>
      </h2>

      <h3 class="site-header__occupation">
        Front&#8209;End Developer
      </h3>

      <nav class="navigation">
        <ul class="navigation__list">
          <li class="navigation__item navigation__item--contact">
            <a href="mailto:contact@ivanpik.co.uk" class="navigation__link">e-mail</a>
          </li>
          <li ref="worklink"
              :style="indexLinkStyle"
              class="navigation__item navigation__item--index"
          >
            <nuxt-link 
              to="/"
              class="navigation__link"
              data-transition-to="index" @click.native="displayLinkTo('about')"
            >
              view my work
            </nuxt-link>
          </li>
          <li ref="aboutlink" 
              :style="aboutLinkStyle" 
              class="navigation__item navigation__item--about"
          >
            <nuxt-link 
              to="/about/" 
              class="navigation__link" 
              data-transition-to="about" @click.native="displayLinkTo('index')"
            >
              more about me
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      indexLinkDisplayed: true,
      aboutLinkDisplayed: false,
      indexLinkWidth: 0,
      aboutLinkWidth: 0,
      indexLinkStyle: {},
      aboutLinkStyle: {}
    }
  },
  watch: {
    $route(route) {
      if (route.name == "about") {
        this.displayLinkTo("index")
      } else {
        this.displayLinkTo("about")
      }
    }
  },
  mounted() {
    this.setLinkSizes()
    if (this.$route.name == "index") {
      this.displayLinkTo("about")
    } else if (this.$route.name == "about") {
      this.displayLinkTo("index")
    } else {
      this.displayLinkTo("about")
    }
    window.addEventListener("resize", this.resizeHandler())
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandler())
  },
  methods: {
    displayLinkTo(item) {
      this.indexLinkDisplayed = item == "index"
      this.aboutLinkDisplayed = item == "about"

      if (item == "about") {
        this.aboutLinkStyle = {
          "max-width": this.aboutLinkWidth + 10 + "px",
          "transition-delay": "250ms"
        }
        this.indexLinkStyle = {
          "max-width": 0,
          "transition-delay": "0ms"
        }

        setTimeout(() => {
          this.aboutLinkStyle = {
            "max-width": this.aboutLinkWidth + 10 + "px",
            "transition-delay": "0ms"
          }
          this.indexLinkStyle = {
            "max-width": 0,
            "transition-delay": "250ms"
          }
        }, 500)
      }

      if (item == "index") {
        this.indexLinkStyle = {
          "max-width": this.aboutLinkWidth + 10 + "px",
          "transition-delay": "250ms"
        }
        this.aboutLinkStyle = {
          "max-width": 0,
          "transition-delay": "0ms"
        }

        setTimeout(() => {
          this.indexLinkStyle = {
            "max-width": this.aboutLinkWidth + 10 + "px",
            "transition-delay": "0ms"
          }
          this.aboutLinkStyle = {
            "max-width": 0,
            "transition-delay": "250ms"
          }
        }, 500)
      }
    },
    setLinkSizes() {
      this.indexLinkWidth = this.$refs.worklink.scrollWidth
      this.aboutLinkWidth = this.$refs.aboutlink.scrollWidth
    },
    resizeHandler() {
      this.setLinkSizes()
    }
  }
}
</script>

<style lang="scss">
.site-header {
  @include media-query(max, $bp-small) {
    padding: 0 0 2.6rem 0;
  }
}

.site-header__wrapper {
  @extend %main-wrapper;
  @include media-query(min, $bp-small) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 21rem;
    height: 100vh;
    max-height: 60vh;
  }
  @include media-query(max, 400px) {
    padding-right: 0;
  }
}

.site-header__name {
  @extend %font-size--h1;
  margin: 0 0 1.2em 0;
  @include media-query(max, $bp-small) {
    margin: 1.5em 0 1em 0;
  }
  a {
    padding-bottom: 0.2em;
  }
}

.site-header__occupation {
  @extend %font-size--h1;
  margin-bottom: 0.6em;
}

.navigation {
  @include media-query(max, $bp-small) {
    margin-bottom: 3.2rem;
  }
}

.navigation__list {
  display: flex;
}

.navigation__item {
  white-space: nowrap;
  overflow: hidden;
  transition: all $fade-in-time ease-in-out;
}

.navigation__link {
  @extend %font-size--body;
  font-weight: 700;
  display: inline-block;
  padding: 0 0 0.5em 0;
  font-family: $font-family-headings;
  box-shadow: inset 0px -3px 0px 0px $color-font--link;
}

.navigation__item--contact {
  margin-right: 1em;
}
</style>
