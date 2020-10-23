<template>
    <div>
        <v-text-field label="Nueva Tarea" v-model="tarea" @keyup.enter="nuevaTarea"/>
        <v-btn color="primary" @click="nuevaTarea">Agregar</v-btn> 
    </div>
</template>

<script>
    import {mapActions, mapMutations} from "vuex"
    import gql from 'graphql-tag';
    import graphqlClient from '../utils/graphql';


const ADD_TASK= gql`
  mutation addTask($name: String!){
    createTask(input: {
      name: $name
    }){
      name
      id
    }
  }`
    export default {
        name: "tareasNueva",
        data(){
            return{
                tarea:""
            }
        },
        methods:{
            ...mapMutations(["agregarTarea"]),
            ...mapActions(["cargarTareas"]),
            nuevaTarea(){
                if(this.tarea.length>0){
                    this.agregaTarea()
                }else{
                    alert("no tiene caracterees")
                }
            },
            agregaTarea(){
                const nombre= this.tarea
                graphqlClient.mutate({
                    mutation: ADD_TASK,
                    variables: {
                    name: nombre,
                    }
                });
            this.tarea=""
            this.cargarTareas();
            this.agregarTarea();
            document.location.reload();
            }
        }
    }
</script>

<style scoped>

</style>