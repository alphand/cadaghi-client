import VueRouter from 'vue-router'
import Home from './containers/Home.vue'
// import Login from './containers/login.vue'
import Accounts from './containers/Accounts.vue'

// import AuthService from './services/auth'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    // { path: '/login', component: Login },
    { path: '/accounts/:type', component: Accounts },
  ],
})

// router.beforeEach((route, redirect, next) => {
//   var matchedRoute = route.matched.pop()

//   if (matchedRoute) {
//     if (matchedRoute.components.default.route.auth === false) {
//       return next()
//     } else {
//       return AuthService.isAuthenticated()
//     }
//   }
//   redirect('/?returnUrl=' + route.path)
// })

export default router
