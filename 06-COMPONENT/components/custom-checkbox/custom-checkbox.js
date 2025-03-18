// components/custom-checkbox/custom-checkbox.js
Component({

  options: {
    styleIsolation: "shared"
  },

  /**
   * 组件的属性列表：组件对外接收的属性，主要用来接收组件使用者传递给组件内部的数据和内容
   */
  properties: {
    // 两种写法：简写
    // label: String

    // 完整写法：
    label: {
      // type: 组件使用者传递的数据类型
      // 数据类型： String, Number, Object, Array, Boolean
      // 也可设置为null，表示不限制
      type: String,
      // value 表示默认值
      value: ''
    },

    position: {
      type: String,
      value: 'right'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isChecked: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateChecked() {
      this.setData({
        isChecked: !this.data.isChecked,
        // label: '在组件内部也可以修改传入的数据'
      })

      // 在 JS 中可以访问和获取 properties 中的数据，并且还能对他进行修改，但是一般不建议这么操作，因为会造成数据流的混乱
      console.log(this.properties.label)
    }
  }
})