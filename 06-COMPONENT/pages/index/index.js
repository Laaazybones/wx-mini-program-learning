// index.js
Page({

  data: {
    isChecked: true // 默认初始化为true
  },

  getData(event) {
    this.setData({
      isChecked: event.detail
    })

    if(event.detail) {
      console.log('提交')
    } else {
      console.log('请同意！')
    }
  },

  // 获取子组件的实例对象
  getChildComponentObj() {
    // const res = this.selectComponent('.childStyle')  // 通过类选择器获取
    const res = this.selectComponent('#child')    // 通过id选择器获取
    console.log(res.data.isChecked)
  }

})
