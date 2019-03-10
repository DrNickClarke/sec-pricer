<template>
  <v-app dark>
    <v-toolbar app class="indigo darken-4">
      <v-toolbar-title>Security Pricer &nbsp;</v-toolbar-title>
    </v-toolbar>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
