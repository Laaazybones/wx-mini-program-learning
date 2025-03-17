// pages/user/user.js
Page({
  navigateBack() {
    // 关闭当前页面，返回上一页或返回多级页面
    // 默认返回上一级页面，使用delta来配置返回层级
    wx.navigateBack({
      delta: 1
    })
  },

  // 从别的页面路由跳转过来会调用onLoad钩子函数，参数会保存在options中
  onLoad(options) {
    console.log(options)
  }
})