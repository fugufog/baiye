<template>
    <ac-layout>
        <ac-button type="primary" @tap="stopPullDownRefresh">停止下拉刷新3</ac-button>
    </ac-layout>
</template>

<script>
  export default {
    config: {
      navigationBarTitleText: '下拉刷新',
      pullDownRefresh: true
    },
    name: "pullDownRefresh",
    data() {
      return {}
    },
    methods: {
      stopPullDownRefresh() {
        appcan.stopPullDownRefresh((res)=>{
          alert('停止下拉刷新')
        })
      },
    },
    mounted() {
      setTimeout(()=>{
        appcan.onPullDownRefresh((res)=>{
          alert('监听下拉')
        })
      },1000)

    },
  }
</script>

<style lang="less" scoped>
</style>
