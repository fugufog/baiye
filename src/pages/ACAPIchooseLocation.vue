<template>
    <ac-layout>
        <ac-view class="content">
            <ac-row height="40" space="10">
                <ac-col span="5" vertical-align="middle">
                    地址：
                </ac-col>
                <ac-col span="7">
                    <ac-input :value="hasLocation?locationAddress:'未选择位置'"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space="10">
                <ac-col span="5" vertical-align="middle">
                    经纬度：
                </ac-col>
                <ac-col span="7">
                    <ac-input
                            :value="hasLocation?'E:'+ location.longitude[0]+'°'+location.longitude[1]+'′ N:'+location.latitude[0]+'°'+location.latitude[1]+'′':'未选择位置'"></ac-input>
                </ac-col>
            </ac-row>
            <ac-button type="primary" @tap="chooseLocation">选择位置</ac-button>
            <ac-button @tap="clear">清空</ac-button>
        </ac-view>
    </ac-layout>

</template>
<script>
    const util = require('../utils/util')
    const formatLocation = util.formatLocation

    export default {
        config: {
            navigationBarTitleText: '选择位置'
        },
        data() {
            return {
                hasLocation: false,
                location: '',
                locationAddress: ''
            }
        },
        methods: {
            chooseLocation: function () {
                var that = this
                appcan.chooseLocation({
                    backgroundColor: '#3399ff',
                    success: (res) => {
                        this.hasLocation = true
                        this.location = formatLocation(res.longitude, res.latitude)
                        this.locationAddress = res.address
                    },
                    fail: (res) => {
                        console.log('fail:', res)
                    }
                })
            },
            clear: function()  {
                this.hasLocation = false
            }
        },
        mounted() {
        }
    }
</script>
