Page({
  data: {
    text:'',
    index:{},
    title:''
  },
  onLoad(query) {
    console.log(query)
    basement.db.collection("main").findOne({query: query.index }).then(res=>{
      this.setData({text : res.result["text"]})
      this.setData({title: res.result["title"]} )
    })
    console.log(text)
  },
});
