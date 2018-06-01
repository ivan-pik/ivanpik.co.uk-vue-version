<template>
  <article
    id="project"
    class="project"
  >
    <ProjectsNavigation
      :display-title="false"
      :projects="projects"
      :active-project-slug="activeProject.url"
      class="project-navigation--top"
    />

    <ProjectIntro
      :name="activeProject.name"
      :client="activeProject.client"
      :client-description="activeProject.clientDescription"
      :role="activeProject.role"
    />

    <ProjectDescription
      :description="activeProject.description"
    />

    <ProjectItems
      :items="activeProject.items"
    />
		
    <NextProject
      :projects="projects"
      :active-project-slug="activeProject.url"
    />

    <ProjectsNavigation
      :display-title="false"
      :projects="projects"
      :active-project-slug="activeProject.url"
      class="project-navigation--bottom"
    />
  </article>
</template>

<script>
import ProjectIntro from "~/components/project/ProjectIntro.vue"
import ProjectDescription from "~/components/project/ProjectDescription.vue"
import ProjectItems from "~/components/project/ProjectItems.vue"
import ProjectsNavigation from "~/components/ProjectsNavigation.vue"
import NextProject from "~/components/NextProject.vue"

export default {
  middleware: "getProject",
  components: {
    ProjectIntro,
    ProjectDescription,
    ProjectItems,
    ProjectsNavigation,
    NextProject
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
    activeProject() {
      return this.$store.getters.activeProject
    }
  }
}
</script>
