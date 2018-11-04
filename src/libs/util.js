let util = {
  title: function (title) {
    title = title ? title : 'scores system project'
    window.document.title = title
  },
  // 本地存储
  getStorage: function (key) {
    var mydata = localStorage.getItem(key)
    if (!mydata) {
      return false
    }
    mydata = JSON.parse(mydata)
    // 字符串转成对象
    return mydata
  },
  setStorage: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  },
  clearStorage: function (key) {
    localStorage.removeItem(key)
    return true
  },
  clearAllStorage: function (key, value) {
    localStorage.clear()
    return true
  },
  // 节流（执行间隔时间必执行）
  throttle: function (fn, delay) {
    var last = 0
    return function () {
      var now = +new Date()
      if (now - last > delay) {
        fn.apply(this, arguments)
        last = now
      }
    }
  },
  // 防抖（指定间隔时间误操作才执行）
  debounce: function (method, delay) {
    var timer = null
    return function () {
      var context = this,
        args = arguments
      clearTimeout(timer)
      timer = setTimeout(function () {
        method.apply(context, args)
      }, delay)
    }
  }

}
export default util
