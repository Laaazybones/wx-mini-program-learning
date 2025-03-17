// pages/profile/profile.js
Page({
  data: {
    numList: [1, 2, 3],
    isTriggered: false
  },

  // scroll-view 中绑定的处理上拉显示更多数据的 事件处理函数
  getMore() {
    // 产品需求：下拉到底部，给数组依次添加3个数字，即从 [1, 2, 3] ==> [1, 2, 3, 4, 5, 6]

    wx.showLoading({
      title: '数据加载中...',
    })

    // 模拟获取数据延迟
    setTimeout(() => {
      // 获取数组最后一个数字
      const lastNum = this.data.numList[this.data.numList.length - 1]
      // 创建新数组
      const newArr = [lastNum + 1, lastNum + 2, lastNum + 3]
      // 拼接数组
      this.setData({
        numList: [...this.data.numList, ...newArr]
      })

      wx.hideLoading()
    }, 1000)
  },

  // refreshHandler scroll-view 中绑定的处理下拉刷新数据的 事件处理函数
  refreshHandler() {
    wx.showToast({
      title: '刷新成功',
    })
    this.setData({
      numList: [1, 2, 3],
      isTriggered: false
    })
  }
})