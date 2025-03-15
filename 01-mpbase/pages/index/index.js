// index.js
Page({

  // 事件处理函数需要写到index.js中的Page()方法中
  handler() {
    console.log('事件被触发了。。。')
  },

  getInputVal(event) {
    console.log(event.detail.value)
  },

  parentHandler() {
    console.log('这是父组件绑定的事件')
  },
  btnHandler() {
    console.log('这是子组件绑定的事件')
  }
})
