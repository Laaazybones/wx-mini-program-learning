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
    id: 1,
    number: 0,
    userInfo: {
      name: 'tom',
      age: 90,
      test: 222
    },
    list: [1, 2, 3],
    list2: [{'id': 1, 'name':'jerry'}],
    value: 123,
    isChecked: false
  },

  updateNum() {
    // 直接用原来的属性进行接收时，数据会被修改，但是页面上不能重新渲染
    // this.data.number += 1
    // console.log(this.data.number)

    // setData() 两个作用：1. 修改数据；2. 驱动视图（页面）更新
    this.setData({
      // key: 需要修改的属性，
      // value：修改后的新值
      number: this.data.number+1
    })
    console.log(this.data.number)
  },

  updateUserInfo() {
    // this.setData({
    //   // 当需要通过setData给对象新增/修改属性时，key需要使用a.b.c路径形式书写
    //   'userInfo.name': '张三',
    //   'userInfo.age': 99
    // })

    // 当需要修改的对象中属性特别多时，使用上面的方法就有点繁琐了，此时可以使用ES6提供的展开运算符和Object.assign()方法进行修改
    // 1. 通过展开运算符能够将对象中的属性复制给另一个对象
    // 后面的属性会覆盖前面的属性
    // const userInfo = {
    //   ...this.userInfo,
    //   name: '李四',
    //   age: 45
    // }

    // this.setData({
    //   // userInfo: userInfo
    //   // 当key和value命名相同时，可以简写
    //   userInfo
    // })

    // 2. Object.assign()
    // 这个方法是从后往前地逐步将后面的对象添加到前一个对象中，然后覆写前一个对象
    // const userInfo = Object.assign(this.data.userInfo, {name:'王五'}, {age:18})
    // this.setData({
    //   userInfo
    // })

    // 删除单个属性
    // delete this.data.userInfo.age
    // console.log(this.data.userInfo)
    // this.setData({
    //   userInfo: this.data.userInfo
    // })

    // 删除多个属性，使用rest对象来接收除了test和age属性之外的所有属性，这是一个对象
    const {test, age, ...rest} = this.data.userInfo
    this.setData({
      userInfo: rest
    })

  },

  updateList() {
    // 新增数组元素 - 直接使用push方法而不进行setdata，只能修改数组的值，但是不能重新渲染页面
    // 法一：
    // this.data.list.push(4)
    // this.setData({
    //   list: this.data.list
    // })

    // 法二：
    // const list = this.data.list.concat(4)
    // this.setData({
    //   list
    // })

    // 法三：
    // const list = [ ...this.data.list, 4 ]
    // this.setData({
    //   list
    // })

    // 修改数组元素
    // this.setData({
    //   'list[0]': 6,
    //   'list2[0].name': '张三'
    // })

    // 删除数组元素
    // 法一：
    // this.data.list.splice(1, 1) // 删除index==1处，长度为1的数据
    // this.setData({
    //   list: this.data.list
    // })

    // 法二：
    const list = this.data.list.filter(item => item != 2)
    this.setData({
      list
    })
  }
})


// mark 和 data- 的区别在于：mark可以获得事件触发者及其父组件所有组件的mark属性值，而data-只能获取事件触发者（target）或事件绑定者（currentTarget）单个组件绑定的数据

