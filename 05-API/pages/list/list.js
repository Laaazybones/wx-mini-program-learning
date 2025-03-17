// pages/list/list.js
Page({

  navigateTo() {
    // 保留当前页面，跳转到下一个页面，【注意】不能跳转到tabBar页面
    wx.navigateTo({
      url: '/pages/user/user?id=1&name=tom',
      // url: '/pages/index/index'  // 无法跳转tabBar页面
    })
  },

  redirectTo() {

    // 关闭（销毁）当前页面，跳转到下一个页面，【注意】不能跳转到tabBar页面
    wx.redirectTo({
      url: '/pages/user/user?id=1&name=tom',
      // url: '/pages/index/index'
    })

  },

  swicthTab() {

    // 只能跳转到tabBar页面，【注意】此方法不能传递参数
    wx.switchTab({
      // url: '/pages/user/user',
      url: '/pages/index/index?id=1&name=tom'
    })
  },

  reLaunch() {

    // 关闭（销毁）所有页面，跳转到指定页面
    wx.reLaunch({
      // url: '/pages/user/user',
      url: '/pages/index/index?id=1&name=tom'
    })

  }
})