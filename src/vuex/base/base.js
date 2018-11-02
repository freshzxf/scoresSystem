import * as types from '../mutation-types'
import Api from '@/api/index'

// 公共loading基础效果
const state = {
  loading: false,
  login: false
}

const getters = {
  loading: state => state.loading
}

const mutations = {
  [types.LOGIN_IN](state, payload) {
    state.login = payload.status
  },
  [types.SHOW_LOADING](state, payload) {
    state.loading = payload.status
  },
  [types.HIDE_LOADING](state, payload) {
    state.loading = payload.status
  }
}

const actions = {
  login({commit, state}) {
    return Api.postLogin().then((data) => {
      return data;
    })
  },
  showLoading({commit, state}) {
    commit({
      type: types.SHOW_LOADING,
      status: true
    })
  },
  hideLoading({commit, state}) {
    commit({
      type: types.HIDE_LOADING,
      status: false
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
