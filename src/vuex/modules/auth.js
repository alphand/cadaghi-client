/* eslint-disable no-param-reassign */

import * as types from '../mutation-types'

const initialState = {
  authStatus: 'unauthorized',
  user: {
    hasEmail: false,
    email: '',
  },
}

const mutations = {
  [types.AUTH_LOGIN_REQUEST](state) {
    state.authStatus = 'processing'
  },
  [types.AUTH_GITHUB_REQUEST](state) {
    state.authStatus = 'processing'
  },
  [types.AUTH_LOGIN_FAILURE](state) {
    state.authStatus = 'failed'
  },
  [types.AUTH_LOGIN_SUCCESS](state) {
    state.authStatus = 'success'
  },
  [types.AUTH_GITHUB_SUCCESS](state, token) {
    state.authStatus = 'success'
    state.user.token = token.access_token
  },
  [types.PROFILE_GITHUB_REQUEST]() {
  },
  [types.PROFILE_GITHUB_FAILURE]() {
  },
  [types.PROFILE_GITHUB_SUCCESS](state, user) {
    state.user.email = user[0].email
  },
}

export default {
  state: initialState,
  mutations,
}
