import Vue from "vue";
import Vuex from "vuex";
import axios from "@/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "Warner",
    userInfo: {
      name: "Мортиджан",
      score: 500,
      avatar: "mortyjan.png",
    },
  },
  mutations: {
    updateUserInfo(state, response) {
      state.userInfo = response;
    },
    setName(state, newName) {
      state.userName = newName;
    },
    setNewScore(state, newScore) {
      state.userInfo.score -= newScore;
    },
  },
  actions: {
    fetchUserInfo({ commit }) {
      axios.get("templates/7ZW3y5GAuIge/data").then(({ data }) => {
        if (data && Object.keys(data).length) {
          commit("updateUserInfo", data);
        }
      });
    },
  },
});
