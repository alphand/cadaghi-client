
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  getters,
  actions,
  modules: {
    auth,
  },
  strict: debug,
})

if (module.hot) {
  /* eslint-disable global-require */
  module.hot.accept([
    './getters',
    './actions',
    './modules/auth',
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      modules: require('./modules/auth'),
    })
  })
  /* eslint-enable */
}

export default store
