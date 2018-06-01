<template>
  <div class="project-image-group">
    <ProjectItemImage
      v-for="(item, index) in items.items"
      :item="item"
      :key="index"
    />
  </div>
</template>

<script>
import ProjectItemImage from "~/components/project/ProjectItemImage.vue"
export default {
  name: "ProjectItemMobileBrowserGroup",
  components: {
    ProjectItemImage
  },
  props: {
    items: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.project-image-group {
  padding: 0 1.5vw;

  @include media-query(min, $bp-small) {
    display: flex;
    justify-content: space-between;
    max-width: 1114px;
    margin: 0 auto 4rem;
  }

  @include media-query(max, $bp-small) {
    margin: 0 auto 2rem;
  }

  .project-image.project-image--mobile {
    margin-left: 0.5vw;
    margin-right: 0.5vw;
  }
}
</style>
