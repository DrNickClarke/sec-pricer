<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <SearchBar />
        </v-flex>
        <v-flex xs12>
          <Pricer />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import Pricer from "./Pricer";

export default {
  name: "Tabs",
  components: {
    SearchBar,
    Pricer
  }
};
</script>
