import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams: []
  },
  getters: {
    ALLTEAMS(state) {
      return state.teams;
    }
  },
  mutations: {
    UPDATETEAMS(state, teams) {
      state.teams = teams;
    }
  },
  actions: {    
    async fetchTeams(context) {
      // let res = await fetch("http://192.168.1.121:3002/teams/"); //Егор
      let res = await fetch("http://127.0.0.1:3002/teams/");
      const teams = await res.json();
      context.commit("UPDATETEAMS", teams);      
    }
  }
})