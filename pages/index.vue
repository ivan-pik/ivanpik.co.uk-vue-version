<template>
  <div>
    <ProjectsNavigation
      :always-open="true"
      :mark-active="false"
    />
  </div>
</template>

<script>
import ProjectsNavigation from "~/components/ProjectsNavigation.vue"

export default {
  components: {
    ProjectsNavigation
  }
}
</script>
