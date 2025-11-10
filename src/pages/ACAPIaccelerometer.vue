<template>
    <ac-layout>
        <ac-view class="content">
            <ac-row height="40" space-bottom="10">
                <ac-col span="4" vertical-align="middle" space-bottom="10">
                    X轴加速度：
                </ac-col>
                <ac-col span="8">
                    <ac-input v-model="x"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="4" vertical-align="middle">
                    Y轴加速度：
                </ac-col>
                <ac-col span="8">
                    <ac-input v-model="y"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="4" vertical-align="middle">
                    Z轴加速度：
                </ac-col>
                <ac-col span="8">
                    <ac-input v-model="z"></ac-input>
                </ac-col>
            </ac-row>
            <ac-button @tap="onin">注册监听</ac-button>
            <ac-button @tap="stop">停止监听</ac-button>
            <ac-button @tap="start">继续监听</ac-button>
        </ac-view>
    </ac-layout>

</template>
<script>

    export default {
        config: {
            navigationBarTitleText: '加速度计'
        },
        data() {
            return {
                x: 0,
                y: 0,
                z: 0,
              danmuList: [{
                text: '第 1s 出现的弹幕',
                color: '#ff0000',
                time: 1
              },
                {
                  text: '第 3s 出现的弹幕',
                  color: '#ff00ff',
                  time: 3
                }]
            }
        },
        created() {
        },
        methods: {
            onin: function () {
                var that = this
                appcan.onAccelerometerChange(function (res) {
                    that.x = res.x.toFixed(2)
                    that.y = res.y.toFixed(2)
                    that.z = res.z.toFixed(2)

                })
            },
            start() {
                appcan.startAccelerometer({
                    success: function (res) {
                        alert('成功的执行的回调')
                    },
                    fail: function (res) {
                        alert('失败的执行的回调')
                    }
                })
            },
            stop() {
                appcan.stopAccelerometer({
                    success: function (res) {
                        alert('成功的执行的回调')
                    },
                    fail: function (res) {
                        alert('失败的执行的回调')
                    }
                })
            }
        },
        mounted() {
        }
    }
</script>
