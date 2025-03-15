// pages/cart/cart.js
Page({
  // button绑定的事件函数
  btnHandler(event) {
    console.log(event)
  },

  // view绑定的事件函数
  parentHandler(event) {
    // 点击按钮时，事件对象上的mark获取的是 事件触发节点 和其父节点 身上所有的mark数据
    // 点击蓝色区域时，事件对象上的mark获取的是 view 身上绑定的数据
    console.log(event)
  },

  data: {
    name: '张三',
    age: 18,
    obj: {
      num: 2
    },
    id: 1
  }
})


// mark 和 data- 的区别在于：mark可以获得事件触发者及其父组件所有组件的mark属性值，而data-只能获取事件触发者（target）或事件绑定者（currentTarget）单个组件绑定的数据