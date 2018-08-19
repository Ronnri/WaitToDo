// pages/todo/todo.js


const app = getApp();
const dateTimePicker = require('../../utils/dateTimePicker.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime:"00:00",
    endTime:"23:59",
    repeatTypeRange:[
      "only once",
      "every day",
      "a week",
      // "a mouth",
      // "a year",
    ],
    repeatRule:{
      // 按周重复的选择
      noRepeat:[
        { name: "1", value: "周一",checked:true},
        { name: "2", value: "周二" },
        { name: "3", value: "周三" },
        { name: "4", value: "周四" },
        { name: "5", value: "周五" },
        { name: "6", value: "周六" },
        { name: "7", value: "周日" },
      ]
    },
    showAmountModal: {
      showModal: 'hideModal',
      showMask: 'hideMask',
    },
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

  /**
   * 添加待做事项
   */
  addToDo: function() {
    let nowYear = (new Date()).getFullYear();
    // // 获取完整的年月日 时分秒，以及默认显示的数组
    // let obj = dateTimePicker.dateTimePicker(nowYear, nowYear+1);
    
    // 数据初始化
    this.setData({
      showAmountModal: {
        showModal: 'showModal',
        showMask: 'showMask',
      },
      // dateTime: obj.dateTime,
      // dateTimeArray: obj.dateTimeArray,
      // dateTimeRange: obj.dateTime,
      // dateTimeArrayRange: obj.dateTimeArray,

      startDate: dateTimePicker.getMyDay(0),
      endDate: dateTimePicker.getMyDay(3),
      date: dateTimePicker.getMyDay(0),
      time: dateTimePicker.getMyTime(),
      repeatType:0,
      whatIsTitleBord: "has-bord",
      whatIsContentBord: "has-bord",
      title: "",
      content:"",
      checkboxChange:["1"],
    })
  },

/**
 * 处理输入的title
 */
  inputTitle: function(e){
    this.setData({ title: e.detail.value });
  },
  /**
 * 处理输入的content
 */
  inputContent: function (e) {
    this.setData({ content: e.detail.value });
  },

/**
 * 重新设置日期
 */
  bindDateChange: function (e) {
    this.setData({date:e.detail.value});

  },
  /**
   * 重新设置时间
   */
  bindTimeChange: function(e){
    this.setData({ time: e.detail.value });
  },
  /**
   * 复选框change事件监听
   */
  checkboxChange:function(e){
    this.setData({ checkboxChange: e.detail.value });
  },

/**
 * 提交新的待做
 */
  submit: function(){

    if (this.data.title == null || this.data.title == "" || this.data.content == null || this.data.content == ""){
      if (this.data.title == null || this.data.title == "") {
        this.setData({ whatIsTitleBord: "has-bord-danger", });
      }else{
        this.setData({ whatIsTitleBord: "has-bord", });
      }
      if (this.data.content == null || this.data.content == "") {
        this.setData({ whatIsContentBord: "has-bord-danger", }); 
      }else{
        this.setData({ whatIsContentBord: "has-bord", });
      }

      wx.showToast({
        title: '必填项要好好填哦~',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }else{
      this.setData({ whatIsTitleBord: "has-bord", });
      this.setData({ whatIsContentBord: "has-bord", });
    }


    let eventTime = "";
    let rType = "";

    switch (this.data.repeatType.toString()){
      // only once
      case "0": rType = "x"; eventTime = this.data.date + " " + this.data.time;     
      break; 
      //every day
      case "1": rType = "d"; eventTime = this.data.time; 
      break;
      // a week
      case "2":
       rType = "w" + this.data.checkboxChange.join("");
       eventTime = this.data.time; 
      break;
      default: wx.showToast({
        title: '系统繁忙',
        icon: 'none',
        duration: 1000,
        mask: true
      });return;

   };
    let sdf={
      usr: 'xu da pang',
      title: this.data.title,
      content: this.data.content,
      backimg: "",
      repeat_type: rType,
      event_time: eventTime,
  };
    console.log("rulala", sdf);
    wx.request({
      url: 'https://www.bennkyou.top/TodoServer/addInfor',
      method: "POST",
      data: {
        usr: 'xu da pang',
        title: this.data.title,
        content: this.data.content,
        backimg:"",
        repeat_type: rType,
        event_time: eventTime,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if(res.statusCode == "200"){
          console.log("add success!", res.data);
          wx.showToast({
            title: '成功',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
        }else{
          wx.showToast({
            title: '操作失败!',
            icon: 'none',
            duration: 1000,
            mask: true
          })
          console.log("add fail!", res.data);
        }
        
      }
    })

    this.setData({
      showAmountModal: {
        showModal: 'hideModal',
        showMask: 'hideMask',
      },
    });
  },

/**
 * 隐藏模态框
 */
  hideAmountModal: function(){
    this.setData({
      showAmountModal: {
        showModal: 'hideModal',
        showMask: 'hideMask',
      },
    });
  },

  // },
  // /**
  //  * 时间选择列更改时间
  //  * 主要是动态改变月日期
  //  */
  // changeDateTimeColumn(e) {
  //   var arr = this.data.dateTimeRange, dateArr = this.data.dateTimeArrayRange;

  //   //月份被修改，重新计算日期
  //   if(e.detail.column == 1){
  //     arr[e.detail.column] = e.detail.value;
  //     dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
  //     this.setData({
  //       dateTimeArrayRange: dateArr,
  //       dateTimeRange: arr
  //     });
  //   }
    
  // },
  // /**
  //  * 确认对时间的修改
  //  */
  // changeDateTime(e){
  //   var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;
  //   arr= e.detail.value;

  //   this.setData({
  //     dateTimeArray: dateArr,
  //     dateTime: arr
  //   });
  // },

  /**
   * 选择重复类型repeatType
   */
  changeRepeatType(e){
    this.setData({
      repeatType:e.detail.value
    });
  },

/**
 * 页面局部切换
 */
  gotoSchedule: function () {
    this.setData({
      list:"schedule list here",
      navData: app.navData.nav_schedule,
    })
  },
  /**
 * 页面局部切换
 */
  gotoSettings: function () {
    this.setData({
      list: "settings here",
      navData: app.navData.nav_settings,
    })
  },
  /**
 * 页面局部切换
 */
  gotoToDo: function () {
    this.setData({
      list: "to do list here",
      navData: app.navData.nav_todo,
    })
  }
})