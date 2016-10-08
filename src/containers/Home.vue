<template>
    <div>
        <HeaderBanner></HeaderBanner>
        <div class="container--body">
            <h1>inside container</h1>
        </div>
    </div>
</template>

<script>
import HeaderBanner from '../components/HeaderBanner.vue'

export default {
  components:{
      HeaderBanner
  },
  route: {
    auth: false
  }
}
</script>i
