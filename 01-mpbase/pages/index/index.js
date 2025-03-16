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
  },

  // 页面初次加载时，只要页面没有被卸载，就只调用一次
  onLoad(){
    console.log('onLoad 页面被加载了')
  },

  // 只要进入这个页面，就会调用
  onShow() {
    console.log('onShow 页面被渲染了')
  },

  // 页面初始化完成时调用，只要页面没有被销毁，就只调用一次 
  onReady() {
    console.log('onReady 页面初次渲染完毕')
  },

  // 页面被隐藏时调用，当小程序进入后台时也会调用
  onHide() {
    console.log('onHide 页面被隐藏了')
  },

  // 页面被卸载时调用
  onUnload() {
    console.log('onUnload 页面被卸载了')
  }

  // 【注意】1. tabBar之间的页面切换，只会导致页面触发onHide隐藏，不会被销毁
  // 2. 如果是点击页面左上角的返回按钮，则当前页面会触发onUnload，被销毁
})
