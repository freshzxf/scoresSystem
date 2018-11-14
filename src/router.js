const title = '积分管理系统'
const routers = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: title + '--登录'
    },
    component: (resolve) => require(['./views/login/login.vue'], resolve)
  },
  {
    path: '/reg',
    name: 'reg',
    meta: {
      title: title + '--注册'
    },
    component: (resolve) => require(['./views/login/reg.vue'], resolve)
  },
  {
    path: '/',
    name: 'index',
    alias: '/index', // 别名
    meta: {
      title: title + '--首页'
    },
    component: (resolve) => require(['./views/index/index.vue'], resolve)
  },
  {
    path: '/set_scores',
    name: 'set_scores',
    meta: {
      title: title + '--查询设置'
    },
    component: (resolve) => require(['./views/setScores/index.vue'], resolve)
  },
  {
    path: '/market',
    name: 'market',
    meta: {
      title: title + '--积分商城'
    },
    component: (resolve) => require(['./views/market/index.vue'], resolve)
  },
  {
    path: '/scores',
    name: 'scores',
    meta: {
      title: title + '--积分'
    },
    component: (resolve) => require(['./views/scores/index.vue'], resolve)
  },
  {
    path: '*',
    meta: {
      title: '访问出错啦'
    },
    component: (resolve) => require(['./views/errors/404.vue'], resolve)
  }
]
export default routers
