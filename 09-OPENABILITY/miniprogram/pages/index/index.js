// index.js
Page({

  data: {
    avatarUrl: '../../assets/category/cate.png'
  },

  chooseAvatar(event) {
    // console.log(event)
    const { avatarUrl } = event.detail
    this.setData({
      avatarUrl
    })
  }

})
