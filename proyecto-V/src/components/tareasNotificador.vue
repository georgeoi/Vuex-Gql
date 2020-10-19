<template>
    <v-snackbar top :color="tipo" dark v-model="snack" :timeout="1000" @input="setNotificar(null)">
        {{mensaje}}
    </v-snackbar>
</template>
<script>
import {mapMutations} from "vuex"
let types = ["eliminar", "editar", "agregar"]
export default {
    name: "tareasNotificar",
    props: {
        notificar: {type: String, validator: value=> types.includes(value)}
    },
    data(){
        return {
            snack: false
        }
    },
    watch: {
      notificar(val){
          if(val){
              this.snack= true
          }
      }  
    },
    methods: {
      ...mapMutations(["setNotificar"])  
    },
    computed: {
        tipo(){
            switch(this.notificar){
                case "eliminar":
                    return "error"
                case "editar":
                    return "info"
                case "agregar":
                    return "success"
                default:
                    return "info"
            }
        },
        mensaje(){
            switch(this.notificar){
                case "eliminar":
                    return "se elimino la tarea"
                case "editar":
                    return "se edito la tarea"
                case "agregar":
                    return "se agrego la tarea"
                default:
                    return ""
            }
        }
    }
    
}
</script>

<style scoped>
    .box {
        position: absolute;
        top: 1%;
        left: 45%;
        width: 10%;
        padding: 10px;
    }
    .eliminar {
        border: 1px solid grey;
        background-color: red;
        color: white;
    }
    .editar{
        border: 1px solid grey;
        background-color: blue;
        color: white;
    }
    .agregar{
        border: 1px solid grey;
        background-color: green;
        color: white;
    }
</style>

