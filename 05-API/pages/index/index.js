// index.js
Page({
  data: {
    list: []
  },

  getData() {
    // 显示 loading 提示框
    wx.showLoading({
      // title提示内容不能自动换行，超出范围的内容会被隐藏
      title: '数据加载中...',
      // 是否展示透明蒙层，防止触摸穿透
      mask: true
    }),

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
        // console.log(res)
        // 隐藏loading弹窗
        wx.hideLoading()
      }
    })
  },

  delGoods() {
    // 展示模态框
    wx.showModal({
      title: '提示',
      content: '是否删除该商品？',
      // 使用回调函数获取用户操作模态框选项后的结果，res结果对象包含两个属性：cancel和confirm
      // 也可以使用同步异步的形式接收res
      complete: (res) => {
        // console.log(res)
        if (res.cancel) {
          wx.showToast({
            title: '取消删除',
            icon: 'error',
            duration: 2000
          })
        }
    
        if (res.confirm) {
          wx.showToast({
            title: '删除成功',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },

  async delGoods2() {
    // 异步解构用户操作模态框的结果
    const { confirm } = await wx.showModal({
      title: '提示',
      content: '是否删除该商品哇？'
    })

    // 用户点击确认
    if(confirm) {
      wx.showToast({
        title: '删除成功！',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '取消删除！',
        icon: 'error',
        duration: 2000
      })
    }
  }
})
