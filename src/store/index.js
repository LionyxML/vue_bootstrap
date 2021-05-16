import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartoes: [],
    cartoesMostrados: [],
    rows: 0,
  },
  mutations: {
    SETA_CARTOES(state, cartoes){
      state.cartoes = cartoes;
    },
    SETA_ROWS(state, rows){
      state.rows = rows;
    },
    SETA_CARTOES_MOSTRADOS(state, cartoesMostrados){
      state.cartoesMostrados = cartoesMostrados;
    }
  },
  actions: {
    async pegaDados(){
      return new Promise (resolve => {
        setTimeout(async () => {
          const res = await fetch("dados.json");
          const val = await res.json();
          resolve(val);
        }, 2000)
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
    }
  }
})
