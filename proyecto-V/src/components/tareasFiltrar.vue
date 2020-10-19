<template>
    <div>
        <v-text-field
            hide-details
            label="Filtrar Tareas"
            type="text"
            v-model= "filtro"
        ></v-text-field>
    </div>    
</template>



<script>
import {mapMutations} from "vuex"
export default {
    name: "tareasFiltrar",
    computed:{
        filtro:{
            get(){
                return this.value
            },
            set(val){
                this.setFiltro(val)
            }
        }
    },
    methods:{
        ...mapMutations(["setFiltro"])
    }
}
</script>


<style scoped>

</style>