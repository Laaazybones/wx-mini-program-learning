const behavior = Behavior({
  
  /**
   * 组件的属性列表
   */
  properties: {
    label: {
      type: String,
      value: '请同意协议'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: 'Jerry',
    obj: {
      name: 'Sam'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateName() {
      this.setData({
        name: 'Tom'
      })
    }
  },

  lifetimes:{
    attached() {
      console.log('我是 behavior 的生命周期函数')
    }
  }
}) 

export default behavior