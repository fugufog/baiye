<template>
    <ac-layout>
        <ac-view class="page-body">
            <ac-view class="page-section page-section_center">
                <ac-view class="page-body-div">旋转手机即可获取方位信息</ac-view>
                <ac-view class="direction">
                    <ac-view class="bg-compass-line"></ac-view>
                    <ac-image class="bg-compass" :src="imgSrc" height="100%"
                              :style="{transform:'rotate(disableScroll+deg)'}"></ac-image>
                    <ac-view class="direction-value">
                        {{direction}}
                    </ac-view>
                </ac-view>
            </ac-view>
            <ac-button type="primary" @tap="onRgt">注册监听罗盘数据</ac-button>
            <ac-button type="primary" @tap="startCompass">开始监听罗盘数据</ac-button>
            <ac-button type="primary" @tap="stopCompass">停止监听罗盘数据</ac-button>
        </ac-view>
    </ac-layout>

</template>
<script>
    export default {
        config: {
            navigationBarTitleText: '罗盘'
        },
        data() {
            return {
                direction: 0,
                imgSrc: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3581792254,1787772481&fm=173&app=25&f=JPEG?w=218&h=146&s=DBACB7475B8662D2062E5B6D0300E068'
            }
        },
        methods: {
            startCompass() {
                appcan.startCompass({
                    success: function (res) {
                        alert('成功的执行的回调')
                    },
                    fail: function (res) {
                        alert('失败的执行的回调')
                    }
                })
            },
            stopCompass() {
                appcan.stopCompass({
                    success: function (res) {
                        alert('成功的执行的回调')
                    },
                    fail: function (res) {
                        alert('失败的执行的回调')
                    }
                })
            },
            onRgt() {
                appcan.onCompassChange((res) => {
                    this.direction = parseInt(res.direction)
                })
            },
        },
        mounted() {
        }
    }
</script>
