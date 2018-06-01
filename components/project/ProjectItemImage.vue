<template>
  <figure 
    :class="imageType"
    class="project-image"
  >
    <ImageCaption
      v-if="item.description"
      :text="item.description"
    />
    <ImageFrame
      v-if="item.image" 
      :src="item.image.src"
      :alt="item.image.alt" 
      :width="item.image.width" 
      :height="item.image.height"
    />
  </figure>
</template>

<script>
import ImageCaption from "~/components/project/ProjectItemImage/ImageCaption.vue"
import ImageFrame from "~/components/project/ProjectItemImage/ImageFrame.vue"

export default {
  name: "ProjectItemImage",
  components: {
    ImageCaption,
    ImageFrame
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageType() {
      let suffix = () => {
        switch (this.item.type) {
          case "mobile-browser":
            return "mobile"
          case "desktop-browser":
            return "browser"
          case "image":
            return "noframe"
        }
      }
      return `project-image--${suffix()}`
    }
  }
}
</script>

<style lang="scss">
.project-image {
  &.project-image--browser,
  &.project-image--noframe {
    margin: 0 2vw 5rem;
    @include media-query(max, $bp-small) {
      margin: 0 2vw 2rem;
    }
  }

  &.project-image--mobile {
    margin: 0 2vw;
    @include media-query(max, $bp-small) {
      margin: 0 2vw 3rem;
    }
    .project-image-frame {
      @include media-query(max, $bp-small) {
        max-width: 160px;
      }
    }
  }
}
</style>
