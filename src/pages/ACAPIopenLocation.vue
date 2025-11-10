<template>
    <ac-layout>
        <ac-view class="content">
            <ac-row height="40" space="10">
                <ac-col span="5" vertical-align="middle">
                    经度：
                </ac-col>
                <ac-col span="7">
                    <ac-input :value="longitude"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space="10">
                <ac-col span="5" vertical-align="middle">
                    纬度：
                </ac-col>
                <ac-col span="7">
                    <ac-input :value="latitude"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space="10">
                <ac-col span="5" vertical-align="middle">
                    位置名称：
                </ac-col>
                <ac-col span="7">
                    <ac-input :value="name"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space="10">
                <ac-col span="5" vertical-align="middle">
                    详细位置：
                </ac-col>
                <ac-col span="7">
                    <ac-input :value="address"></ac-input>
                </ac-col>
            </ac-row>
            <ac-button type="primary" @tap="openLocation">查看位置</ac-button>
        </ac-view>
    </ac-layout>

</template>
<script>

    export default {
        config: {
            navigationBarTitleText: '查看位置'
        },
        data() {
            return {
                longitude: 116.407495,
                latitude: 40.015434,
                name: '正益移动',
                address: '北京市朝阳区慧忠北里222号'
            }
        },
        methods: {
            openLocation: function () {
                appcan.openLocation({
                    longitude: this.longitude,
                    latitude: this.latitude,
                    name: this.name,
                    address: this.address,
                    backgroundColor: "#3699FD",
                    success: function () {

                    },
                    fail: function (res) {
                        console.log('fail:', res)
                    }
                })

            }
        },
        mounted() {
        }
    }
</script>
