import {get, post} from './axios'

export default {
  /**
   * @name get测试代理跨域
   * @desc 在webpack.dev.conf.js中配置proxy
   * @desc 将请求本地服务器（同源）的接口由本地服务器代理发送请求至目标服务器（服务器端发送的任何请求不存在跨域限制）
   */
  getProxy(path, param) {
    return get(path, {params: param})
  },

  /**
   * @name post测试代理跨域
   * @desc 在webpack.dev.conf.js中配置proxy
   * @desc 将请求本地服务器（同源）的接口由本地服务器代理发送请求至目标服务器（服务器端发送的任何请求不存在跨域限制）
   */
  postProxy(path, param) {
    return post(path, param)
  },

  /**
   * @name post登录
   * @method post
   * @param 账号、密码
   * @returns status:success
   */
  postLogin(account, password) {
    return post('/login')
  },

  /**
   * @name post注册
   * @method post
   * @param 账号、密码、手机号
   * @returns status:success
   */
  postReg(account, password, cellphone) {
    return post('/reg')
  },

  /**
   * @name 获取记录
   * @method
   * @param
   * @returns status:success
   */
  getRecords(param) {
    return get('/records', param)
  },

  /**
   * @name 获取所有排名
   * @method 
   * @param
   * @returns status:success
   */
  getRanks(param) {
    return get('/ranks', param)
  }
}
