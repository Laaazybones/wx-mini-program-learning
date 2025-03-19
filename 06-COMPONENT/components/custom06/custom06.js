// components/custom06/custom06.js
Component({
  data: {
    name: 'tom'
  },
  // 组件生命周期声明
  lifetimes: {
    // 在组件实例刚刚被创建时执行，注意此时不能调用 setData
    // 可以在这里给组件添加一些自定义属性，使用 this 进行添加
    created() {
      console.log('组件 created')
      this.age = 10
      this.data.test = "test"
    },

    // 在组件实例挂载到页面，即进入页面节点树时执行
    // 页面的交互一般会在这个钩子函数中定义
    attached() {
      console.log('组件 attached')
      console.log(this.age)
      console.log(this.data.test)
    },

    // 在组件实例被销毁，即从页面节点树移除时执行
    detached() {
      console.log('组件 detached')
    }
  }
})