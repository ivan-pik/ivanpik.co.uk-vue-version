export default function(context) {
  let projectSlug = context.params.id
  let projects = context.store.state.projects

  let activeProject = projects.find(project => {
    return project.url === projectSlug
  })

  if (!activeProject) {
    return context.redirect("/404")
  }

  context.store.commit("setActiveProjectSlug", activeProject.url)
}
