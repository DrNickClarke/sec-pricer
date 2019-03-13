import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedSecurity: null,
    loadSecId: 0
  },
  mutations: {
    setSecurity(state, security) {
      state.selectedSecurity = security;
    },
    setLoadSecId(state, secId) {
      state.loadSecId = secId;
    }
  },
  getters: {
    selectedSecurityName: state =>
      state.selectedSecurity == null ? "" : state.selectedSecurity.name,
    selectedSecurityType: state =>
      state.selectedSecurity == null ? "" : state.selectedSecurity.type,
    selectedSecurityId: state =>
      state.selectedSecurity == null ? 0 : state.selectedSecurity.id,
    loadSecId: state => state.loadSecId
  }
});
