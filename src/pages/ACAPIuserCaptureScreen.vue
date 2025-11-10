<template>
    <ac-layout>
        <ac-button type="primary" @tap="onUserCaptureScreen">截屏</ac-button>
    </ac-layout>

</template>

<script>
    export default {
        config: {
            navigationBarTitleText: "截屏"
        },
        data() {
            return {
                value: 0,
                isKeep: false,
                sliderMax: 100,
                sliderMin: 0
            }
        },
        methods: {
            onUserCaptureScreen() {
                appcan.onUserCaptureScreen(function (res) {
                    alert('已成功截屏')
                })
            },
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
