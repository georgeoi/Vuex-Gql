<template>
    <div>
        <v-text-field label="Nueva Tarea" v-model="tarea" @keyup.enter="nuevaTarea"/>
        <v-btn color="primary" @click="nuevaTarea">Agregar</v-btn> 
    </div>
</template>

<script>
    import {mapMutations} from "vuex"
    export default {
        name: "tareasNueva",
        data(){
            return{
                tarea:""
            }
        },
        methods:{
            ...mapMutations(["agregarTarea"]),
            nuevaTarea(){
                if(this.tarea.length>0){
                    this.agregarTarea(this.tarea)
                    this.tarea=""
                }else{
                    alert("no tiene caracterees")
                }
            }
        }
    }
</script>

<style scoped>

</style>