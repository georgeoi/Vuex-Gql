<template>
    <ul>
        <li class="ma-2" v-for="tarea in obtenerTareasFiltradas" :key="tarea.id">
            <template v-if="editando=== tarea.id">
                <v-row>
                    <v-col cols="8">
                        <v-text-field dense hide-details solo type="text" v-model="texto" @keyup.enter="emitirTarea()"/>
                    </v-col>
                    <v-col cols="4">
                        <v-btn small class="mt-1" color="success" @click="emitirTarea()">confirmar</v-btn>
                    </v-col>
                </v-row>
            </template>
            <template v-else>
                {{tarea.name}}
                <v-btn icon x-small color="red" class="float-right" @click="remueveTarea(tarea.id)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-btn icon x-small color="blue" class="float-right" @click="editarTarea(tarea.id,tarea.name)">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </template>  
            <v-divider></v-divider>
        </li>            
    </ul>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
export default {
    name: "tareasListar",
    data(){
        return{
            editando: null,
            texto: "",
        }
    },
    computed:{
        ...mapGetters(["obtenerTareasFiltradas"])
    },
    methods:{
        ...mapMutations(["modificarTareas"]),
        ...mapActions(["remueveTarea", "actualizaTarea"]),
        editarTarea(id,tarea){
            this.editando = id;
            this.texto= tarea;
        },
        emitirTarea(){
            this.actualizaTarea({id: this.editando, tarea: this.texto});
            this.editando= null
            this.texto=""
        }
    }
}
</script>
<style scoped>
    .eliminar{
        border:none;
        background-color: transparent;
        color: red;
    }
    .editar{
        border:none;
        background-color: transparent;
        color: blue;
    }
</style>