<template>
    <ac-layout>
        <ac-button type="primary" @tap="wxPay">微信支付</ac-button>
        <ac-button type="primary" @tap="onAppResume">注册通过服务端查询支付状态</ac-button>
    </ac-layout>

</template>
<script>

  var downloadTask
  var backgroundAudioManager
  export default {
    config: {
      "navigationBarTitleText": "微信支付"
    },
    data() {
      return {
        tempFilePath: ''
      }
    },
    methods: {
      wxPay() {
        let o = {
          target:'wxpay',
          statement:{
            'appid': 'wxxxxxxx',
            'partnerid': '1xxxxx1',
            'prepayid': 'wxxxxxxxx',
            'package': 'Sign=WXPay',
            'noncestr': 'xxxx',
            'timestamp': 0,
            'sign': 'xxx',
            'retcode': 0,
            'retmsg': 'OK'
          },
          success:function (res) {
            alert('支付成功'+JSON.stringify(res));
          },
          fail: function(res) {
            alert('支付失败'+JSON.stringify(res))
          }
        }
        appcan.requestPayment(o)
      },
      onAppResume(){
        appcan.onAppResume(function(){
          // 添加请求服务器查询接口查询支付状态
        });
      }
    },
    mounted() {
    }
  }
</script>
<style lang="less">

</style>
