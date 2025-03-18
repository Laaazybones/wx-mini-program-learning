// components/custom04/custom04.js
Component({
  data: {
    num: 10,
    count: 100,
    obj: {
      name: 'Tom',
      age: 18
    },
    arr: [1, 2, 3]
  },
  /**
   * 组件的属性列表
   */
  properties: {
    label: {
      type: String,
      value: '默认标题'
    }
  },


  // 用于监听数据或属性是否发生变化
  observers: {
    // key: 需要监听的属性
    // value: 回调函数，形参为新值
    // 对data中的数据进行监听，回调函数不监听数据的初始化，只监听之后数据的变化，
    num: function(newNum) {
      console.log(newNum)
    },

    // 对properties中的数据，只要编译成功，就立马监听父组件传递给子组件的数据，对数据的修改也能监听
    label: function(newLabel) {
      console.log(newLabel)
    }

    // 同时监听多个数据
    // 'num, count': function(newNum, newCount) {
    //   console.log(newNum, newCount)
    // },
    
    // 监听属性内部数据（数组、对象）的修改
    // 'obj.name': function(newName) {
    //   console.log(newName)
    // },

    // 'arr[1]': function(newNum) {
    //   console.log(newNum)
    // }

    // 监听整个对象的数据修改，使用通配符**
    // 'obj.**': function(newObj) {
    //   console.log(newObj)
    // }

  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateData() {
      this.setData({
        num: this.data.num + 1,
        // count: this.data.count + 1,
        // 'obj.name': 'Jerry',
        // 'arr[1]': 999，
        label: '更新后的标题'
      })
    }
  }
})