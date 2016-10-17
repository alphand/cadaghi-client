<template>
  <div class="container--body">
    <div class="accounts--page--section">
      <h1>Accounts</h1>

      <p>
        Some detailed status
      </p>

      <pre>
        param type: {{ $route.params.type }}
        code: {{ $route.query.code }}
        msg: {{ msg }}
        authStatus: {{ authStatus }}
        user: {{ user }}
      </pre>

      <Card>
        something inside the card
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
      this.getGithubToken(code)
    },
  }
</script>
