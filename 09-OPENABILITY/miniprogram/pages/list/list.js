Page({
  // 快速验证手机
  getPhoneNumber(event) {
    // 通过事件对象，可以在 event.detail 中获取到 code 属性
    // code：动态令牌，可以使用 code 获取用户的手机号
    // 需要将 code 发送给后端，后端在接收到 code 后，调用API，得到用户真实手机号
    // 在换取手机号成功后，后端会将手机号返回给前端
    console.log(event)
  },
  
  // 实时验证手机
  getRealtimePhoneNumber(event) {
    console.log(event)
  },
})