Page({
  data: {
    items2: [
      {
        title: '克罗诺皮奥是什么'
      },
      {
        title: '科塔萨尔简介'
      },
      {
        title: '小说介绍'
      },
      {
        title: '人物评价'
      },
      {
        title:'狮子'
      },
      {title: '上楼梯指南'},
      {
        title: '关于小程序'
      },
    ],
  },
  onLoad(query){
        my.getAuthCode({
  scopes: 'auth_user',
  success: (res) => {
    console.info({
	  content: res.authCode,
	});
  },
  fail: (res) => {
    console.log("fail");
    my.navigateBack({
      
    });
  }
});
  },
  onItemClick(ev) {
    my.navigateTo({
      url: "/pages/cronopio/cronopio?index="+ev.index
    });
    // my.alert({
    //   content: `点击了第${ev.index}行`,
    // });
  },
});