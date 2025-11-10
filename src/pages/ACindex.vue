<template>
    <ac-layout>

        <ac-view class="index">
            <ac-view class="index-hd">
                <ac-image class="index-logo" src="./static/logo.png"></ac-image>
                <ac-view class="index-desc">以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见小程序开发文档。</ac-view>
            </ac-view>
            <ac-view class="index-bd">
                <ac-view class="kind-list">
                    <ac-block ac:for="(item, id) in list" :key="id">
                        <ac-view class="kind-list-item">
                            <ac-view :id="item.id" class="kind-list-item-hd"
                                     :class="{'kind-list-item-hd-show':item.open}" @tap="kindToggle">
                                <ac-view class="kind-list-text">{{item.name}}</ac-view>
                                <ac-image class="kind-list-img" :src="`./static/${item.id}.png`"></ac-image>
                            </ac-view>
                            <ac-view class="kind-list-item-bd" :class="{'kind-list-item-bd-show':item.open}">
                                <ac-view class="navigator-box" :class="{'navigator-box-show':item.open}">
                                    <ac-block ac:for="(page, id) in item.pages" :key="id">
                                        <ac-navigator class="navigator" :url="`${page.path}`" openType="navigate">
                                            <ac-view class="navigator-text">{{page.name}}</ac-view>
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
    name: 'Index',
    data() {
      return {
        isShow: true,
        isShowView: false,
        isShowForm: false,
        isShowBase: false,
        list: [{
          id: 'view',
          name: '视图容器',
          open: false,
          pages: [{path:'/pages/ACView',name: 'view'}, {path:'/pages/ACScrollView',name: 'scrollview'}, {path:'/pages/ACSwiper',name: 'swiper'}]
        }, {
          id: 'content',
          name: '基础内容',
          open: false,
          pages: [{path:'/pages/ACText',name: 'text'}, {path:'/pages/ACIcon',name: 'icon'}, {path:'/pages/ACPropress',name: 'progress'}]
        }, {
          id: 'form',
          name: '表单组件',
          open: false,
          pages: [{path:'/pages/ACButton',name: 'button'}, {path:'/pages/ACCheckbox',name: 'checkbox'}, {path:'/pages/ACForm',name: 'form'}, {path:'/pages/ACInput',name: 'input'}, {path:'/pages/ACLabel',name: 'label'}, {path:'/pages/ACPicker',name: 'picker'}, {path:'/pages/ACRadio',name: 'radio'}, {path:'/pages/ACSlider',name: 'slider'}, {path:'/pages/ACSwitch',name: 'switch'}, {path:'/pages/ACTextarea',name: 'textarea'}]

        }, {
          id: 'nav',
          name: '导航',
          open: false,
          pages: [{path:'/pages/ACNavigator',name: 'navigator'}]
        }, {
          id: 'media',
          name: '媒体组件',
          open: false,
          pages: [{path:'/pages/ACImage',name: 'image'}, {path:'/pages/ACAudio',name: 'audio'}, {path:'/pages/ACVideo',name: 'video'}]
        }, {
          id: 'canvas',
          name: '画布',
          open: false,
          pages: [{path:'/pages/ACCanvas',name: 'canvas'}]
        }]
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
      },
      pulls() {
        appcan.startPullDownRefresh((res) => {
          alert('开始下拉')
        })
        appcan.onPullDownRefresh((res) => {
          alert('监听下拉')
        })
        appcan.stopPullDownRefresh((res) => {
          alert('停止下拉')
        })
        appcan.onReachBottom((res) => {
          alert('触底事件')
        })
      },

    },
    mounted() {
      // setTimeout(()=>{
      //   this.pulls();
      // },1000)

    },
  }
</script>

<style>

    .ac-image {
        width: 100%;
        height: 100%;
    }
</style>
