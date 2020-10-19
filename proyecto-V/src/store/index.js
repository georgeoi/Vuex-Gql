import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
  state: {
    tareas:[],
    filtro:"",
    notificar: null,
    contadorEliminadas: 0
  },
  mutations: {
    setTareas(state,tareas){
      state.tareas = tareas;
    },
    agregarTarea(state,tarea){
      state.tareas.push(tarea);
      state.notificar="agregar";
    },
    removerTarea(state, index){
      state.tareas.splice(index,1)
      state.contadorEliminadas++;
      state.notificar="eliminar";
    },
    modificarTareas(state,{index,tarea}){
      Vue.set(state.tareas,index,tarea);
      state.notificar="editar";
    },
    setFiltro(state, value){
      state.filtro = value;
    },
    setNotificar(state, val){
      state.notificar = val;
    }
  },
  actions: {
    cargarTareas({commit}){
      commit("setTareas",["Aprender Vue", "Aprender Vuex", "Aprender Vuetify"])
    }
  },
  getters:{
    obtenerTareasFiltradas(state){
      return state.tareas.filter(tarea => tarea.toLowerCase().indexOf(state.filtro) !== -1)
  },
  },
  modules:{
  },
})
