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
  }

})
