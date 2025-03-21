// 通过 getApp() 可以获取 APP 对象实例
const appInstance = getApp()

Page({
  login() {
    // appInstance 中含有一些生命周期方法，但是：
    // 不要通过获取到的 appInstance 来调用生命周期钩子函数
    console.log(appInstance)
    
    appInstance.setToken('agsduascahsinadsafwfs')
  }
})