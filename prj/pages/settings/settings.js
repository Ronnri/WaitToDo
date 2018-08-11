// pages/settings/settings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: [
      {
        name: "待做",  //文本
        current: 0,    //是否是当前页，0不是  1是
        ico: 'icon-bijiben',  //不同图标
        fn: 'gotoToDo'   //对应处理函数
      }, {
        name: "日程",
        current: 0,
        ico: 'icon-shufa',
        fn: 'gotoSchedule'
      }, {
        name: "设置",
        current: 1,
        ico: 'icon-wenju',
        fn: 'gotoSettings'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  gotoSchedule: function () {
    wx.navigateTo({
      url: '../schedule/schedule',
    })
  },
  gotoToDo: function () {
    wx.navigateTo({
      url: '../todo/todo',
    })
  }
})