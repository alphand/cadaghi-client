import Vue from 'vue'
import * as types from './mutation-types'

export const makeLoginRequest = ({ commit }, loginReq) => {
  if (loginReq.username && loginReq.password) {
    commit(types.AUTH_LOGIN_REQUEST, loginReq)
  } else {
    commit(types.AUTH_LOGIN_FAILURE, {
      message: 'Empty username or pasword.'
    })
  }
}

export const getGithubToken = ({ commit }, githubCode) => {
  commit(types.AUTH_GITHUB_REQUEST)
  Vue.http.post('/api/accounts/github', { code: githubCode })
    .then((data) => {
      var resp = data.body
      commit(types.AUTH_GITHUB_SUCCESS, resp)
      getGithubEmail({ commit }, resp.access_token)
    })
    .catch((err) => {
      console.log('err', err)
      commit(types.AUTH_LOGIN_FAILURE, err)
    })
}

export const getGithubEmail = ({ commit }, token) => {
  commit(types.PROFILE_GITHUB_REQUEST)
  Vue.http.get('https://api.github.com/user/emails', { params: { access_token: token }})
    .then((data) => {
      commit(types.PROFILE_GITHUB_SUCCESS, data.body)
    })
    .catch((err) => {
      console.log(err)
    })
}