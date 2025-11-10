<template>
    <ac-layout>
        <ac-block class="input-demo">
            <ac-input v-model="clientId"></ac-input>
        </ac-block>
        <ac-button @tap="getCode" type="primary">获取code</ac-button>

        <ac-block class="input-demo">
            <ac-input :disabled="true" v-model="applicationToken"></ac-input>
        </ac-block>
        <ac-button @tap="getToken" type="primary">获取access_token</ac-button>

        <ac-block class="input-demo">
            <ac-input :disabled="true" v-model="userInfo"></ac-input>

        </ac-block>

        <ac-text>{{userInfo}}</ac-text>
        <ac-button @tap="getUserInfo" type="primary">获取用户个人信息</ac-button>
        <ac-button @tap="getPushToken" type="primary">推送获取access-token</ac-button>
        <ac-block class="input-demo">
            <ac-input :disabled="true" v-model="pushToken"></ac-input>
        </ac-block>
        <ac-button @tap="getTemplate" type="primary">推送消息模板</ac-button>
        <ac-block class="input-demo">
          <ac-row>
        <ac-col span="12">
          <ac-picker class="acpicker" title="当前选择" :range="list1" :value="value" range-key="title"
                           @change="handleChange"></ac-picker>
        </ac-col>
      </ac-row>

        </ac-block>
        <ac-button @tap="pushTemplate" type="primary">推送消息</ac-button>
    </ac-layout>
</template>

<script type="text/babel">
  export default {
    config: {
      navigationBarTitleText: '应用授权'
    },
    data() {
      return {
        userInfo: '用户信息',
        applicationToken: 'access_token',
        applicationCode: 'code',
        // //测试数据 应用123
        // clientId: '7f02219ab02b4c3ba244d9480f38d3df',
        // client_secret: '68ab3b036c6f4e61abee070d44cf432c'
        // 应用类型 应用实例
        clientId: '07e978ce87a3439ab0a567fccf2c30a6',
        client_secret: 'd6786e9317cc4d7aa7e86e685549957f',
        list: [],
        list1: [],
        value:0,
        template_id : '',
        pushToken: ''
      }
    },
    methods: {
      getCode(){
        let o = {
          scope:'snsapi_userinfo',
          clientId:this.clientId
        }
        appcan.loginAuth(o, (code)=> {
          this.applicationCode = code
          alert(this.applicationCode)
        });

      },
      paramSer(json){
        var params = Object.keys(json).map(function (key) {
          // body...
          return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
        }).join("&");
        return params;
      },
      getToken() {
        let param = {
            code: this.applicationCode,
            client_secret: this.client_secret,
            grant_type:'authorization_code',
            client_id: this.clientId
          }
        param = this.paramSer(param)
        appcan.request({
          url: 'http://59.61.216.120:18891/oauth/token?' + param,
          method:'POST',
          header:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          data:{},
          success:  (result)=> {
            this.applicationToken = result.data.access_token
          },
          fail:  (data)=> {
            alert('request fail'+JSON.stringify(data))
          }
        })
      },
      getUserInfo() {
        let param = {
            access_token:this.applicationToken
          }
        param = this.paramSer(param)
        appcan.request({
          url: 'http://59.61.216.120:18892/resource/user/userinfo?'+ param,
          method:'POST',
          data: {
          },
          header:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          success:  (result)=> {
            this.userInfo = result.data;
          },
          fail:  (data)=> {
            alert('request fail'+JSON.stringify(data))
          }
        })
      },
      getPushToken() {
        let param = {
            scope: 'client_baseinfo',
            client_secret: this.client_secret,
            grant_type:'client_credentials',
            client_id: this.clientId
          }
        param = this.paramSer(param)
        appcan.request({
          url: 'http://59.61.216.120:18891/oauth/token?' + param,
          method:'POST',
          data:{},
          header:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          success:  (result)=> {
            this.pushToken = result.data.access_token
          },
          fail:  (data)=> {
            alert('request fail'+JSON.stringify(data))
          }
        })
      },
      getTemplate(){
        appcan.request({
          url: 'http://59.61.216.120:18888/tongplatform/support/opensite/v1/template/queryAuditPassTemplates',
          method:'GET',
          data:{
            applicationId: this.clientId,
            appId: this.userInfo.content.appId
          },
          success:  (result)=> {
            if(result.data.status === 1){

              this.list = result.data.content
              this.list1 = []
              for(let i in this.list){

                this.list1.push({title:this.list[i].title,value:this.list[i].templateId})
              }
            }else{
              appcan.showToast({ title: result.data.message })
            }

          },
          fail:  (data)=> {
            alert('request fail'+JSON.stringify(data))
          }
        })
      },
      handleChange(val){
        this.value = val
        this.template_id = this.list[val].templateId
      },
      pushTemplate(){
        let data = ''
        if(this.list.length===0){
          return appcan.showToast({title:'请先获取模板'})
        }
        let keys = this.list[this.value].keys?this.list[this.value].keys:[]
        let keys1 = {}
        for(let i in keys){
          keys1[keys[i]] = '呵呵呵'
        }
        data = encodeURIComponent(JSON.stringify(keys1))
        this.template_id = this.list[this.value].templateId
        let param = {
            access_token: this.pushToken,
            touser: this.userInfo.content.id,
            template_id: this.template_id,
            url: '',
            app_id: this.userInfo.content.appId,
            site_id: '',
            site_area_code: ''
          }
        param = this.paramSer(param) + '&data='+data
        alert('url:http://59.61.216.120:18892/resource/client/message/push?' + param)
        appcan.request({
          url: 'http://59.61.216.120:18892/resource/client/message/push?' + param,
          method:'POST',
          header:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          data:{},
          success:  (result)=> {
            if(result.data.status === 1){
              appcan.showToast({title: '发送成功'})
            }else{
              appcan.showToast({title: '发送失败'})
            }
          },
          fail:  (data)=> {
            alert('request fail'+JSON.stringify(data))
          }
        })
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
