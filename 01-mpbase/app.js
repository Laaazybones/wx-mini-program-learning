// app.js
App({
  // onLaunch 是小程序的钩子函数，这个钩子函数在【冷启动】时肯定会执行到
  // 热启动时，不会触发 onLaunch 钩子函数，会触发 onShow 钩子函数
  // onLaunch 钩子函数全局只会被触发一次
  // 当小程序冷启动时，会自动在微信后台请求新版本的信息，如果有新版本，会立即进行下载
  onLaunch() {
    // // 使用 wx.getUpdateManager() 方法监听下载的状态
    // const updateManager = wx.getUpdateManager()

    // // 当下载完成新版本后，会触发 onUpdateReady() 回调函数
    // updateManager.onUpdateReady(function () {
    //   // 在回调函数中给用户提示
    //   wx.showModal({
    //     title: '更新提示',
    //     content: '新版本已经准备好，是否重启应用？',
    //     success(res) {
    //       if (res.confirm) {
    //         // 强制当前小程序使用新版本并且会重启当前小程序
    //         updateManager.applyUpdate()
    //       }
    //     }
    //   })
    // })
    console.log('onLaunch 小程序初始化完成')
  },

  onShow() {
    console.log('onShow 小程序启动，或从后台切前台')
  },

  onHide() {
    console.log('onHide 小程序从前台切后台')
  }
})
