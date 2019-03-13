<template>
  <div class="loadSecId">
    <Tabs />
  </div>
</template>

<script>
// @ is an alias to /src
import Tabs from "@/components/Tabs.vue";

export default {
  name: "loadSecId",
  props: { secId: Number },
  components: {
    Tabs
  },
  mounted() {
    this.$store.commit("setLoadSecId", this.secId);
  }
};
</script>
