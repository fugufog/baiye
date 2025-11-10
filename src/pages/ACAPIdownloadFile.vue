<template>
  <ac-layout>
    <ac-button @tap="downloadFile" type="primary">下载</ac-button>
  </ac-layout>
</template>

<script>
export default {
  config: {
    navigationBarTitleText: "下载文件"
  },
  data() {
    return {};
  },
  methods: {
    downloadFile() {
      if (!appcan.IS_APP) {
        const downloadMr = appcan.downloadFile({
          url:
            "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1410939328,1198761960&fm=173&app=49&f=JPEG?w=218&h=146&s=9F8212610EE3E1701604099F0100C082",
          success: function(res) {
            alert("下载成功" + JSON.stringify(res));
          }
        });
      } else {
        const downloadMr = appcan.downloadFile({
          url:
            "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1410939328,1198761960&fm=173&app=49&f=JPEG?w=218&h=146&s=9F8212610EE3E1701604099F0100C082",
          success: function(res) {
            alert("下载成功" + JSON.stringify(res));
          }
        });
        downloadMr.onProgressUpdate(res => {
          alert("监听下载的进度" + JSON.stringify(res));
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
</style>
