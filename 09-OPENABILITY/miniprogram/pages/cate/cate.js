Page({
  // 监听页面按钮的转发 以及 右上角的转发按钮
  onShareAppMessage(obj) {
    console.log(obj)
    return {
      title: '这是一个神奇的网站！',
      path: 'pages/cate/cate',
      imageUrl: '../../assets/category/cate.png'
    }
  }
})