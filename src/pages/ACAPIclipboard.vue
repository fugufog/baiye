<template>
    <ac-layout>
        <ac-view class="win">在下方输入剪切的内容</ac-view>
        <ac-block class="input-demo">
            <ac-input v-model="co"></ac-input>
        </ac-block>
        <ac-button type="primary" @tap="setClipboardData">设置系统剪贴板的内容</ac-button>
        <ac-button type="primary" @tap="getClipboardData">获取系统剪贴板内容</ac-button>
    </ac-layout>

</template>

<script>
    export default {
        config: {
            navigationBarTitleText: "剪切"
        },
        data() {
            return {
                co: '设置系统剪贴板的内容'
            }
        },
        methods: {
            setClipboardData() {
                appcan.setClipboardData({
                    data: this.co,
                    success: function (res) {
                        appcan.getClipboardData({
                            success: function (res) {
                                alert(JSON.stringify(res));
                            }
                        })
                    }
                })
            },
            getClipboardData() {
                appcan.getClipboardData({
                    success: function (res) {
                        alert(JSON.stringify(res));
                    }
                })
            },
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
