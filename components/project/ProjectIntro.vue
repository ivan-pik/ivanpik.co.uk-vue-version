<template>
  <header class="project-intro">

    <h1 class="project-name">{{ name }}</h1>

    <section class="project-client">
      <h2 class="project-client__caption">Client</h2>
      <p class="project-client__description">{{ client }}<template v-if="clientDescription">:</template> {{ clientDescription }}</p>
    </section>

    <section class="project-role">
      <h2 class="project-role__caption">Role</h2>
      <p class="project-role__description">{{ role }}</p>
    </section>
  </header>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    client: {
      type: String,
      default: null
    },
    clientDescription: {
      type: String,
      default: null
    },
    role: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.project-intro {
  @extend %main-wrapper;
  margin-bottom: 1.7rem;

  .project-role__caption,
  .project-client__caption {
    min-width: 6em;
  }

  .project-role {
    margin-bottom: 2rem;
  }
}

.project-name {
  @extend %font-size--h1;
  margin: 6.9rem 0 6.8rem 0;
  @include media-query(max, $bp-small) {
    margin: 2.2rem 0 0.31em 0;
  }
}

.project-client {
  margin-bottom: 2rem;
}

.project-client__description {
  margin-bottom: 0.7em;
}

.project-client-name {
  margin-bottom: 0.5rem;
}

.project-role__caption,
.project-client__caption {
  @extend %font-size--x-small;
  min-width: 4em;
  color: $color-font--note;
  margin-bottom: 0.5em;
}

.project-role__description {
  @extend %font-size--x-small;
}
</style>
