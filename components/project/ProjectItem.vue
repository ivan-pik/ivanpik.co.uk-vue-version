<template>
  <div>
    <ProjectItemSubProject
      v-if="items.type === 'sub-project'"
      :items="items"
    />
    <ProjectItemMobileBrowserGroup
      v-else-if="items.type === 'mobile-browser-group'"
      :items="items"
    />
    <ProjectItemImage
      v-else
      :item="items"
    />
  </div>
</template>

<script>
import ProjectItemImage from "~/components/project/ProjectItemImage.vue"
import ProjectItemMobileBrowserGroup from "~/components/project/ProjectItemMobileBrowserGroup.vue"
import ProjectItemSubProject from "~/components/project/ProjectItemSubProject.vue"

export default {
  name: "ProjectItem",
  components: {
    ProjectItemImage,
    ProjectItemMobileBrowserGroup,
    ProjectItemSubProject
  },
  props: {
    items: {
      type: Object,
      required: true
    }
  }
}
</script>
