<template>
  <div class="container--body">
    <div class="accounts--page--section">
      <h1>Accounts</h1>
    <ul>
      <li>Coming from {{ $route.params.type }} - {{ $route.query.code }} {{ msg }} {{authStatus}}</li>
    </ul>

    <div>
      there is user <button v-on:click="getEmail($event)">Get email</button> {{ user.token }}
    </div>

    <div v-if="user.email != ''">
      my email: {{ user.email }}
    </div>

    <Card>
    </Card>

    </div>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Card from '../components/Card.vue'

  export default {
    components: {
      Card,
    },
    computed: {
      ...mapGetters({
        authStatus: 'authStatus',
        user: 'user',
      }),
    },
    methods: {
      ...mapActions({
        getGithubToken: 'getGithubToken',
        getGithubEmail: 'getGithubEmail',
      }),
      getEmail() {
        this.getGithubEmail(this.user.token)
      },
    },
    data() {
      return {
        msg: 'hello from msg',
      }
    },
    created() {
      const code = this.$route.query.code
      console.log('component is created', code, this.user)
      this.getGithubToken(code)
    },
  }
</script>
