<template>
    <ac-layout>
        <ac-button @tap="setNavigationBarTitle" type="primary">设置当前页面的标题</ac-button>
        <ac-button @tap="setNavigationBarColor" type="primary">设置当前页面导航栏颜色</ac-button>
        <ac-button @tap="showNavigationBarLoading" type="primary">在当前页面显示导航条加载动画</ac-button>
        <ac-button @tap="hideNavigationBarLoading" type="primary">隐藏导航条加载动画</ac-button>
    </ac-layout>

</template>

<script>
  export default {
    config: {
      navigationBarTitleText: '加载框'
    },
    data() {
      return {}
    },
    methods: {
      setNavigationBarTitle() {
        appcan.setNavigationBarTitle({
          title: 'Hello!'
        })
      },
      setNavigationBarColor() {
        appcan.setNavigationBarColor({
          frontColor: '#666666',
          backgroundColor: '#eeeeee'
        })
      },
      showNavigationBarLoading() {
        appcan.showNavigationBarLoading({
          color: 'dark'
        })
      },
      hideNavigationBarLoading() {
        appcan.hideNavigationBarLoading()
      },
    }
  }
</script>

<style scoped lang="less">


</style>
