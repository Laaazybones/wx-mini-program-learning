// index.js
Page({
  data: {
    list: []
  },

  getData() {
    wx.request({
      url: 'https://gmall-prod.atguigu.cn/mall-api/index/findBanner',
      method: 'GET',
      data: {}, // 请求参数
      header: {},
      // API调用成功后进行的回调
      success: (res) => {
        this.setData({
          list: res.data.data
        })
        console.log(res)
      },
      // API调用失败后进行的回调
      fail: (res) => {
        console.log(res)
      },
      // API不管调用成功还是失败，都进行调用的回调
      complete: (res) => {
        console.log(res)
      }
    })
  }
})
