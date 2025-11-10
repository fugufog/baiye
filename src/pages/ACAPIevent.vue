<template>
    <ac-layout>
        <ac-button type="primary" @tap="errorEvent">程序错误事件</ac-button>
        <ac-button type="primary" @tap="errorNetworkEvent">网络错误事件1</ac-button>
        <!-- <ac-button type="primary" @tap="eventCustomDemo">自定义上报事件</ac-button> -->
    </ac-layout>

</template>

<script>
    export default {
        config: {
            navigationBarTitleText: "自定义事件"
        },
        data() {
            return {}
        },
        methods: {
            errorEvent() {
                console.log('错误事件' + erroreventdemo)
            },
            eventCustomDemo() {
                appcan.setEvent({
                  eventId: 'eventdemo',
                  attri: {
                    microAppEventName: 'demo',
                    key:'xxxx'
                    }
                });
            },
            errorNetworkEvent(){
              appcan.request({
                url: 'http://59.61.216.120:18880/open/login/xxx',
                method:'GET',
                data:{
                  aaa: '',
                  bbb: ''
                },
                success:  (result)=> {


                },
                fail:  (data)=> {
                  alert('request fail'+JSON.stringify(data))
                }
              })
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
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
