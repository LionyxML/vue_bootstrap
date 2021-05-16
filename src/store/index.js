import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartoes: [],
    cartoesMostrados: [],
    rows: 0,
    showSpinner: false
  },
  mutations: {
    SETA_CARTOES(state, cartoes){
      state.cartoes = cartoes;
    },
    SETA_ROWS(state, rows){
      state.rows = rows;
    },
    SETA_SPINNER(state, showSpinner){
      state.showSpinner = showSpinner;
    },
    SETA_CARTOES_MOSTRADOS(state, cartoesMostrados){
      state.cartoesMostrados = cartoesMostrados;
    }
  },
  actions: {
    async pegaDados( { commit } ){
      commit("SETA_SPINNER", true);
      return new Promise (resolve => {
        setTimeout(async () => {
          const res = await fetch("dados.json");
          const val = await res.json();
          resolve(val);
          commit("SETA_SPINNER", false);
        }, 1000)
      })
    },
    async pegaCartoes({ dispatch, commit }){
      const myJson = await dispatch("pegaDados");
      const cartoesMostrados = myJson.slice(0, 3);
      commit("SETA_CARTOES_MOSTRADOS", cartoesMostrados);
      commit("SETA_CARTOES", myJson);
      commit("SETA_ROWS", myJson.length);
    },
    async paginate( { commit, state } , { currentPage, perPage }){
      const start = (currentPage - 1 ) * perPage;
      const cartoes = state.cartoes.slice(start, start + 3);
      commit("SETA_CARTOES_MOSTRADOS", cartoes);
    },
    updatePagination({commit, dispatch}, { myJson, perPage, currentPage }) {
      commit("SETA_CARTOES", myJson);
      commit("SETA_ROWS", myJson.length);
      dispatch("paginate", { currentPage, perPage });
    },
    async search( { dispatch }, { text }){
      const myJson = await this.dispatch("pegaDados");
      const values = myJson.filter(val =>
        val.name.toLowerCase().includes(text.toLowerCase())
      );
      dispatch("updatePagination", {
        myJson: values,
        currentPage: 1,
        perPage: 3
      });
    }
  },
  modules: {
  },
  getters: {
    cartoes(state) {
      return state.cartoes;
    },
    rows(state) {
      return state.rows;
    },
    cartoesMostrados(state) {
      return state.cartoesMostrados;
    },
    showSpinner(state) {
      return state.showSpinner;
    }
  }
})
