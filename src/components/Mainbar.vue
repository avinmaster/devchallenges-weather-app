<template>
  <div class="mainbar bar" v-if="!$store.state.loading">
    <button class="temp-type-switcher" :class="{active: tempType === 'C' }" @click="tempTypeToC()">°C</button>
    <button class="temp-type-switcher" :class="{active: tempType === 'F' }" @click="tempTypeToF()">°F</button>
    <div class="clearfix"></div>

    <div class="top-nav">
      <div class="thumbs">
        <div class="thumb" v-for="(item, i) in nextWeather" :key="i">
          <p class="day">{{ i !== 0 ? getDate(item.dt_txt) : 'Tomorrow' }}</p>
          <img :src="`img/weather-icons/${item.weather[0].icon}.png`" alt="">
          <p class="temp">
            <span class="max">
              <span v-if="tempType === 'C'">{{ item.main.temp_max }}</span>
              <span v-else>{{ Math.floor(item.main.temp_max + 33.8) }}</span>
              °{{ tempType }}
            </span>
            <span class="min">
              <span v-if="tempType === 'C'">{{ item.main.temp_max }}</span>
              <span v-else>{{ Math.floor(item.main.temp_max + 33.8) }}</span>
              °{{ tempType }}
            </span>
          </p>
        </div>
      </div>
    </div>

    <h2>Today's Highlights</h2>
    <div class="other-data">
      <div class="panel big-panel">
        <p>Wind status</p>
        <h1>{{ todayWeather.wind.speed }} <span>mph</span></h1>
        <div class="additional-info">
          <div class="arrow" :style="`transform: rotate(${todayWeather.wind.deg}deg)`"></div>
        </div>
      </div>
      <div class="panel big-panel">
        <p>Humidity</p>
        <h1>{{ todayWeather.main.humidity }} <span>%</span></h1>
        <div class="progress-bar">
          <div class="progress" :style="`width: ${todayWeather.main.humidity}%`"></div>
        </div>
      </div>
      <div class="panel">
        <p>Visibility</p>
        <h1>{{ Math.round((todayWeather.visibility*0.000621371192 + Number.EPSILON) * 100) / 100 }} <span>miles</span></h1>
      </div>
      <div class="panel">
        <p>Air Pressure</p>
        <h1>{{ todayWeather.main.pressure }} <span>mb</span></h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'Mainbar',

  data() {
    return {
    }
  },

  methods: {
    getDate(item) {
      let newDate = new Date(item)

      return `${this.weekDays[newDate.getDay()]}, ${newDate.getDate()} ${this.months[newDate.getMonth()]}`
    },

    ...mapActions([
      'tempTypeToF',
      'tempTypeToC'
    ])
  },

  computed: {
    ...mapState([
      'city',
      'tempType',
      'weekDays',
      'months',
      'loading',
      'nextWeather',
      'todayWeather',
    ])
  },
}
</script>
