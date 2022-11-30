import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ifBar: true,
        ifSearch: true,
        HWIdentification: false,

  },
  getters: {
  },
    mutations: {
        HWIDENTIFICATION(state, value) {
            state.HWIdentification = value;
        },

        CHANGEBAR(state, value) {
            state.ifBar = value;
        },
        
        CHANGESEARCH(state, value) {
            state.ifSearch = value;
        },
  },
  actions: {
  },
  modules: {
  }
})
