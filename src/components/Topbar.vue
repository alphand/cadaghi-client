<template>
    <div class="topbar__container">
        <div class="topbar__box--left">
            <strong>
              <router-link to="/" class="brand">
                SKILLTREE
              </router-link>
            </strong>
        </div>

        <div class="topbar__box--right">
            <ul class="topbarnav__list">
                <li>
                    <a class="topbarnav_btn" v-bind:href="githubLoginUrl">
                        <i class="fa fa-github"></i>
                        Login
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    Name:'topbar',
    data () {
      return {
        githubLoginUrl: "https://github.com/login/oauth/authorize?scope=user:email&client_id=6a418b2d916f57eb921c"
      }
    }
}
</script>
