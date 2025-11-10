<template>
    <ac-layout>
        <ac-button type="primary" @tap="vibrateLong">使手机发生较长时间的振动（400ms）</ac-button>
        <ac-button type="primary" @tap="vibrateShort">使手机发生较短时间的振动（15ms）</ac-button>
    </ac-layout>

</template>

<script>
    export default {
        config: {
            navigationBarTitleText: "震动"
        },
        data() {
            return {}
        },
        methods: {
            vibrateLong() {
                appcan.vibrateLong({
                    success: function () {
                    }
                });
            },
            vibrateShort() {
                appcan.vibrateShort({
                    success: function () {
                    }
                });
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
