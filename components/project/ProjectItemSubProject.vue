<template>
  <section class="project-partial">
    <header
      v-if="showProjectHeader"
      class="project-partial__header"
    >
      <h2
        v-if="items.title"
        class="project-partial__title"
        v-html="items.title"
      />
      <p
        v-if="items.description"
        class="project-partial__description"
        v-html="items.description"
      />
    </header>

    <SubProjectItem 
      v-for="(subitem, index) in items.items"
      :key="index"
      :items="subitem"
    />
  </section>
</template>

<script>
import SubProjectItem from "~/components/project/SubProjectItem.vue"

export default {
  name: "ProjectItemSubProject",
  components: {
    SubProjectItem
  },
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  computed: {
    showProjectHeader() {
      return !!(this.items.title && this.items.description)
    }
  }
}
</script>

<style lang="scss">
.project-partial {
  margin-bottom: 6rem;
}

.project-partial__header {
  @extend %main-wrapper;
  margin-bottom: 3.4rem;
  @include media-query(max, $bp-small) {
    margin-bottom: 2em;
  }
}

.project-partial__title {
  @extend %font-size--h2;
  margin-bottom: 0.8em;
}

.project-partial__description {
  margin-bottom: 0.4em;
}
</style>
