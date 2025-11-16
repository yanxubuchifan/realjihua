// app.ts
// 主色#22a4ff
App<IAppOption>({
  globalData: {
        userInfo: null
  },
  onLaunch() {
        // 检查登录状态
    const isLogin = wx.getStorageSync('isLogin')
    // 如果已登录且当前页面是登录页，则跳转到首页
    if (isLogin) {
      const pages = getCurrentPages()
      
      if (pages.length > 0 && pages[0].route === 'pages/login/login') {

      }
    }
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})