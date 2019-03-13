<template>
  <div>
    <h3>Bitcoin price index</h3>
    <li v-for="(val, key) in info" v-bind:key="key">{{ key }} : {{ val }}</li>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Rest",
  data() {
    return {
      info: {}
    };
  },
  computed: {
    infoKeys() {
      return Object.keys(this.info);
    }
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response));
  }
};
</script>
