<template>
    <ac-layout>

        <ac-view class="win">required</ac-view>
        <ac-block class="input-demo">
            <ac-input required v-model="input1" max="20" placeholder="请输入用户名"></ac-input>
        </ac-block>

        <ac-view class="win">password</ac-view>
        <ac-block class="input-demo">
            <ac-input type="password" v-model="input2" placeholder="请输入密码"></ac-input>
        </ac-block>

        <ac-view class="win">验证 - 内置正则 - 邮箱：</ac-view>
        <ac-block class="input-demo">
            <ac-input v-model="input3" regex="email" placeholder="请输入邮箱地址"></ac-input>
        </ac-block>

        <ac-view class="win">验证 - 内置正则 - 手机号：</ac-view>
        <ac-block class="input-demo">
            <ac-input v-model="input4" regex="mobile" placeholder="请输入手机号码"></ac-input>
        </ac-block>

        <ac-view class="win">验证 - 内置正则 - 银行卡号：</ac-view>
        <ac-block class="input-demo">
            <ac-input v-model="input5" regex="bankcard" placeholder="请输入银行卡号"></ac-input>
        </ac-block>

        <ac-view class="win">验证 - 自定义正则 - QQ：</ac-view>
        <ac-block class="input-demo">
            <ac-input v-model="input6" regex="^\d{5,12}$" placeholder="请输入您的QQ号码"></ac-input>
        </ac-block>

        <ac-view class="win">不显示清空图标：</ac-view>
        <ac-block class="input-demo">
            <ac-input v-model="input7" required :showClearIcon="false" placeholder="请输入您的姓名"></ac-input>
        </ac-block>

        <ac-view class="win">不显示正确或错误图标：</ac-view>
        <ac-block class="input-demo">
            <ac-input v-model="input8" required :showSuccessIcon="false" :showErrorIcon="false" regex="mobile"
                      placeholder="请输入手机号码"></ac-input>
        </ac-block>

        <ac-view class="win">获取验证结果：</ac-view>
        <ac-block class="input-demo">
            <ac-input v-model="input9" ref="input9" required regex="mobile" placeholder="请输入手机号码"></ac-input>
        </ac-block>

        <ac-view style="color:#F00;padding: 0 .3rem;" v-html="result"></ac-view>
        <ac-view class="win">
            <ac-button @click.native="clickHander">显示上方手机号验证结果</ac-button>
            <ac-button @tap="getUrl">获取路由参数</ac-button>
        </ac-view>
    </ac-layout>

</template>

<script type="text/babel">
  export default {
    config: {
      navigationBarTitleText: "Input"
    },
    data() {
      return {
        input1: '',
        input2: '',
        input3: 'appcanui@qq.com',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        result: ''
      }
    },
    methods: {
      clickHander() {
        const input = this.$refs.input9;
        this.result = `{<br />&nbsp;&nbsp;valid：${input.valid}，<br />&nbsp;&nbsp;errorMes：'${input.errorMsg}'，<br />&nbsp;&nbsp;errorCode：'${input.errorCode}'<br />}`;
      },
      getUrl(){
        alert(JSON.stringify(appcan.getUrlQuery()))

      },
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
    

    .ac-button.is-full-width {
        width: 100%;
        margin-bottom: 50px;
    }

    .ac-content .win {
        padding: 10px;
        color: #999;
    }

    .input-demo {
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        background-color: #fff;
        padding: 4px 12px;
    }

</style>
