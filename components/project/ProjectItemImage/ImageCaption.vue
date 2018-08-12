<template>
  <figcaption
    class="project-image-caption"
    v-html="text"
  />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss">
.project-image-caption {
  align-self: stretch;
  @extend %font-size--small;

  &:after {
    display: block;
    width: 1px;
    content: "";
    background-color: $color-border--projects-list;
  }

  .project-image--browser &,
  .project-image--noframe & {
    position: relative;
    padding: 0 0 1.2em 1em;
    margin: 0 auto 0.5rem;
    width: 840px;
    max-width: 85vw;

    &:after {
      position: absolute;
      top: 0.4em;
      bottom: 0;
      left: 0;
    }
  }

  .project-image--mobile & {
    margin-bottom: 0.5rem;
    position: relative;
    text-align: center;
    &:after {
      height: 1rem;
      margin: 0.25em auto 0;
    }
  }
}
</style>
