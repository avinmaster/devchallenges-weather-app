<template>
  <div class="sidebar bar" v-if="!$store.state.loading">
    <img :src="`img/weather-icons/${todayWeather.weather[0].icon}.png`" alt="">
    <h1>{{ todayTemp }} <span>°{{ tempType }}</span></h1>
    <p>{{ todayWeather.weather[0].description.replace(/\b\w/g, l => l.toUpperCase()) }}</p>
    <p>Today • {{ getDate() }}</p>
    <p class="location">{{ city }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',

  methods: {
    getDate() {
      // console.log(this.todayWeather)
      let newDate = new Date()

      return `${this.weekDays[newDate.getDay()]}, ${newDate.getDate()} ${this.months[newDate.getMonth()]}`
    }
  },

  computed: {
    ...mapState([
      'city',
      'tempType',
      'weekDays',
      'months',
      'loading',
      'todayWeather',
    ]),
    todayTemp() {
      if (this.tempType === 'F') {
        return Math.round((this.todayWeather.main.temp + 33.8 + Number.EPSILON) * 100) / 100
      }
      return this.todayWeather.main.temp
    }
  }
}
</script>
