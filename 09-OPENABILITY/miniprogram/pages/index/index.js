// index.js
Page({

  data: {
    avatarUrl: '../../assets/category/cate.png',
    nickNameObj: {}
  },

  chooseAvatar(event) {
    // console.log(event)
    const { avatarUrl } = event.detail
    this.setData({
      avatarUrl
    })
  },

  onSubmit(event) {
    console.log("@",event)
    console.log("@@", event.detail)
    console.log("@@@", event.detail.value)
    // this.setData({
    //   nickNameObj: event.detail.value
    // })
    console.log(event.detail.value.nickname)
    // console.log(this.data.nickNameObj.nickname)
  }

})
