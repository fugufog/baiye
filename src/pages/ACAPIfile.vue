<template>
    <ac-layout>
        <ac-button type="primary" @tap="saveFile">saveFile</ac-button>
        <ac-button type="primary" @tap="getSavedFileList">getSavedFileList</ac-button>
        <ac-button type="primary" @tap="getSavedFileInfo">getSavedFileInfo</ac-button>
        <ac-button type="primary" @tap="removeSavedFile">removeSavedFile</ac-button>
        <ac-button type="primary" @tap="openDocument">openDocument</ac-button>
    </ac-layout>

</template>
<script>
  var downloadTask
  var backgroundAudioManager
  export default {
    config: {
      "navigationBarTitleText": "文件的下载、保存与移除"
    },
    data() {
      return {
        tempFilePath: ''
      }
    },
    methods: {
      saveFile() {
        let that = this
        appcan.chooseImage({
          success: function (res) {
            var tempFilePaths = res.tempFilePaths
            appcan.saveFile({
              tempFilePath: tempFilePaths[0],
              success: function (res) {
                var savedFilePath = res.savedFilePath
                that.tempFilePath = savedFilePath
                alert(savedFilePath)
              }
            })
          }
        })
      },
      getSavedFileList() {
        appcan.getSavedFileList({
          success: function (res) {
            alert(JSON.stringify(res))
          }
        })
      },
      getSavedFileInfo() {
        appcan.getSavedFileInfo({
          filePath: this.tempFilePath,
          success: function (res) {
            alert(JSON.stringify(res))
          }
        })
      },
      removeSavedFile() {
        appcan.getSavedFileList({
          success: function (res) {
            if (res.fileList.length > 0) {
              appcan.removeSavedFile({
                filePath: res.fileList[0].filePath,
                complete: function (res) {
                  alert(JSON.stringify(res))
                }
              })
            }
          }
        })

      },
      openDocument() {
        appcan.downloadFile({
          url: 'http://bmob-cdn-6725.b0.upaiyun.com/2018/11/22/cb5d0d5c40e8136e803c23b2bacf01f3.pdf',
          success: (res) => {
            alert('下载完成'+ JSON.stringify(res))
            appcan.saveFile({
              tempFilePath:res.tempFilePath,
              success:(res)=>{
                alert('保存至本地'+ JSON.stringify(res))
                appcan.openDocument({
                  filePath: res.savedFilePath,
                  fileType: 'pdf',
                  success: function (res) {
                    alert('打开文档成功')
                  }
                })
              }
            })
          }
        })
      }
    },
    mounted() {
    }
  }
</script>
<style lang="less">

</style>
