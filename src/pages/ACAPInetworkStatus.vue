<template>
    <ac-layout>
        <ac-view class="page-body-info">
            <ac-view class="page-body-title">网络状态</ac-view>
            <ac-view ac:if="hasNetworkType === false">
                <ac-view class="page-body-text">未获取</ac-view>
                <!--<ac-view class="page-body-text">点击蓝色按钮可获取网络状态</ac-view>-->
            </ac-view>
            <ac-view ac:if="hasNetworkType === true">
                <ac-view class="page-body-text-network-type">{{networkType}}</ac-view>
            </ac-view>
        </ac-view>
        <ac-view class="btn-area">
            <ac-button type="primary" @tap="getNetworkType">获取手机网络状态</ac-button>
            <ac-button type="primary" @tap="onNetworkStatusChange">监听手机网络状态</ac-button>
            <ac-button @tap="clear">清空</ac-button>
        </ac-view>
    </ac-layout>

</template>
<script>
    export default {
        config: {
            navigationBarTitleText: '网络状态'
        },
        data() {
            return {
                hasNetworkType: false,
                networkType: ''
            }
        },
        methods: {
            onNetworkStatusChange: function () {
                appcan.onNetworkStatusChange(function (res) {
                    alert(res.isConnected)
                    alert(res.networkType)
                })
            },
            getNetworkType() {
                var that = this
                appcan.getNetworkType({
                    success: function (res) {
                        console.log(111, res);
                        alert(JSON.stringify(res))
                        that.hasNetworkType = true
                        that.networkType = res.subtype || res.networkType
                    }
                })
            },
            clear() {
                this.hasNetworkType = false
                this.networkType = ''
            }
        }
    }
</script>
