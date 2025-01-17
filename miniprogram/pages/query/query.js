// pages/query/query.js
import { apiGetAllChairs } from "../../request/api/chairs"
import { apiSignOut } from "../../request/api/chairs"

const {
  globalData
} = getApp()
const db = wx.cloud.database()
const _ = db.command
Page({
  data: {
    chairs: [],
    scale: 1,
    membershow: false,
    machineshow: false,
    doorshow: false,
    bookshow: false,
    aircshow: false,
    airc1show: false,
    airc2show: false,
    sinkshow: false,
    isOP: false,
    hEnough: false,
  },
  onLoad: function (options) {
    apiGetAllChairs().then(function (res) {
      console.log(res);
    })
    // apiSignOut(1,"o8Mur5TpKr-fY-SXt4Y_z-WIfMAU").then(function (res) {
    //   console.log(res);
    // })
    this.getC()
    var h = wx.getSystemInfoSync().windowHeight;
    if (h >= 642)
      this.setData({
        hEnough: true
      })
  },
  onShow: function () {
    wx.startPullDownRefresh()
    this.setData({
      isOP: globalData.isOP
    })
  },
  onPullDownRefresh: function () {
    this.getC()
    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 1000);
  },
  getC: function () {
    db.collection('chairs').where({
      _id: "chairs"
    }).get({
      success: (res) => {
        console.log(res);
        this.setData({
          chairs: res.data[0].chairs,
        })

      }
    })
  },
  onClose: function () {
    this.setData({
      show: false
    })
  },
  memberShow() {
    this.setData({
      membershow: true
    });
  },
  memberHide() {
    this.setData({
      membershow: false
    });
  },
  machineShow() {
    this.setData({
      machineshow: true
    })
  },


  machineHide() {
    this.setData({
      machineshow: false
    });
  },
  doorShow() {
    this.setData({
      doorshow: true
    });
  },
  doorHide() {
    this.setData({
      doorshow: false
    });
  },
  bookShow() {
    this.setData({
      bookshow: true
    });
  },
  bookHide() {
    this.setData({
      bookshow: false
    });
  },
  aircShow() {
    this.setData({
      aircshow: true
    });
  },
  aircHide() {
    this.setData({
      aircshow: false,
      airc1show: false,
      airc2show: false
    });
  },
  airc1() {
    this.setData({
      aircshow: true,
      airc1show: true,
    });
  },
  airc2() {
    this.setData({
      aircshow: true,
      airc2show: true,
    })
  },
  sinkShow() {
    this.setData({
      sinkshow: true
    });
  },
  sinkHide() {
    this.setData({
      sinkshow: false
    });
  },
  refresh(e) {
    this.onLoad();
    console.log(e);
  },
  clickme(res) {
    console.log(res);
    const num = res.currentTarget.dataset.num
    if (this.data.isOP) {
      wx.showModal({
        title: num + ' 号座位',
        content: '强制释放座位会导致占用者当天无法再次打卡，状态将持续至当日结算',
        cancelText: "查看座位",
        confirmText: "释放座位",
        confirmColor: "#FA5151",
        // cancelColor: "#999999",
        success(res1) {
          if (res1.confirm) {
            wx.showLoading({
              title: '正在重置',
              mask: true
            })
            wx.cloud.callFunction({
              name: 'forcesignout',
              data: {
                num: num
              },
              success: res => {
                wx.startPullDownRefresh()
                wx.hideLoading()
              }
            })
          } else {
            wx.navigateTo({
              url: "/pages/check/check?chair=" + num
            })
          }
        }
      })
    } else {
      wx.navigateTo({
        url: "/pages/check/check?chair=" + num
      })
    }
  },
  test: function () {
    var tt = wx.cloud.callFunction({
      name: 'test'
    })
    console.log(tt);
  },
  goadmin() {
    if (this.data.isOP) {
      wx.navigateTo({
        url: "/pages/op/op"
      })
    }
  }
})