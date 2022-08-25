// pages/query/query.js
const {
  globalData
} = getApp()
const db = wx.cloud.database()
const _ = db.command
Page({
  data: {
    div: [{
      word: '空',
      type: '',
      location: '(1,1)'
    }, {
      word: '成员工位',
      type: '',
      location: '(1,2)'
    }, {
      word: '成员工位',
      type: '',
      location: '(1,3)'
    }, {
      word: '成员工位',
      type: '',
      location: '(1,4)'
    }, {
      word: '成员工位',
      type: '',
      location: '(1,5)'
    }, {
      word: '成员工位',
      type: '',
      location: '(1,6)'
    }, {
      word: '成员工位',
      type: '',
      location: '(1,7)'
    }, {
      word: '成员工位',
      type: '',
      location: '(1,8)'
    }, {
      word: '空',
      type: '',
      location: '(2,1)'
    }, {
      word: '空',
      type: '',
      location: '(2,2)'
    }, {
      word: '空',
      type: '',
      location: '(2,3)'
    }, {
      word: '空',
      type: '',
      location: '(2,4)'
    }, {
      word: '空',
      type: '',
      location: '(2,5)'
    }, {
      word: '成员工位',
      type: '',
      location: '(2,6)'
    }, {
      word: '成员工位',
      type: '',
      location: '(2,7)'
    }, {
      word: '空',
      type: '',
      location: '(2,8)'
    }, {
      word: '空',
      type: '',
      location: '(3,1)'
    }, {
      word: '流动工位1',
      type: '1',
      location: '(3,2)'
    }, {
      word: '流动工位1',
      type: '2',
      location: '(3,3)'
    }, {
      word: '流动工位1',
      type: '3',
      location: '(3,4)'
    }, {
      word: '空',
      type: '',
      location: '(3,5)'
    }, {
      word: '成员工位',
      type: '',
      location: '(3,6)'
    }, {
      word: '成员工位',
      type: '',
      location: '(3,7)'
    }, {
      word: '空',
      type: '',
      location: '(3,8)'
    }, {
      word: '空',
      type: '',
      location: '(4,1)'
    }, {
      word: '成员工位',
      type: '',
      location: '(4,2)'
    }, {
      word: '流动工位1',
      type: '4',
      location: '(4,3)'
    }, {
      word: '成员工位',
      type: '',
      location: '(4,4)'
    }, {
      word: '空',
      type: '',
      location: '(4,5)'
    }, {
      word: '空',
      type: '',
      location: '(4,6)'
    }, {
      word: '空',
      type: '',
      location: '(4,7)'
    }, {
      word: '空',
      type: '',
      location: '(4,8)'
    }, {
      word: '空',
      type: '',
      location: '(5,1)'
    }, {
      word: '空',
      type: '',
      location: '(5,2)'
    }, {
      word: '空',
      type: '',
      location: '(5,3)'
    }, {
      word: '空',
      type: '',
      location: '(5,4)'
    }, {
      word: '空',
      type: '',
      location: '(5,5)'
    }, {
      word: '流动工位1',
      type: '5',
      location: '(5,6)'
    }, {
      word: '流动工位1',
      type: '6',
      location: '(5,7)'
    }, {
      word: '灭火栓',
      type: '',
      location: '(5,8)'
    }, {
      word: '空',
      type: '',
      location: '(6,1)'
    }, {
      word: '成员工位',
      type: '',
      location: '(6,2)'
    }, {
      word: '流动工位1',
      type: '7',
      location: '(6,3)'
    }, {
      word: '成员工位',
      type: '',
      location: '(6,4)'
    }, {
      word: '空',
      type: '',
      location: '(6,5)'
    }, {
      word: '流动工位1',
      type: '8',
      location: '(6,6)'
    }, {
      word: '流动工位1',
      type: '9',
      location: '(6,7)'
    }, {
      word: '打印机',
      type: '',
      location: '(6,8)'
    }, {
      word: '空',
      type: '',
      location: '(7,1)'
    }, {
      word: '空',
      type: '',
      location: '(7,2)'
    }, {
      word: '空',
      type: '',
      location: '(7,3)'
    }, {
      word: '空',
      type: '',
      location: '(7,4)'
    }, {
      word: '空',
      type: '',
      location: '(7,5)'
    }, {
      word: '流动工位1',
      type: '10',
      location: '(7,6)'
    }, {
      word: '流动工位1',
      type: '11',
      location: '(7,7)'
    }, {
      word: '空',
      type: '',
      location: '(7,8)'
    }, {
      word: '空',
      type: '',
      location: '(8,1)'
    }, {
      word: '空',
      type: '',
      location: '(8,2)'
    }, {
      word: '空',
      type: '',
      location: '(8,3)'
    }, {
      word: '空',
      type: '',
      location: '(8,4)'
    }, {
      word: '空',
      type: '',
      location: '(8,5)'
    }, {
      word: '流动工位1',
      type: '12',
      location: '(8,6)'
    }, {
      word: '流动工位1',
      type: '13',
      location: '(8,7)'
    }, {
      word: '空',
      type: '',
      location: '(8,8)'
    }, {
      word: '空',
      type: '',
      location: '(9,1)'
    }, {
      word: '成员工位',
      type: '',
      location: '(9,2)'
    }, {
      word: '成员工位',
      type: '',
      location: '(9,3)'
    }, {
      word: '空',
      type: '',
      location: '(9,4)'
    }, {
      word: '空',
      type: '',
      location: '(9,5)'
    }, {
      word: '空',
      type: '',
      location: '(9,6)'
    }, {
      word: '空',
      type: '',
      location: '(9,7)'
    }, {
      word: '空',
      type: '',
      location: '(9,8)'
    }, {
      word: '空',
      type: '',
      location: '(10,1)'
    }, {
      word: '成员工位',
      type: '',
      location: '(10,2)'
    }, {
      word: '成员工位',
      type: '',
      location: '(10,3)'
    }, {
      word: '空',
      type: '',
      location: '(10,4)'
    }, {
      word: '成员工位',
      type: '',
      location: '(10,5)'
    }, {
      word: '成员工位',
      type: '',
      location: '(10,6)'
    }, {
      word: '空',
      type: '',
      location: '(10,7)'
    }, {
      word: '空',
      type: '',
      location: '(10,8)'
    }, {
      word: '空',
      type: '',
      location: '(11,1)'
    }, {
      word: '空',
      type: '',
      location: '(11,2)'
    }, {
      word: '空',
      type: '',
      location: '(11,3)'
    }, {
      word: '空',
      type: '',
      location: '(11,4)'
    }, {
      word: '成员工位',
      type: '',
      location: '(11,5)'
    }, {
      word: '成员工位',
      type: '',
      location: '(11,6)'
    }, {
      word: '空',
      type: '',
      location: '(11,7)'
    }, {
      word: '流动工位1',
      type: '14',
      location: '(11,8)'
    }, {
      word: '空',
      type: '',
      location: '(12,1)'
    }, {
      word: '流动工位1',
      type: '15',
      location: '(12,2)'
    }, {
      word: '流动工位1',
      type: '16',
      location: '(12,3)'
    }, {
      word: '空',
      type: '',
      location: '(12,4)'
    }, {
      word: '空',
      type: '',
      location: '(12,5)'
    }, {
      word: '空',
      type: '',
      location: '(12,6)'
    }, {
      word: '空',
      type: '',
      location: '(12,7)'
    }, {
      word: '流动工位1',
      type: '17',
      location: '(12,8)'
    }, {
      word: '空',
      type: '',
      location: '(13,1)'
    }, {
      word: '流动工位1',
      type: '18',
      location: '(13,2)'
    }, {
      word: '流动工位1',
      type: '19',
      location: '(13,3)'
    }, {
      word: '空',
      type: '',
      location: '(13,4)'
    }, {
      word: '流动工位1',
      type: '20',
      location: '(13,5)'
    }, {
      word: '流动工位1',
      type: '21',
      location: '(13,6)'
    }, {
      word: '空',
      type: '',
      location: '(13,7)'
    }, {
      word: '空',
      type: '',
      location: '(13,8)'
    }, {
      word: '空',
      type: '',
      location: '(14,1)'
    }, {
      word: '流动工位1',
      type: '22',
      location: '(14,2)'
    }, {
      word: '流动工位1',
      type: '23',
      location: '(14,3)'
    }, {
      word: '空',
      type: '',
      location: '(14,4)'
    }, {
      word: '流动工位1',
      type: '24',
      location: '(14,5)'
    }, {
      word: '流动工位1',
      type: '25',
      location: '(14,6)'
    }, {
      word: '空',
      type: '',
      location: '(14,7)'
    }, {
      word: '空',
      type: '',
      location: '(14,8)'
    }, ],
    scale: 1,
    chairs: [],
    show: false,
    isOP: false,
    dynamicHeight:1000
  },
  onLoad: function (options) {
    this.getC()
    var h = wx.getSystemInfoSync().windowHeight;
    this.setData({
      dynamicHeight:h
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
        let newDiv=this.data.div
        var p = 0;
        for (var i in newDiv) {
          if (newDiv[i].word === '流动工位1' || newDiv[i].word === '流动工位0') {
            newDiv[i].word = (res.data[0].chairs[p++]) ? '流动工位1' : '流动工位0'
          }
        }
        this.setData({
          // chairs: res.data[0].chairs,
          div:newDiv
        })

      }
    })
  },
  onChange(e) {
    console.log(e.detail)
  },
  onScale(e) {
    console.log(e.detail)
  },
  onClose: function () {
    this.setData({
      show: false
    })
  },
  onClickShow() {
    this.setData({
      show: true
    });
  },
  onClickHide() {
    this.setData({
      show: false
    });
  },
  noop() {},
  clickme(res) {
    const num = res.currentTarget.dataset.word
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