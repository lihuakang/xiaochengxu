// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    gender:"男"
  },
  handleChange(e){
    let gender=e.detail.value;
    this.setData({
      gender
    });
  }
  ,
  handleInput(e){
    this.setData({
      num:e.detail.value
    })
  },
  handletap(e){
    const a=e.currentTarget.dataset.a;
    this.setData({
      num:this.data.num+a
    })
  }
})