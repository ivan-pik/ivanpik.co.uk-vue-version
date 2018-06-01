<template>
  <div 
    class="project-long-description"
    v-html="description"/>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.project-long-description {
  @extend %main-wrapper;
  margin-bottom: 5.4em;
  @include media-query(max, $bp-small) {
    margin-bottom: 3em;
  }

  p {
    @extend %body-paragraph;
  }
}
</style>
