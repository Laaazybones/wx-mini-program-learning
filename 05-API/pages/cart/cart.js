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
  }
})