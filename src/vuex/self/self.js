import * as types from '../mutation-types'
import Api from '@/api/index'

// 公共loading基础效果
const state = {
  self: null,
  records: [],
  recordsOnce: 15 // 每次请求记录数据的条数
}

const getters = {}

const mutations = {
  // 修改记录数据
  [types.GET_RECORDS] (state, payload) {
    state.records = state.records.concat(payload.records)
  },
  // 修改每次请求记录数据的位置
  [types.CHANGE_RECORDSONCE] (state, payload) {
    state.recordsOnce += 15
  }
}

const actions = {
  records ({commit, state}, param) {
    return Api.getRecords(param).then((data) => {
      if (data.code === 200) {
        // 修改请求到的数据记录
        commit({
          type: types.GET_RECORDS,
          records: data.records
        });
        // 递增请求数据参数
        commit({
          type: types.CHANGE_RECORDSONCE
        });
        // todo: 修改个人总数据
        data.data ? state.self = data.data : null;
        return data.records;
      } else {
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
