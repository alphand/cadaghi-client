import * as types from '../mutation-types'

const state = {
  authStatus: 'unauthorized',
  user: {
    hasEmail: false,
    email: '',
  },
}

const mutations = {
  [types.AUTH_LOGIN_REQUEST](state, { user }) {
    state.authStatus = 'processing'
  },
  [types.AUTH_GITHUB_REQUEST](state) {
    state.authStatus = 'processing'
  },
  [types.AUTH_LOGIN_FAILURE](state, { user }) {
    state.authStatus = 'failed'
  },
  [types.AUTH_LOGIN_SUCCESS](state, { user }) {
    state.authStatus = 'success'
  },
  [types.AUTH_GITHUB_SUCCESS](state, token) {
    state.authStatus = 'success'
    state.user.token = token.access_token
    console.log('got token', state.user)
  },
  [types.PROFILE_GITHUB_REQUEST](state) {
    console.log('gh request')
  },
  [types.PROFILE_GITHUB_SUCCESS](state, user) {
    state.user.email = user[0].email
  },
}

export default {
  state,
  mutations,
}
