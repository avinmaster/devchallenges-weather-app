import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'Samarqand',
    tempType: 'C',
    weekDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    loading: false,
    nextWeather: [],
    todayWeather: {}
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loading = status
    }
  },
  actions: {
    fetchTodayWeather({ commit, state }) {
      commit('SET_LOADING_STATUS', true)
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=fe9b0008543180c9e5fcf10f5beb8691&units=metric`)
      .then((res) => {
        commit('SET_LOADING_STATUS', false)
        state.todayWeather = res.data
      })
    },

    fetchNextWeather({ commit, state }) {
      commit('SET_LOADING_STATUS', true)

      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${state.city}&appid=fe9b0008543180c9e5fcf10f5beb8691&units=metric`)
      .then((res) => {
          commit('SET_LOADING_STATUS', false)
          state.nextWeather = res.data
      })
    }
  },
  getters: {

  }
})