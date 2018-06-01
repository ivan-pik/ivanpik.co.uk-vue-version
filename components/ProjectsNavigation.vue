<template>
  <div>
    <nav 
      v-if="!alwaysOpen" 
      class="project-navigation"
    >
      <a 
        :class="{
          'project-navigation__link--close' : open
        }"
        href="/#projects"
        class="project-navigation__link project-navigation__link--other"
        @click.prevent="toggleProjectsNav"
      >
        <span class="project-navigation__icon"/>
        <span>
          {{ buttonText }}
        </span>
      </a>
    </nav>

    <nav ref="list"
         :style="listStyle"
         :class="[projectsListClass, {
           'is-touch' : isTouch
         }]"
         class="projects"
    >
      <h2
        v-if="displayTitle"
        class="projects__title"
      >
        My Work
      </h2>

      <ul class="projects__list">
        <li 
          v-for="project in projects" 
          :key="project.url"
          class="projects__item"
        >
          <nuxt-link 
            :to="'/project/' + project.url"
            :class="{
              'projects__item-link--displayed' : markActive && project.url == activeProjectSlug
            }"
            class="projects__item-link"
            data-transition-to="project"
            @click.native="closeNav"
          >
            <h3 class="projects__item-title">
              {{ project.name }}
            </h3>
            <span 
              v-show="markActive && project.url == activeProjectSlug"
              class="projects__item-link-displayed-note">
              Currently Displayed
            </span>
          </nuxt-link>
        </li>
      </ul>

      <ExternalLinks />
    </nav>
  </div>
</template>

<script>
import ExternalLinks from "~/components/ExternalLinks.vue"

export default {
  components: {
    ExternalLinks
  },
  props: {
    displayTitle: {
      type: Boolean,
      default: true
    },
    alwaysOpen: {
      type: Boolean,
      default: false
    },
    markActive: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      open: false,
      listHeight: 500,
      isTouch: false
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
    activeProjectSlug() {
      return this.$store.state.activeProjectSlug
    },
    projectsListClass() {
      return {
        "is-open": this.open
      }
    },
    listStyle() {
      return {
        "max-height": this.open ? this.listHeight + "px" : 0
      }
    },
    buttonText() {
      return this.open ? "Close" : "My Work"
    }
  },
  created() {
    if (this.alwaysOpen) {
      this.open = true
    }
  },
  mounted() {
    this.setListSize()
    window.addEventListener("resize", this.setListSize)
    window.addEventListener("touchstart", () => {
      this.isTouch = true
    })
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setListSize)
  },
  methods: {
    toggleProjectsNav() {
      this.open = !this.open
    },
    closeNav() {
      if (!this.alwaysOpen) {
        // this.open = false;
      }
    },
    setListSize() {
      this.listHeight = this.$refs.list.scrollHeight
    }
  }
}
</script>


<style lang="scss">
.projects {
  @extend %main-wrapper;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.2s ease-in-out, opacity 0.2s ease-in-out;
  &.is-open {
    opacity: 1;
    max-height: 60em;
  }
}

.projects__title {
  @extend %font-size--x-small;
  padding: 1.4em 0 0 0;
}

.projects__item-link {
  display: block;
  padding: 2.65rem 33px 2.8rem 0;
  position: relative;
  @include media-query(max, $bp-small) {
    padding: 1.2rem 33px 1.35rem 0;
  }
  @include cssArrow();

  &.projects__item-link--displayed {
    pointer-events: none;
    &:after,
    &:before {
      display: none;
    }
  }
}

.projects:not(.is-touch) {
  .projects__list:hover .projects__item-link {
    &:after,
    &:before {
      opacity: 0.2;
    }
    &:hover {
      &:after,
      &:before {
        opacity: 1;
      }
    }
  }
}

.projects__item {
  box-shadow: inset 0px -1px 0px 0px $color-border--projects-list;
}

.projects__item-link-displayed-note {
  @extend %font-size--small;
  display: block;
  color: $color-font--note;
  line-height: 1.2;
  @include media-query(min, 460px) {
    position: absolute;
    top: 50%;
    right: 0;
    height: 2em;
    line-height: 2em;
    margin-top: -1em;
  }
}

.projects__item-title {
  @extend %font-size--h2;
  color: $color-font--body;
  .projects__item-link--displayed & {
    color: $color-font--note;
  }
}

// Other Projects Toggle

.project-navigation {
  @extend %main-wrapper;
  @extend %font-size--x-small;
}

.project-navigation--top {
  margin-top: 1.2rem;
}

.project-navigation__link--other {
  .project-navigation--top & {
    box-shadow: inset 0px -1px 0px 0px $color-border;
  }

  .project-navigation--bottom & {
    border-top: 1px solid $color-border;
  }

  span {
    vertical-align: middle;
  }

  &:hover {
    .project-navigation__icon {
      &,
      &:before,
      &:after {
        background-color: $color-font--link-hover;
      }
    }
  }

  .project-navigation__icon {
    transition: (background-color 0.15s ease-in-out);
    position: relative;
    display: inline-block;
    vertical-align: middle;
    content: "";
    width: 16px;
    height: 2px;
    background-color: $color-font--link;
    margin-right: 0.6em;
    top: 0.05em;
    @include media-query(max, $bp-small) {
      width: 14px;
    }

    &:before,
    &:after {
      transition: (transform 0.15s ease-in-out);
      transform-origin: 50% 50%;
      position: absolute;
      content: "";
      display: block;
      width: 16px;
      height: 2px;
      background-color: $color-font--link;
      @include media-query(max, $bp-small) {
        width: 14px;
      }
    }
    &:before {
      transform: translate(0px, -6px);
      @include media-query(max, $bp-small) {
        transform: translate(0px, -4px);
      }
    }
    &:after {
      transform: translate(0px, 6px);
      @include media-query(max, $bp-small) {
        transform: translate(0px, 4px);
      }
    }
  }

  &.project-navigation__link--close {
    .project-navigation__icon {
      background-color: transparent;
      &:before {
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }
}

// Link

.project-navigation__link {
  display: block;
  padding: 1.2rem 0;
}
</style>
