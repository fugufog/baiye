<template>
<ac-layout>
  <ACTopText :text="title"></ACTopText>
  <ac-view class="container">

    <ac-view class="page-body">
      <ac-view class="page-section page-section-spacing swiper">
        <ac-swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="true" :interval="interval" :duration="duration">
          <ac-swiper-item ac:for="(item, id) in background" :key="id">
            <ac-view class="swiper-item" :class="item"></ac-view>
          </ac-swiper-item>
        </ac-swiper>
      </ac-view>

      <ac-view class="page-section" style="margin-top: 1rem;margin-bottom: 0;">
        <ac-view class="weui-cells weui-cells_after-title">
        <ac-view class="weui-cell weui-cell_switch">
          <ac-view class="weui-cell__bd">指示点</ac-view>
          <ac-view class="weui-cell__ft">
            <ac-switch v-model="indicatorDots"  @change="changeIndicatorDots" ></ac-switch>

          </ac-view>
        </ac-view>

      </ac-view>

    </ac-view>
    </ac-view>
  </ac-view>
</ac-layout>
</template>

<script>
  import ACTopText from '../component/ACTopText'
  export default {
    components: {ACTopText},
    config: {
        navigationBarTitleText: "swiper基本使用"
    },
    data() {
      return {
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        title: 'swiper',
        width: window.innerWidth - window.rem*3
      }

    },
    methods: {
      changeIndicatorDots(index) {
        this.indicatorDots = !this.indicatorDots
      }
    }
  }
</script>


<style scoped lang="less">
 @import '../common/acui.less';
  .swiper-item {
    display: block;
    height: 300rpx;
  }

  .page-section-title{
    padding: 0;
  }

  .info{
    position: absolute;
    right: 0;
    color: #353535;
    font-size: 30/20rem;
  }
  .page-foot{
    margin-top: 50/20rem;
  }

  .page-section-title{
    margin-top: 3rem;
    position: relative;
  }
</style>

