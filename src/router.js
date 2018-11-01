const title = '积分管理系统'
const routers = [
  {
    path: '/',
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
    path: '/index',
    name: 'index',
    meta: {
      title: title + '--首页'
    },
    component: (resolve) => require(['./views/index/index.vue'], resolve)
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
