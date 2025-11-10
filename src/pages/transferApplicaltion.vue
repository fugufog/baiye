<template>
    <ac-layout>
        <ac-view class="win">应用ID</ac-view>
        <ac-block class="input-demo">
            <ac-input placeholder="请输入应用ID" v-model="applicationID"></ac-input>
        </ac-block>
        <ac-button @tap="callApplication" type="primary">调用1</ac-button>
    </ac-layout>
</template>

<script type="text/babel">

  export default {
    config: {
      navigationBarTitleText: '调用应用'
    },
    data() {
      return {
        applicationID: '7d7b6337f9ff4b9f8fd2936903020700',// '5cad91407c5d415e9fadb7f4411c272c',//  '7d7b6337f9ff4b9f8fd2936903020700'
        applicationParams: '',
        applicationCode: '',
      }
    },
    methods: {
      callApplication() {
        let o = {
          microAppId: this.applicationID
        }
        appcan.openMicroApp(o);
      }
    }
  }
</script>
<style lang="less">
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
