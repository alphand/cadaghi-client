<template>
  <div id="main-app">
      <Topbar />
      <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'

export default {
  components:{
    Topbar
  },
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  }
}
</script>


<style lang="sass">
@import './assets/styles/main.scss';
</style>
