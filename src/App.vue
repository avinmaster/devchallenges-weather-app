<template>
  <div id="app">
    <Mainbar></Mainbar>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
  import Mainbar from './components/Mainbar.vue'
  import Sidebar from './components/Sidebar.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    components: {
      Sidebar,
      Mainbar
    },

    methods: {
      ...mapActions([
        'fetchTodayWeather',
        'fetchNextWeather'
      ]),
    },

    created() {
      this.fetchTodayWeather()
      this.fetchNextWeather()
    }
  }
</script>
