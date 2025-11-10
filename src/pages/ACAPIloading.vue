<template>
  <ac-layout>
    <ac-button @tap="defaultLoading" type="primary">默认Loading</ac-button>
    <ac-button @tap="successLoading" type="primary">指定Loading文字</ac-button>
  </ac-layout>
</template>

<script>
var playTimeInterval;
var recordTimeInterval;
export default {
  config: {
    navigationBarTitleText: "加载框"
  },
  data() {
    return {};
  },
  methods: {
    hideLoading() {
      setTimeout(() => {
        appcan.hideLoading();
      }, 2000);
    },
    defaultLoading() {
      appcan.showLoading({});
      if (!appcan.IS_APP) {
        this.hideLoading();
      }
    },
    successLoading() {
      appcan.showLoading({
        title: "正在查询机构",
        mask: true
      });
       if (!appcan.IS_APP) {
        this.hideLoading();
      }
    }
  }
};
</script>

<style scoped lang="less">
</style>
