// Packages
import Vue from 'vue'
import 'es6-promise/auto'

// Vuex
import store from './store'

// Components
import App from './App.vue'
import './assets/styles/app.css'

Vue.config.productionTip = false

// Main instance
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
