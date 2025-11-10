<template>
    <ac-layout>
        <ac-button @tap="defaultLoading" type="primary">打开模态对话框</ac-button>
    </ac-layout>

</template>

<script>
    var playTimeInterval
    var recordTimeInterval
    export default {
        config: {
            navigationBarTitleText: '模态对话框'
        },
        data() {
            return {

            }
        },
        methods: {
          defaultLoading(){
            appcan.showModal({
              title: '提示',
              content: '这是一个模态弹窗',
              success (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }
        }
    }
</script>

<style scoped lang="less">


</style>
