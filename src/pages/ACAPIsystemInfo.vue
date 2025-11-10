<template>
    <ac-layout>
        <ac-view>
            <ac-row height="40" space-bottom="10">
                <ac-col span="6" vertical-align="middle">
                    手机型号
                </ac-col>
                <ac-col span="6">
                    <ac-input v-model="systemInfo.model"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="6" vertical-align="middle">
                    操作系统版本
                </ac-col>
                <ac-col span="6">
                    <ac-input v-model="systemInfo.system"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="6" vertical-align="middle">
                    客户端平台
                </ac-col>
                <ac-col span="6">
                    <ac-input v-model="systemInfo.platform"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="6" vertical-align="middle">
                    APP语言
                </ac-col>
                <ac-col span="6">
                    <ac-input v-model="systemInfo.language"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="6" vertical-align="middle">
                    APP版本
                </ac-col>
                <ac-col span="6">
                    <ac-input v-model="systemInfo.version"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="6" vertical-align="middle">
                    客户端基础库版本
                </ac-col>
                <ac-col span="6">
                    <ac-input v-model="systemInfo.SDKVersion"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="6" vertical-align="middle">
                    屏幕宽度
                </ac-col>
                <ac-col span="6">
                    <ac-input v-model="systemInfo.screenWidth"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="6" vertical-align="middle">
                    屏幕高度
                </ac-col>
                <ac-col span="6">
                    <ac-input v-model="systemInfo.screenHeight"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="6" vertical-align="middle">
                    可使用窗口宽度
                </ac-col>
                <ac-col span="6">
                    <ac-input v-model="systemInfo.windowWidth"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="6" vertical-align="middle">
                    可使用窗口高度
                </ac-col>
                <ac-col span="6">
                    <ac-input v-model="systemInfo.windowHeight"></ac-input>
                </ac-col>
            </ac-row>

            <ac-row height="40" space-bottom="10">
                <ac-col span="6" vertical-align="middle">
                    DPI
                </ac-col>
                <ac-col span="6">
                    <ac-input v-model="systemInfo.pixelRatio"></ac-input>
                </ac-col>
            </ac-row>
            <ac-button type="primary" @tap="getSystemInfo">获取手机系统信息</ac-button>
            <ac-button type="primary" @tap="getSystemInfoSync">同步获取手机系统信息</ac-button>
        </ac-view>
    </ac-layout>

</template>
<script>

    export default {
        config: {
            navigationBarTitleText: 'systemInfo'
        },
        data() {
            return {
                systemInfo: {}
            }
        },
        methods: {
            getSystemInfo() {
                var that = this
                appcan.getSystemInfo({
                    success: function (res) {
                        that.systemInfo = {};
                        that.systemInfo = res;

                    }
                })
            },
            getSystemInfoSync() {
                var that = this
                appcan.getSystemInfoSync({
                    success: function (res) {
                        that.systemInfo = {};
                        that.systemInfo = res;
                    }
                })
            }
        }
    }
</script>
