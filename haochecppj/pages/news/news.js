// pages/news/news.js
var app = getApp();
//引入这个插件，使html内容自动转换成wxml内容
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{
    xin:'',
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var newId = options.newId;
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/News/detail',
      method: 'post',
      data: {
        news_id : newId,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        // console.log(res.data);
        //--init data 
        var xin = res.data;
        console.log(xin);
        var content = xin.content;
        WxParse.wxParse('content', 'html', content, that, 8);
        that.setData({
          xin: xin,
        });

      },
      error: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000,
        });
      },

    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})