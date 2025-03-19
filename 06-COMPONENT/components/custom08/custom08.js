// components/custom08/custom08.js
import behavior from './behavior'

Component({
  behaviors: [behavior],

  // 当behavior中的 properties, data, methods 与组件内部存在同名时
  // 根据就近原则，使用组件内部的数据，不使用behavior中的数据
  properties: {
    label: {
      type: String,
      value: '匿名！'
    }
  },

  data: {
    name: '组件内部的data.name',
    obj: {
      name: '组件内部的 data.obj.name',
      age: 99
    }
  },

  methods: {
    updateName() {
      this.setData({
        name: '组件内部的updateName方法'
      })
    }
  },

  // behavior 和 组件 内部的生命周期函数都会执行，先执行 behavior 再执行组件的生命周期函数
  lifetimes: {
    attached() {
      console.log('组件内部的 lifetimes 钩子函数')
    }
  }
})