<template>
    <ac-layout>
        <ac-view class="content">
            <ac-button @tap="establish">创建 WebSocket 连接</ac-button>
            <ac-button @tap="close">关闭 WebSocket 连接</ac-button>
            <ac-input :value="exampleText" @input="handleInputChange" placeholder="请输入文字测试" :disabled="!open"></ac-input>
            <ac-button @tap='sendSocketMessage' type="primary" :disabled="!disabled">通过 WebSocket 连接发送数据</ac-button>
            <ac-textarea :value="text" class="info"></ac-textarea>
        </ac-view>
    </ac-layout>

</template>

<script>
  const sendUrl = 'http://192.168.89.35:56717'
  export default {
    data () {
      return {
        loading: false,
        disabled: false,
        open: false,
        text: '',
        socketOpen: false,
        exampleText: '',
        socketMsgQueue: []
      }
    },
    methods: {
      handleInputChange (val) {
        this.exampleText = val
        // console.log(this.exampleText)
      },
      establish () {
        var that = this
        that.loading = true
        appcan.connectSocket({
          url: sendUrl,
          success: function (res) {
            appcan.showToast({
              title: 'WebSocket创建成功！'
            })
            that.loading = false
            that.socketOpen = true
            that.disabled = true
            that.open = true

            appcan.onSocketOpen(function (res) {
              appcan.showToast({
                title: 'WebSocket连接已打开！'
              })
              for (var i = 0; i < that.socketMsgQueue.length; i++) {
                that.sendSocketMessage(that.socketMsgQueue[i])
              }
              that.socketMsgQueue = []
            })
            appcan.onSocketError(function (res) {
              appcan.showToast({
                title: 'WebSocket连接打开失败，请检查！'
              })
            })
            appcan.onSocketMessage(function (res) {
              that.text += '收到服务器返回内容：' + res.data + '\n'
            })
          },
          fail: function (res) {
            appcan.showToast({
              title: 'WebSocket创建失败！'
            })
            that.loading = false
            that.socketOpen = false
            that.disabled = false
            that.open = false
          }
        })
      },
      sendSocketMessage () {
        var that = this
        var msg = that.exampleText
        if (that.socketOpen) {
          appcan.sendSocketMessage({
            data: msg,
            success: function (res) {
              console.log(res)
            },
            fail: function (res) {
              appcan.showToast({
                title: '发送失败！'
              })
            }
          })
        } else {
          that.socketMsgQueue.push(msg)
        }
      },
      close () {
        var that = this
        that.loading = true
        appcan.closeSocket({
          success: function (res) {
            that.socketOpen = false
            that.disabled = false
            that.open = false
            appcan.showToast({
              title: '关闭WebSocket连接'
            })
            appcan.onSocketClose(function (res) {
              appcan.showToast({
                title: 'WebSocket 已关闭！'
              })
            })
          },
          fail: function () {
            appcan.showToast({
              title: 'WebSocket 关闭失败'
            })
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">


</style>
