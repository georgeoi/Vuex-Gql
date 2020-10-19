<template>
    <v-container >

        <v-row>
            <v-col cols="8">
                <v-card>
                    <v-card-title>Nueva</v-card-title>
                    <v-card-subtitle>Agregar Nuevas tareas</v-card-subtitle>
                    <v-card-text>
                        <tareas-nueva ></tareas-nueva>
                    </v-card-text>
                </v-card>
                <v-card class="mt-3">
                    <v-card-title>Tareas</v-card-title>
                    <v-card-subtitle>Ver, editar y eliminar las tareas</v-card-subtitle>
                    <v-card-text>
                        <tareasListar/>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="4">
                <v-card>
                    <v-card-text>
                        <v-card-title>Filtrar</v-card-title>
                    <v-card-subtitle>Buscar entre las tareas</v-card-subtitle>
                        <tareas-filtrar></tareas-filtrar>
                    </v-card-text>
                </v-card>
                <v-card class="mt-3">
                    <v-card-title>Metricas</v-card-title>
                    <v-card-subtitle>Algunos numeros...</v-card-subtitle>
                    <v-card-text>
                        <v-chip
                                class="ma-2"
                                color="green"
                                text-color="white">
                                <v-avatar
                                        left
                                        class="green darken-4">
                                        {{obtenerTareasVigentes}}
                                </v-avatar>
                                Vigentes
                        </v-chip>
                        <v-chip
                                class="ma-2"
                                color="red"
                                text-color="white">
                                <v-avatar
                                        left
                                        class="red darken-4">
                                        {{contadorEliminadas}}
                                </v-avatar>
                                Eliminadas
                        </v-chip>
                        <v-chip
                                class="ma-2"
                                color="blue"
                                text-color="white">
                                <v-avatar
                                        left
                                        class="blue darken-4">
                                        {{obtenerTareasTotales}}
                                </v-avatar>
                                Totales
                        </v-chip>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>

        <tareas-notificador :notificar="notificar"></tareas-notificador>
    </v-container>
</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex";
import tareasNueva from "./tareasNueva";
import tareasListar from "./tareasListar";
import tareasFiltrar from "./tareasFiltrar";
import tareasNotificador from "./tareasNotificador";


export default {
    name: "tareas",
    components: {tareasNueva, tareasNotificador, tareasFiltrar, tareasListar},
    mounted (){
        this.cargarTareas()
        },
    computed: {
        ...mapState(["tareas","notificar", "contadorEliminadas"]),
        obtenerTareasVigentes(){
            return this.tareas.length
        },
        obtenerTareasTotales(){
            return this.obtenerTareasVigentes +this.contadorEliminadas
        }
    },
    methods: {
        ...mapActions(["cargarTareas"]),
        ...mapMutations(["setNotificar"])
        }
    }
</script>

<style scoped>

</style>