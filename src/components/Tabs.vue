<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <SearchBar v-bind:loadSecid="loadSecId"></SearchBar>
        </v-flex>
        <v-flex xs12>
          <Pricer />
        </v-flex>
        <v-flex xs12>
          <Rest />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import Pricer from "./Pricer";
import Rest from "./Rest";

export default {
  name: "Tabs",
  props: { loadSecId: Number },
  components: {
    SearchBar,
    Pricer,
    Rest
  }
};
</script>
