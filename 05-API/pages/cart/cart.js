// pages/cart/cart.js
Page({
  data: {
    numList: [1, 2, 3]
  },
  // 监听用户上拉加载
  onReachBottom() {
    // console.log('监听用户上拉')
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

  // 监听用户下拉刷新数据
  onPullDownRefresh() {
    // console.log('监听用户下拉数据')
    // 产品需求：
    // 用户下拉刷新后，numList变回初始化状态

    this.setData({
      numList: [1, 2, 3]
    })

    // 有时候下拉框不会自动弹回去，此时就需要手动进行关闭
    wx.stopPullDownRefresh()
  }
})