import * as types from '../mutation-types'
import Api from '@/api/index'

const state = {
  ranks: [],
  ranksOnce: 50  // 每次请求排名数据的条数
}

const getters = {

}

const mutations = {
  [types.GET_RANKS](state, payload) {
    state.ranks = state.ranks.concat(payload.ranks)
  },
  // 修改请求排名数据条数
  [types.CHANGE_RANKSONCE](state, payload) {
    state.ranksOnce += 50
  }
}

const actions = {
  ranks({commit, state}, param) {
    return Api.getRanks(param).then((data) => {
      if(data.code === 200){
        commit({
          type: types.GET_RANKS,
          ranks: data.data
        });
        commit({
          type: types.CHANGE_RANKSONCE,
        });
        return data.data;
      }else{
        return;
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
