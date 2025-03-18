// components/custom03/custom03.js
Component({

  options: {
    // styleIsolation 配置组件样式隔离
    // isolated: 开启样式隔离，是默认选项
    // 在默认情况下，自定义组件和组件使用者如果存在相同的类名，类名不会相互影响

    // apply-shared: 表示组件的使用者的wxss定义的样式 能够影响到自定义组件
    // 但是自定义组件的样式不会影响组件使用者的样式
    // styleIsolation: "apply-shared"

    // shared: 组件的使用者的wxss定义的样式 能够影响到自定义组件
    // 并且 自定义组件的样式 也会 影响组件使用者的样式
    // 还会影响其他配置了 样式隔离为 apply-shared 和 shared 的组件
    styleIsolation: "shared"
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})