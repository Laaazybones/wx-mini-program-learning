// pages/profile/profile.js
Page({
  data: {
    numList: [1, 2, 3],
    fruitList: [
      { id: 1, name: '苹果', price: 66 },
      { id: 2, name: '香蕉', price: 77 },
      { id: 3, name: '西瓜', price: 88 }
    ],
    obj: {
      name: 'tom',
      age: 18
    },
    num: 1,
    isFlag: false
  },

  updateNum() {
    this.setData({
      num: this.data.num + 1
    })
  }
})