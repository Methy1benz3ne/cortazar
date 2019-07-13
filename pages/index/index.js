Page({
    data: {
    name: "科塔萨尔",
    engName: '(Julio Cortázar，1914-1984)',
    text: '车流以时速八十公里的速度朝着渐行渐增的灯火驶去，却没有人真正明白为什么要这样匆忙，为什么要在夜间公路上置身于陌生的车辆之中，彼此间一无所知，所有人都直直地目视前方，唯有前方。'
  },
  onLoad(query) {
    // 页面加载
    // console.info(`Page onLoad with query: ${JSON.stringify(query)}`);

    // console.log(res);
    // this.setData({name:)})

  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // navi = funciton() {
    //   my.navigateTo(/pages/cronopio/cronopio);
    // }
    // 页面显示
      // basement.db.collection("main").findOne({title:"main"}).then(res =>{
      // this.setData({name:res.result["name"],
      // engName : res.result["engName"],
      // text : res.result["text"]});
      // console.log(form)
      // console.log(engName)
  //  this.setData({form:'111'})
    // })
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },

  navi(){
    my.navigateTo({
      url: "/pages/tabs/tabs"
    })
  }
});
