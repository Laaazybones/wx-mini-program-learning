// pages/cate/cate.js
Page({

  // 存储数据
  setStorage() {
    // 第一个参数：key
    // 第二个参数：value
    // wx.setStorageSync('num', 1)
    // 存储对象时，对象不需要使用 JSON.stringify 或 JSON.parse 进行转换
    // wx.setStorageSync('obj', { 'name':'张三', 'age': 19 })

    // ---------- 异步API ----------
    wx.setStorage({
      key: 'num',
      data: 2
    }) 

    wx.setStorage({
      key: 'obj',
      data: { 'name':'TOM', 'age':99 }
    }) 
  },

  // 获取数据
  async getStorage() {
    // 传参 key
    // const num = wx.getStorageSync('num')
    // const obj = wx.getStorageSync('obj')

    // console.log(num)    
    // console.log(obj)

    // ---------- 异步API ----------
    const { data } = await wx.getStorage({
      key: 'obj'
    })

    console.log(data)
  },

  // 删除数据
  removeStorage() {
    // 参数为key
    // wx.removeStorageSync('num')

    // ---------- 异步API ----------
    wx.removeStorage({
      key: 'num'
    })

  },

  // 清除数据
  clearStorage() {
    // wx.clearStorageSync()

    // ---------- 异步API ----------
    wx.clearStorage()
  },
})