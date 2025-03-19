
// 为什么需要使用 Component 方法进行构造页面？
// Component 方法功能比 Page 方法强大很多
// 如果使用 Component 方法构造页面，可以实现更加复杂的页面逻辑开发
Component({
  // 小程序页面也可以使用 Component 方法进行构造
  // 注意事项：
  // 1. 要求 .json 文件中必须包含 usingComponents 字段
  // 2. 这里的配置要和 自定义组件 Component 中的配置项保持一致
  // 3. 页面中 Page 方法有一些钩子函数、事件监听方法，在这里这些方法必须都写在 methods 里面
  // 4. properties中的属性也可以被接收， 在onLoad中可以使用 this.data.id 来接收
  properties: {
    id: String,
    name: String
  },

  data: {
    num: 10
  },

  methods: {
    // 更新数据
    updateNum() {
      this.setData({
        num: this.data.num +1
      })
    },

    // 钩子函数
    onLoad(options) {
      console.log('onLoad!')
      console.log(options)
      console.log(this.data.id, this.data.name)
    }
  }
})