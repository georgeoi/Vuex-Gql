import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag';


import graphqlClient from '../utils/graphql';
Vue.use(Vuex)

const REMOVE_TASK= gql`
  mutation removeTask($id: ID!){
    deleteTask(id: $id)
  }`

const UPDATE_TASK= gql`
  mutation updateTask($id:ID!, $name:String!){
  updateTask(id:$id input:{name:$name})
  {
    name
    id
  }
}`

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
    agregarTarea(state){
      state.notificar="agregar";
    },
    removerTarea(state){
      state.contadorEliminadas++;
      state.notificar="eliminar";
    },
    modificarTareas(state){
      // Vue.set(state.tareas,index,tarea);
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
    async cargarTareas({commit}){
      const response = await graphqlClient.query({
        query: gql`
          query Tasks{
            tasks{
              name
              id
            }
          }`,
      })
      commit("setTareas", response.data.tasks);
    },
    remueveTarea({commit},id){
      const dni= id
      graphqlClient.mutate({
          mutation: REMOVE_TASK,
          variables: {
          id:dni,
          }
      });
      commit("removerTarea")
    },
    actualizaTarea({commit},{id,tarea}){
      console.log(tarea)
      console.log(id)
      graphqlClient.mutate({
        mutation: UPDATE_TASK,
        variables: {
        id:id,
        name: tarea,
        }
    });
    commit("modificarTareas")
    }
  },

  getters:{
    obtenerTareasFiltradas(state){
      console.log(state.tareas)
      return state.tareas.filter(tarea => tarea.name.toLowerCase().indexOf(state.filtro) !== -1)
     
  },
  },
  modules:{
  }
  })
