<template>
  <div id="app">
    <Mainbar></Mainbar>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
  import Mainbar from './components/Mainbar.vue'
  import Sidebar from './components/Sidebar.vue'

  export default {
    name: 'App',
    components: {
      Sidebar,
      Mainbar
    },
  }
</script>
