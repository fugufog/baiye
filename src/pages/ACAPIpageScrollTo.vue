<template>
    <ac-layout style="height: 1000px;">
        <ac-button type="primary" @tap="pageScrollTo">滚动到指定位置</ac-button>
    </ac-layout>
</template>

<script>
  export default {
    config: {
      navigationBarTitleText: '滚动到指定位置'
    },
    name: "pageScrollTo",
    data() {
      return {}
    },
    methods: {
      pageScrollTo() {
        appcan.pageScrollTo({
          scrollTop: 0,
          duration: 300
        })
      },
    }
  }
</script>

<style lang="less" scoped>
</style>
