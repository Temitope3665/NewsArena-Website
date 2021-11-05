import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const apiKey = process.env.VUE_APP_NEWS_KEY

export default new Vuex.Store({
  state: {
    allNews: [],
    categoryNews: []
  },
  getters: {
    getAllNews: (state) => state.allNews,
    getCategoryNews: (state) => state.categoryNews
  },
  mutations: {
    setAllNews: (state, payload) => { state.allNews = payload },
    setCategoryNews: (state, payload) => { state.categoryNews = payload }
  },
  actions: {
    fetchAllNews: ({ commit }) => {
      axios.get(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=${apiKey}`)
      .then((res) => {
        console.log('show general news', res.data.articles)
        commit('setAllNews', res.data.articles)
      }).catch ((error) => {
        console.log(error)
      })
    },
    fetchCategoriesNews: ({ commit }, category) => {
      axios.get(`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=${apiKey}`)
      .then((res) => {
        console.log('show category news', res.data.articles)
        commit('setCategoryNews', res.data.articles)
      }).catch ((error) => {
        console.log(error)
      })
    }
  },
});