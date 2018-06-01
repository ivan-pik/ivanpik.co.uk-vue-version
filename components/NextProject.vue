<template>
  <div 
    v-if="!isLastProject && nextProject"
    class="next-project"
  >
    <nuxt-link 
      :to="'/project/' + nextProject.url" 
      class="next-project__link"
    >
      Next  
      <span class="next-project__project-name">
        {{ nextProject.name }}
      </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    },
    activeProjectSlug: {
      type: String,
      default: null
    }
  },
  computed: {
    activeProjectOrder() {
      return Math.min(
        this.projects
          .map(item => {
            return item.url
          })
          .indexOf(this.activeProjectSlug),
        this.projects.length + 1
      )
    },
    nextProject() {
      return this.projects[this.activeProjectOrder + 1]
    },
    isLastProject() {
      return this.projects.length === this.activeProjectOrder + 1
    }
  }
}
</script>

<style lang="scss">
.next-project {
  @extend %main-wrapper;
  @extend %font-size--x-small;
  padding-top: 4em;
}

.next-project__link {
  display: block;
  @include cssArrow();
  position: relative;
  top: 1px;
  z-index: 2;
  padding: 0 33px 2.2rem 0;
}

.next-project__project-name {
  @extend %font-size--h2;
  margin-top: 0.4em;
  font-weight: 700;
  text-transform: none;
  display: block;
  color: $color-font--body;
  font-family: $font-family-headings;
  letter-spacing: 0;
}
</style>
