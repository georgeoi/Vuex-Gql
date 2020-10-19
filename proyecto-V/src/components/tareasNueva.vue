<template>
    <div>
        <label>Nueva Tarea</label>
        <input type="text" v-model="tarea"/>
        <button @click="agregarTarea">Agregar</button> 
    </div>
</template>

<script>
    export default {
        name: "tareasNueva",
        data(){
            return{
                tarea:""
            }
        },
        methods:{
            agregarTarea(){
                if(this.tarea.length>0){
                this.$emit("nuevaTarea", this.tarea)
                }else{
                    alert("no tiene caracterees")
                }
            }
        }
    }
</script>

<style scoped>

</style>