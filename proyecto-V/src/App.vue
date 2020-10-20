<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Gestion de Tareas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon target="_blank" href="http://fullstack-extraordinary.com">
      <v-icon>mdi-link</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="grey lighten 3">
      <tareas></tareas>
    </v-content>

  </v-app>
</template>

<script>
import tareas from "./components/tareas";

export default {
  name: 'App',
  components: {tareas}
  }
</script>

<style>
</style>
