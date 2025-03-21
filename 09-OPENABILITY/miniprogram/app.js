// app.js
App({
  // 在 App.js 中 可以通过 this 来获得 APP 对象实例
  // 不能通过 getApp() 函数来获取 APP 对象实例

  // 全局共享的数据
  globalData: {
    token: ''
  },

  // 全局共享的方法
  setToken(token) {
    this.globalData.token = token
  }

})
