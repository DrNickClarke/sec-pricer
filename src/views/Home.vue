<template>
  <div class="home">
    <Tabs v-bind:loadSecid="0"></Tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabs from "@/components/Tabs.vue";

export default {
  name: "home",
  components: {
    Tabs
  }
};
</script>
