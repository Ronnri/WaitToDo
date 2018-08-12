// pages/todo/todo.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: "to do list here",
    navData: app.navData.nav_todo,
    cardData:[
      {
        title:"ttt",
        time:"2018-7-28",
        img:'1.png',
        onItemClick:''
      },
      {
        title: "ttt1",
        time: "tttime1",
        img: '2.png',
        onItemClick: ''
      },
      {
        title: "ttt2",
        time: "tttime2",
        img: '3.png',
        onItemClick: ''
      },
      {
        title: "ttt",
        time: "2018-7-28",
        img: '1.png',
        onItemClick: ''
      },
      {
        title: "ttt1",
        time: "tttime1",
        img: '2.png',
        onItemClick: ''
      },
      {
        title: "ttt2",
        time: "tttime2",
        img: '3.png',
        onItemClick: ''
      }
    ]
  },

  scrollFun: function() {

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
    this.setData({
      list:"schedule list here",
      navData: app.navData.nav_schedule,
    })
  },
  gotoSettings: function () {
    this.setData({
      list: "settings here",
      navData: app.navData.nav_settings,
    })
  },
  gotoToDo: function () {
    this.setData({
      list: "to do list here",
      navData: app.navData.nav_todo,
    })
  }
})