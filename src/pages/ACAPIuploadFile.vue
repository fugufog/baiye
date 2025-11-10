<template>
  <ac-layout>
    <ac-button @tap="chooseFile" type="primary" v-if="isapp">选择文件</ac-button>
    <ac-button @tap="uploadFile" type="primary">uploadFile</ac-button>
  </ac-layout>
</template>

<script>
export default {
  config: {
    navigationBarTitleText: "上传文件"
  },
  data() {
    return {
      tempFilePaths: []
    };
  },
  computed:{
    isapp(){
      return !appcan.IS_APP
    }
  },
  methods: {
    chooseFile() {
      appcan.chooseImage({
        success: res => {
          this.tempFilePaths = res.tempFilePaths;
        }
      });
    },
    uploadFile() {
      if (!appcan.IS_APP) {
        const uploadTask = appcan.uploadFile({
          url: "http://zjj.appcan.cn:8095/webApi/upTest", //仅为示例，非真实的接口地址
          name: "file",
          formData: {
            user: "test"
          },
          success: function(res) {
            var data = res.data;
            alert("上传成功" + JSON.stringify(res));
            //do something
          }
        });
      } else {
        for (let i = 0; i < this.tempFilePaths.length; i++) {
              const uploadTask = appcan.uploadFile({
                url: "http://zjj.appcan.cn:8095/webApi/upTest", //仅为示例，非真实的接口地址
                filePath: this.tempFilePaths[i],
                name: "file",
                formData: {
                  user: "test"
                },
                success: function(res) {
                  var data = res.data;
                  alert("上传成功" + JSON.stringify(res));
                  //do something
                }
              });
              uploadTask.onProgressUpdate(res => {
                console.log("上传进度" + res.progress);
                console.log("已经上传的数据长度" + res.totalBytesSent);
                console.log(
                  "预期需要上传的数据总长度" + res.totalBytesExpectedToSend
                );
              });
              // uploadTask.abort((res) => {
              //   alert('取消上传'+ res)
              // }) // 取消上传任务
            }
      }
    }
  }
};
</script>

<style scoped lang="less">
</style>
