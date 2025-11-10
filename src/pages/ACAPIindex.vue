<template>
    <ac-layout>

        <ac-view class="index">
            <ac-view class="index-hd">
                <ac-view class="index-desc">MiniAppUI接口能力</ac-view>
            </ac-view>
            <ac-view class="index-bd">
                <ac-view class="kind-list">
                    <ac-block ac:for="(item, id) in list" :key="id">
                        <ac-view class="kind-list-item">
                            <ac-view :id="item.id" class="kind-list-item-hd"
                                     :class="{'kind-list-item-hd-show':item.open}" @tap="kindToggle">
                                <ac-view class="kind-list-text">{{item.name}}</ac-view>
                            </ac-view>
                            <ac-view class="kind-list-item-bd" :class="{'kind-list-item-bd-show':item.open}">
                                <ac-view class="navigator-box" :class="{'navigator-box-show':item.open}">
                                    <ac-block ac:for="(page, id) in item.pages" :key="id">
                                        <ac-navigator class="navigator" :url="`${page.path}`" openType="navigate">
                                            <ac-view class="navigator-text">{{page.title}}</ac-view>
                                            <ac-view class="navigator-arrow"></ac-view>
                                        </ac-navigator>
                                    </ac-block>
                                </ac-view>
                            </ac-view>
                        </ac-view>
                    </ac-block>
                </ac-view>
            </ac-view>
        </ac-view>
    </ac-layout>

</template>

<script>
  export default {
    name: 'ACApiIndex',
    data() {
      return {
        isShow: true,
        isShowView: false,
        isShowForm: false,
        isShowBase: false,
        list: [{
          id: 'application',
          name: '调用应用',
          open: false,
          // pages: ['view', 'scroll-view', 'swiper']
          pages: [
            {
              path: '/pages/transferApplicaltion',
              title: '调用应用'
            },
            {
              path: '/pages/applicaltionAuthorization',
              title: '应用授权'
            }
          ]
        }, {
          id: 'network',
          name: '网络',
          open: false,
          // pages: ['view', 'scroll-view', 'swiper']
          pages: [
            {
              path: '/pages/ACAPIrequset',
              title: '发起请求'
            },
            {
              path: '/pages/ACAPIuploadFile',
              title: '上传文件'
            },
            {
              path: '/pages/ACAPIdownloadFile',
              title: '下载文件'
            },
            {
              path: '/pages/ACAPIstorage',
              title: '数据缓存'
            },
            {
              path: '/pages/ACAPIsqlite',
              title: '数据库'
            }
          ]
        }, {
          id: 'media',
          name: '媒体',
          open: false,
          pages: [
            {
              path: '/pages/ACAPIimg',
              title: '图片'
            },
            {
              path: '/pages/ACAPIrecord',
              title: '录音'
            },
            {
              path: '/pages/ACAPIvoice',
              title: '音频播放'
            },
            {
              path: '/pages/ACAPIvideo',
              title: '视频'
            },
            {
              path: '/pages/ACAPIfile',
              title: '文件'
            }
          ]
        }, {
          id: 'location',
          name: '位置',
          open: false,
          pages: [
            {
              path: '/pages/ACAPIgetLocation',
              title: '获取位置'
            },
            {
              path: '/pages/ACAPIchooseLocation',
              title: '选择位置'
            },
            {
              path: '/pages/ACAPIopenLocation',
              title: '查看位置'
            }
          ]

        }, {
          id: 'system',
          name: '设备',
          open: false,
          pages: [
            {
              path: '/pages/ACAPIsystemInfo',
              title: '系统信息'
            },
            {
              path: '/pages/ACAPInetworkStatus',
              title: '网络状态'
            },
            {
              path: '/pages/ACAPIaccelerometer',
              title: '加速度计'
            },
            {
              path: '/pages/ACAPIcompass',
              title: '罗盘'
            },
            {
              path: '/pages/ACAPIcall',
              title: '拨打电话'
            },
            {
              path: '/pages/ACAPIscanCode',
              title: '扫码'
            },
            {
              path: '/pages/ACAPIclipboard',
              title: '剪贴板'
            },
            {
              path: '/pages/ACAPIscreenBrightness',
              title: '屏幕亮度'
            },
            {
              path: '/pages/ACAPIuserCaptureScreen',
              title: '用户截屏事件'
            },

            {
              path: '/pages/ACAPIvibrate',
              title: '震动'
            },

          ]
        }, {
          id: 'interactive',
          name: '交互反馈',
          open: false,
          pages: [
            {
              path: '/pages/ACAPItoast',
              title: '提示 toast'
            },
            {
              path: '/pages/ACAPIloading',
              title: '加载框 loading'
            },
            {
              path: '/pages/ACAPImodal',
              title: '对话框 modal'
            },
            {
              path: '/pages/ACAPIactionSheet',
              title: '动作面板 actionSheet'
            }
          ]
        }, {
          id: 'Interface',
          name: '界面',
          open: false,
          pages: [
            {
              path: '/pages/ACAPInavigationBar',
              title: '设置导航条'
            },
            {
              path: '/pages/ACAPItabBar',
              title: '设置tabBar'
            },
            {
              path: '/pages/ACAPIbackground',
              title: '设置窗口背景'
            },

            {
              path: '/pages/ACNavigator',
              title: '导航'
            },

            {
              path: '/pages/ACAPIpageScrollTo',
              title: '位置'
            },
            {
              path: '/pages/ACAPIpullDownRefresh',
              title: '下拉刷新'
            },

          ]
        },

          {
            id: 'pay',
            name: '支付',
            open: false,
            pages: [
              {
                path: '/pages/ACAPIwxPayment',
                title: '微信支付'
              },
              {
                path: '/pages/ACAPIaliRequestPayment',
                title: '支付宝支付'
              }
            ]
          },
          {
            id: 'event',
            name: '自定义事件',
            open: false,
            pages: [
              {
                path: '/pages/ACAPIevent',
                title: '自定义事件'
              }
            ]
          }
        ]
      }
    },
    methods: {
      push(url) {
        appcan.navigateTo({
          url: url
        })
      },
      test: function () {
        console.log("pptest1")
      },
      kindToggle: function (e) {
        var id = e.currentTarget.id
        var list1 = this.list
        for (var i = 0, len = list1.length; i < len; ++i) {
          if (list1[i].id == id) {
            list1[i].open = !list1[i].open
          } else {
            list1[i].open = false
          }
        }
        this.list = list1
      }

    }
  }
</script>

<style>

    .ac-image {
        width: 100%;
        height: 100%;
    }
    .index-desc{
      padding:20px;
    }
    body{
      color:#282aa5;
      background-color:#fff;
      padding:30px;
    }
    .kind-list-item{
      font-size: 16px;
    }
    .navigator-box-show{
      background:#eee;
      border-radius: 20px;
    }
    .ac-button-primary.no-hover-class{
      border:0;
      color:#fff;
      background: -webkit-gradient(linear,left top,right top,from(#272aa4),to(#7545ff));
      background: linear-gradient(90deg,#272aa4,#7545ff);
    }
</style>
