<template>
    <ac-layout>
        <ac-button @tap="defaultToast" type="primary">默认Toast</ac-button>
        <ac-button @tap="successToast" type="primary">成功Toast</ac-button>
        <ac-button @tap="customToast" type="primary">成功Toast显示为3秒</ac-button>
        <ac-button @tap="loadingToast" type="primary">加载中</ac-button>
        <ac-button @tap="hideToast" type="primary">关闭Toast</ac-button>
    </ac-layout>

</template>

<script>
    export default {
        config: {
            navigationBarTitleText: '消息提示框'
        },
        data() {
            return {

            }
        },
        methods: {
          defaultToast(){
            appcan.showToast({ title: '默认Toast' })
          },
          successToast(){
            appcan.showToast({ title: '成功Toast', icon: 'success' })
          },
          customToast(){
            appcan.showToast({ title: '成功Toast显示为3秒', icon: 'success', duration: 3000 })
          },
          loadingToast(){
            appcan.showToast({ title: '加载中', icon: 'loading' })
          },
          hideToast(){
            appcan.hideToast()
          }
        }
    }
</script>

<style scoped lang="less">


</style>
