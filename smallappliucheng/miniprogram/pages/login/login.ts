// login.ts
const app = getApp<IAppOption>()

Component({
  data: {
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
  },
  methods: {
    handleLogin() {
      // 获取用户信息
      wx.getUserProfile({
        desc: '用于登录小程序',
        success: (res) => {
          console.log('登录成功', res)
          // 保存用户信息到全局
          app.globalData.userInfo = res.userInfo
          
          // 存储登录状态
          wx.setStorageSync('isLogin', true)
          
          // 跳转到首页
          console.log("跳转了吗")
          wx.redirectTo({
            url: '/pages/log/log'
          })
          console.log("跳转了吗没有")
        },
        fail: (err) => {
          console.log('登录失败', err)
          wx.showToast({
            title: '登录失败，请重试',
            icon: 'none'
          })
        }
      })
    },
    tiaozhuan(){
        console.log("tiaozhuan")
        wx.redirectTo({
                url: '/pages/log/log'
              })
    }
  },
})