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
    },

    // 复选框组件是一个公共组件
    // 需要在多个页面、多个项目中使用
    // 在使用的时候，有些地方希望默认是选中状态，有些的房希望默认是不选中的状态
    // 怎么处理呢？
    // 首先需要设置复选框的默认状态为不选中状态
    // 如果希望复选框默认为选中状态，则传递属性checked=true到复选框组件
    checked: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isChecked: false
  },

  // 如果需要将properties中的属性数据赋值给data属性
  // 那么可以使用observers进行监听修改
  observers: {
    // 监听父组件传递过来的复选框状态
    checked: function (newChecked) {
      this.setData({
        isChecked: newChecked
      })
      // console.log(this.data.isChecked)
    }
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
      console.log(this.data.isChecked)

      // 在 JS 中可以访问和获取 properties 中的数据，并且还能对他进行修改，但是一般不建议这么操作，因为会造成数据流的混乱
      // console.log(this.properties.label)
    }
  }
})