<template>
  <div>
    <h3>Bitcoin price</h3>
    <li v-for="ccy in infoKeys" v-bind:key="ccy">
      <span>
        {{ ccy }}: <span v-html="info[ccy].symbol"></span>
        {{ info[ccy].rate_float | to2dp }}
      </span>
    </li>
  </div>
</template>

<script>
//<li v-for="ccy in info">{{ ccy }} : {{ info[ccy].rate }}</li>
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
  filters: {
    to2dp(value) {
      return value.toFixed(2);
    }
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response.data.bpi));
  }
};
</script>
