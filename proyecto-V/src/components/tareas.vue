<template>
    <div>
        <h2>Gestor de tareas</h2>
        <tareasNueva @nuevaTarea="agregarTarea"></tareasNueva>
        <ul>
            <li v-for="(tarea,index) in tareas" :key="index">{{tarea}}</li>
        </ul>
    </div>
</template>

<script>
import tareasNueva from "./tareasNueva"; 

export default {
    name: "tareas",
    components: {tareasNueva},
    data(){
        return{
        tareas: ["aprender vue","aprender vuex","aprender vuetify"]
        }
    },
    methods: {
        agregarTarea(tarea){
            this.tareas.push(tarea);
            
        }
    }
}
</script>

<style scoped>

</style>