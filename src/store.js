import Vue from 'vue';
import Vuex from 'vuex';

import { compareUrls } from './lib/comparator';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  results: {
    // query params
  },
  route: {
    query: {
      a: '',
      b: '',
    },
  },
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  update(currentState) {
    const { a, b } = currentState.route.query;
    Object.assign(currentState, {
      results: compareUrls(a, b),
    });
  },
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  update: ({ commit }) => commit('update'),
  // asyncUpdateInformation: ({ commit }, data) =>
  //   new Promise((resolve) => {
  //     setTimeout(() => {
  //       commit('update', data);
  //       resolve();
  //     }, 1000);
  //   }),
};

// getters are functions
const getters = {
  // evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
