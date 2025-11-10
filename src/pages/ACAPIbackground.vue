<template>
    <ac-layout style="background-color: transparent;">
        <ac-button type="primary" @tap="setBackgroundColor">setBackgroundColor</ac-button>
        <ac-button type="primary" @tap="setBackgroundTextStyle">setBackgroundTextStyle</ac-button>
        <ac-button type="primary" @tap="stopPullDownRefresh">停止下拉</ac-button>
    </ac-layout>

</template>
<script>
  export default {
    config: {
      "navigationBarTitleText": "设置窗口背景",
      "pullDownRefresh": true
    },
    data() {
      return {
      }
    },
    methods: {
      setBackgroundColor() {
        appcan.setBackgroundColor({
          backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
          backgroundColorBottom: '#eeeeee', // 底部窗口的背景色为白色
          backgroundColor: '#000000', // 底部窗口的背景色为白色
        })
      },
      setBackgroundTextStyle() {
        appcan.setBackgroundTextStyle({
          textStyle: 'light' // 下拉背景字体、loading 图的样式为dark
        })
      },
      stopPullDownRefresh() {
        appcan.stopPullDownRefresh((res)=>{
        })
      }
    },
    mounted() {
      setTimeout(()=>{
        appcan.onPullDownRefresh((res)=>{
        })
      },1000)
    }
  }
</script>
<style lang="less">

</style>