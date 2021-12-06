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
    },

    SET_TEMP_TYPE(state, status) {
      state.tempType = status
    }
  },
  actions: {
    fetchTodayWeather({ commit, state }) {
      commit('SET_LOADING_STATUS', true)
      axios.get(`${process.env.VUE_APP_API_URL}/weather?q=${state.city}&appid=fe9b0008543180c9e5fcf10f5beb8691&units=metric`)
      .then((res) => {
        commit('SET_LOADING_STATUS', false)
        state.todayWeather = res.data
      })
    },

    fetchNextWeather({ commit, state }) {
      commit('SET_LOADING_STATUS', true)

      axios.get(`${process.env.VUE_APP_API_URL}/forecast?q=${state.city}&appid=fe9b0008543180c9e5fcf10f5beb8691&units=metric`)
      .then((res) => {
          const allWeather = res.data

          for (var i = 0; i < res.data.list.length; i += 8) {
            state.nextWeather.push(allWeather.list[i])
          }

          commit('SET_LOADING_STATUS', false)
      })
    },

    tempTypeToF({ commit }) {
      commit('SET_TEMP_TYPE', 'F')
    },

    tempTypeToC({ commit }) {
      commit('SET_TEMP_TYPE', 'C')
    }
  }
})