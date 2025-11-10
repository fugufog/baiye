<template>
    <ac-layout>
        <ac-button @tap="defaultLoading" type="primary">基本使用</ac-button>
        <ac-button @tap="successLoading" type="primary">不显示取消项</ac-button>
        <ac-button @tap="showText" type="primary">显示提示文字</ac-button>
    </ac-layout>

</template>

<script>
    var playTimeInterval
    var recordTimeInterval
    export default {
        config: {
            navigationBarTitleText: '动作面板'
        },
        data() {
            return {

            }
        },
        methods: {
          defaultLoading(){
            appcan.showActionSheet({
              itemList: [
                {
                  text: '选项1',
                  color: '#ff2f00'
                },
                {
                  text: '选项2',
                  color: '#b0e46e'
                }
              ],
              showCancel:true,
              success: (res) => {
                appcan.showToast({
                  title: `index: ${res.tapIndex}`
                })
              }
            })
          },
          successLoading(){
            appcan.showActionSheet({
              itemList: [
                {
                  text: '选项1',
                  color: '#ff2f00'
                },
                {
                  text: '选项2',
                  color: '#b0e46e'
                }
              ],
              showCancel: false,
              success: (index) => {
                appcan.showToast({
                  title: `index: ${index.tapIndex}`
                })
              }
            })
          },
          showText(){
            appcan.showActionSheet({
              header: '确定吗?删除后就无法撤消了哦',
              itemList: [
                {
                  text: '删除',
                  color: '#ff0000'
                }
              ],
              success: (index) => {
                appcan.showToast({
                  title: `index: ${index.tapIndex}`
                })
              }
            })
          }
        }
    }
</script>

<style scoped lang="less">

    .ac-actionsheet-menu-cell {
        font-size: 14px;
        color: #666;
    }
</style>
