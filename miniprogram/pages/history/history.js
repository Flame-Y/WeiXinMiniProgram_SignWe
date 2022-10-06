// pages/history/history.js.
const { globalData } = getApp()
const db = wx.cloud.database()
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNewGuys: false,
    isOP: false,
    me: null,
    sumtime: null,
    userInfo: {
      avatarUrl: '../../images/avatar.png',
    },
    yesterday: [
      { name: '第一' },
      { name: '第二' },
      { name: '第三' },
      { name: '第四' },
      { name: '第五' }]
  },
  onLoad: function () {
    this.setData({
      isNewGuys: globalData.isNewPeople,
      isOP: globalData.isOP
    }), this.setUserInfoStorageTime();
  },
  getUserProfile() {
    var that = this;
    wx.showModal({
      title: "提示",
      content: "是否允许获取微信昵称和头像？",
      success(res) {
        if (res.confirm) {
          wx.getUserProfile({
            desc: "用于完善用户资料",
            success: (res) => {
              that.setData({
                userInfo: res.userInfo
              });
              wx.setStorageSync("userInfo", res.userInfo);
              let setNowTime = Date.now() + 3600 * 1000 * 24 * 30;
              wx.setStorageSync("userInfoStorageTime", setNowTime);
            },
            fail: function (err) {
              console.log(err);
            },
          });
        }
      },
    });
  },
  setUserInfoStorageTime() {
    var that = this;
    let nowTime = Date.now();
    let oldTime = wx.getStorageSync("userInfoStorageTime");
    let userInfo = wx.getStorageSync("userInfo");
    if (userInfo.nickName != undefined && userInfo.nickName != null && userInfo.nickName != "") {
      if (oldTime && nowTime < oldTime) {
        that.setData({
          userInfo: userInfo
        })
        return;
      } else {
        that.getUserProfile();
      }
    } else {
      that.getUserProfile();
    }
  },
  onShow: function () {
    this.getMe()
  },

  onPullDownRefresh: function () {
    this.getMe()
    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 1000);
  },

  getMe: function () {
    wx.cloud.database().collection('check').where({
      "_openid": globalData.openid
    }).get({
      success: res => {
        this.setData({
          me: res.data[0],
          isNewGuys: globalData.isNewPeople,
          isOP: globalData.isOP
        })
      }
    })
    wx.cloud.database().collection('chairs').where({
      "_id": "yesterday"
    }).get({
      success: res => {
        this.setData({
          yesterday: res.data[0].yesterday
        })
      }
    })
  },
  gorename() {
    if (this.data.isNewGuys) {
      wx.navigateTo({
        url: "/pages/rename/rename"
      })
    }
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    this.setData({
      avatarUrl,
    })
  },
  goadmin() {
    if (this.data.isOP) {
      wx.navigateTo({
        url: "/pages/op/op"
      })
    }
  }
})