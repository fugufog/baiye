<template>
    <ac-layout>
        <ac-view class="win">在下方输入电话号码</ac-view>
        <ac-block class="input-demo">
            <ac-input v-model="tel"></ac-input>
        </ac-block>
        <ac-button type="primary" @tap="makePhoneCall">拨打</ac-button>
    </ac-layout>
</template>

<script>
    export default {
        config: {
            navigationBarTitleText: '打电话'
        },
        name: "ACAPIcall",
        data() {
            return {
                tel: '18600648467'
            }
        },
        methods: {
            makePhoneCall() {
                appcan.makePhoneCall({
                    phoneNumber: this.tel,
                    success: function (res) {
                        alert(JSON.stringify(res))
                    }
                })
            },
        }
    }
</script>

<style lang="less" scoped>
    

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
