//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
  },
  navData:{
    nav_todo: [
      {
        name: "待做",  //文本
        current: 1,    //是否是当前页，0不是  1是
        ico: 'icon-bijiben',  //不同图标
        fn: 'gotoToDo'   //对应处理函数
      }, {
        name: "日程",
        current: 0,
        ico: 'icon-shufa',
        fn: 'gotoSchedule'
      }, {
        name: "设置",
        current: 0,
        ico: 'icon-wenju',
        fn: 'gotoSettings'
      }
    ],
    nav_schedule: [
      {
        name: "待做",  //文本
        current: 0,    //是否是当前页，0不是  1是
        ico: 'icon-bijiben',  //不同图标
        fn: 'gotoToDo'   //对应处理函数
      }, {
        name: "日程",
        current: 1,
        ico: 'icon-shufa',
        fn: 'gotoSchedule'
      }, {
        name: "设置",
        current: 0,
        ico: 'icon-wenju',
        fn: 'gotoSettings'
      }
    ],
    nav_settings: [
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
    ]
  }
})