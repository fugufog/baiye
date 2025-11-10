<template>
    <ac-layout>
        <ac-button type="primary" @tap="aliPay">支付宝支付</ac-button>
        <ac-button type="primary" @tap="onAppResume">通过服务端查询支付状态</ac-button>
    </ac-layout>

</template>
<script>

  var downloadTask
  var backgroundAudioManager
  export default {
    config: {
      "navigationBarTitleText": "支付宝支付"
    },
    data() {
      return {
        tempFilePath: ''
      }
    },
    methods: {
      aliPay() {
        let o = {
          target:'alipay',
          statement:'biz_content=%7B%22out_trade_no%22%3A%221543304102951%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22seller_id%22%3A%22kakatour%40qq.com%22%2C%22subject%22%3A%22%E6%94%AF%E4%BB%98%E5%AE%9D%E6%B5%8B%E8%AF%95%22%2C%22timeout_express%22%3A%2230m%22%2C%22total_amount%22%3A%220.01%22%7D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&notify_url=http%3A%2F%2F115.28.92.161%3A1337%2Fparse%2Falipay&app_id=2016122804687398&timestamp=2018-11-27+15%3A35%3A02&sign_type=RSA&sign=EShklz7ce1YVaiNdgAIRwKaSSOJm78LlZo9c6MjwSDyDFeXCuuGioboObn5Rd1XR8dU%2FnALYXkCEDQRWMDuyjKHUeTTpgYB56H%2Fz5bcwJwLMtEzX6gxrTeP7xC4NV27WtZy7BTqu4pI0YmWHqPRtxUL%2B4OA0YU2LP5BtEL9zdrnYhUL8PFQqB0wLknwnu5K9NqE%2Fkw7jIX4V0xvDQ2xKpZtizo%2BFSuRukHg2NQr%2Fd1ALaCLdWKW%2B2%2BX77cJ8gI%2F5gmuz84S0nY%2BKKq%2FEne0QleUBXxp1b7Vj5e%2FGT7eDnWyFlmuK8gofbNU7uxgfuQUisXOnuekyzvfc8tFCP4uPnA%3D%3D',
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
        appcan.onAppResume();
      }
    },
    mounted() {
    }
  }
</script>
<style lang="less">

</style>