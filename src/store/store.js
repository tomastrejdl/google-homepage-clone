import Vue from 'vue';
import Vuex from 'vuex';
import { SET_THEME } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: '',
  },
  mutations: {
    [SET_THEME]: (state, theme) => (state.theme = theme),
  },
  actions: {
    setTheme: ({ commit }, theme) => commit(SET_THEME, theme),
  },
  modules: {},
});
