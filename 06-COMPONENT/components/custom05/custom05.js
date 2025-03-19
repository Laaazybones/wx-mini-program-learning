// components/custom05/custom05.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 100
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 子组件向父组件传递数据，需要使用 this.triggerEvent ， 
    // 参数一：自定义的数据传递事件名称
    // 参数二：需要传递的数据
    sendData() {
      this.triggerEvent('sendDataEvent', this.data.num)
    }
  }
})