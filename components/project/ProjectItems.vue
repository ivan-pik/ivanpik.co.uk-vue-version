<template>
  <div>
    <ProjectItem 
      v-for="(item, index) in items"
      :items="item"
      :key="'item'+index"
    />
  </div>
</template>

<script>
import ProjectItem from "~/components/project/ProjectItem.vue"
export default {
  name: "ProjectItems",
  components: {
    ProjectItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
