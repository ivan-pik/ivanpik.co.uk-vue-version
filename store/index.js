import Vuex from "vuex"
import projects from "@/content/projects.json"

const createStore = () => {
  return new Vuex.Store({
    state: {
      projects: projects,
      activeProjectSlug: null
    },
    getters: {
      activeProject: state => {
        return state.projects.filter(project => {
          return project.url === state.activeProjectSlug
        })[0]
      }
    },
    mutations: {
      setActiveProjectSlug(state, slug) {
        state.activeProjectSlug = slug
      }
    }
  })
}

export default createStore
