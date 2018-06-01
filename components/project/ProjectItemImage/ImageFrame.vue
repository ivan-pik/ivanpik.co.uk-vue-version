<template>
  <span 
    :style="maxWidthStyle"
    class="project-image-frame"
  >
    <img 
      :src="'/assets/projects/' + src"
      :alt="alt" 
      :width="width" 
      :height="height"
    >
  </span>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  computed: {
    maxWidthStyle() {
      return {
        "max-width": `${this.width}px`
      }
    }
  }
}
</script>

<style lang="scss">
.project-image-frame {
  display: block;
  margin: 0 auto;
  overflow: hidden;
  background-color: $color-background--frame;
  box-shadow: 0 4px 16px rgba($color-background--frame, 0.1),
    0 3px 6px rgba($color-background--frame, 0.16);

  img {
    display: block;
    @include media-query(max, 1340px) {
      width: 100%;
      height: auto;
    }
  }
}
</style>
