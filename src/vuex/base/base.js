import * as types from '../mutation-types'
import Api from '@/api/index'
import Vue from 'vue'

// 公共loading基础效果
const state = {
  loading: false,
  login: false
}

const getters = {
  loading: state => state.loading
}

const mutations = {
  // 登录
  [types.LOGIN_IN](state, payload) {
    state.login = payload.login
  }
}

const actions = {
  login({commit, state}) {
    return Api.postLogin().then((data) => {
      if(data.code === 200){
        commit({
          type: types.LOGIN_IN,
          login: true
        });
        return data;
      }else{
        return new Promise(function(resolve, reject) {
          reject(data.message); // 返回一个rejected的Promise实例
        });
        // todo: message插件不带toast方法？ 暂未找到
        // Vue.prototype.$message({content: data.message});
      }
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
