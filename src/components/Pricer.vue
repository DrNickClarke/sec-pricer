<template>
  <div>
    <v-container>
      <v-layout wrap align-left>
        <v-flex xs12 sm6 d-flex>
          <v-data-table :headers="headers" :items="secPxData(secId)">
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.value }}</td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
var pxData = {
  1: [
    { name: "px", value: 102.57 },
    { name: "dv01", value: 2.67 },
    { name: "accrued", value: 1.26 }
  ],
  3: [
    { name: "px", value: 99.12 },
    { name: "dv01", value: 6.93 },
    { name: "accrued", value: 0.87 }
  ],
  4: [
    { name: "px", value: 101.35 },
    { name: "dv01", value: 1.53 },
    { name: "accrued", value: 0.23 }
  ],
  6: [
    { name: "px", value: 103.03 },
    { name: "dv01", value: 3.45 },
    { name: "accrued", value: 0.61 }
  ],
  7: [
    { name: "px", value: 102.52 },
    { name: "dv01", value: 0.124 },
    { name: "accrued", value: 0.35 }
  ],
  11: [{ name: "px", value: 37.71 }, { name: "div yield", value: 3.45 }],
  14: [{ name: "px", value: 125.22 }, { name: "div yield", value: 0.45 }],
  15: [{ name: "px", value: 12.56 }, { name: "div yield", value: 12.76 }],
  17: [{ name: "px", value: 67.97 }, { name: "div yield", value: 0.08 }]
};

export default {
  name: "Pricer",
  data() {
    return {
      headers: [
        { text: "Analytic", align: "left", sortable: false, value: "name" },
        { text: "Value", align: "left", sortable: false, value: "value" }
      ]
    };
  },
  methods: {
    secPxData(id) {
      return id <= 0 ? [] : pxData[id];
    }
  },
  computed: {
    secName() {
      return this.$store.getters.selectedSecurityName;
    },
    secId() {
      return this.$store.getters.selectedSecurityId;
    }
  }
};
</script>
