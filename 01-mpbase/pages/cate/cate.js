// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // button身上的事件处理函数
  // currentTarget 事件绑定者，也就是指：哪个组件绑定了当前事件处理函数
  // target 事件触发者，也就是指，哪个组件触发了当前事件处理函数
  // 目前这两个属性都指向按钮， 因为是按钮绑定的事件处理函数，同时点击按钮触发事件处理函数
  // 这时候通过谁来获取数据都可以
  btnHandler(event) {
    console.log(event.currentTarget.dataset)
    console.log(event.target.dataset)
  },

  // view身上的事件处理函数
  parentHandler(event) {
    // 点击蓝色区域（不点击按钮）
    // currentTarget 事件绑定者：view
    // target 事件触发者：view
    // 由于点击的是view的内容，那么此时不论是currentTarget还是target都是一样的数据
    // console.log(event.currentTarget.dataset)
    // console.log(event.target.dataset)

    // 点击按钮（不点击蓝色区域）
    // currentTarget 事件绑定者：view
    // target 事件触发者：按钮
    // 如果想要获取view身上的数据，就必须使用currentTarget
    // 如果想要获取的是事件触发者本身的数据，则需要使用target
    // console.log(event.currentTarget.dataset)
    // console.log(event.target.dataset)

    // 在传递参数时，如果自定义属性是多个单词，单词与单词之间使用 - 连接，
    // 那么在事件对象中，属性会被自动转换成小驼峰命名，例如 parent-id => parentId
    // console.log(event.currentTarget.dataset.parentId)

    // 在传递参数时，如果自定义属性是多个单词，单词使用的是小驼峰命名，
    // 那么在事件对象中，属性会被自动转换成全小写，例如 parentName => parentname
    console.log(event.currentTarget.dataset.parentname)
  }
})