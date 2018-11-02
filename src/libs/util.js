let util = {
  title: function (title) {
    title = title ? title : 'scores system project';
    window.document.title = title
  },
  getStorage: function (key) {
    var mydata = localStorage.getItem(key);
    if (!mydata) {
      return false;
    }
    mydata = JSON.parse(mydata);
    // 字符串转成对象
    return mydata;
  },
  setStorage: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  },
  clearStorage: function (key) {
    localStorage.removeItem(key);
    return true;
  },
  clearAllStorage: function (key, value) {
    localStorage.clear();
    return true;
  }
}
export default util
