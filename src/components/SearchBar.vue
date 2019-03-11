<template>
  <div>
    <v-container>
      <v-layout wrap align-center>
        <v-flex xs6 sm2 d-flex>
          <v-select
            v-model="assetClass"
            :items="assetClasses"
            label="Security Class"
            @change="setAssetClass()"
          ></v-select>
        </v-flex>
        <v-flex xs6 sm4 d-flex>
          <v-autocomplete
            v-model="secName"
            :items="secNames()"
            label="Security"
            @change="setSecurity()"
            clearable
          ></v-autocomplete>
        </v-flex>
      </v-layout>
      <v-layout wrap align-center>
        <v-flex xs12 sm2 d-flex>
          <v-menu
            v-model="dateMenu"
            :close-on-content-click="false"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="dateFmt"
                label="Asof Date"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="dateMenu = false"
            ></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import format from "date-fns/format";

var secList = [
  { id: 1, type: "Bond", name: "IBM 5% 2022" },
  { id: 3, type: "Bond", name: "MSFT 3% 2028" },
  { id: 4, type: "Bond", name: "AAPL 2% 2021" },
  { id: 6, type: "Bond", name: "IBM 4.5% 2023" },
  { id: 7, type: "Bond", name: "ABC 0.5% 2025" },
  { id: 11, type: "EquityOpt", name: "VOD LN 101C 3m" },
  { id: 14, type: "EquityOpt", name: "MSFT UQ 99P 2m" },
  { id: 15, type: "EquityOpt", name: "SIE GY 105C 3m" },
  { id: 17, type: "EquityOpt", name: "BRK.A UN 98P 6m" }
];

function secListFilter(filtField, filtVal) {
  var st = [];
  for (var i in secList) {
    var s = secList[i];
    if (s[filtField] === filtVal) {
      st.push(s);
    }
  }
  return st;
}

var bondSecs = secListFilter("type", "Bond");
var equitySecs = secListFilter("type", "EquityOpt");
var allSecs = { EquityOpt: equitySecs, Bond: bondSecs };

export default {
  name: "SearchBar",
  data: () => ({
    assetClasses: { String: Array },
    assetClass: String,
    security: Object,
    secName: String,
    date: String,
    dateMenu: false,
    secs: { String: Array }
  }),
  methods: {
    findSecName(secName) {
      var sl = allSecs[this.assetClass];
      for (var i in sl) {
        if (sl[i].name === secName) {
          return sl[i];
        }
      }
      return null;
    },
    setSecurity() {
      var sec = this.findSecName(this.secName);
      this.$store.commit("setSecurity", sec);
      this.security = sec;
    },
    setAssetClass() {
      this.security = null;
      this.$store.commit("setSecurity", null);
    },
    getSafeSecField(field) {
      if (this.security == null) {
        return "";
      }
      return this.security[field];
    },
    secNames() {
      var sn = [];
      var sl = allSecs[this.assetClass];
      for (var i in sl) {
        sn.push(sl[i].name);
      }
      return sn.sort();
    }
  },
  computed: {
    dateFmt() {
      return this.date ? format(this.date, "DD-MMM-YY") : "";
    }
  },
  created() {
    this.assetClasses = Object.keys(allSecs);
    this.assetClass = this.assetClasses[0];
    this.security = null;
    this.secName = null;
    this.date = new Date().toISOString().substr(0, 10);
    this.secs = allSecs;
  }
};
</script>
