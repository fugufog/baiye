<template>
    <ac-layout>
        <ac-view class="container">
            <ac-view class="page-body">
                <ac-view class="page-section">
                    <ac-view class="page-body-info">
                        <ac-view class="page-body-text-small">当前位置经纬度</ac-view>
                        <ac-view ac:if="hasLocation === false">
                            <ac-view class="page-body-text">未获取</ac-view>
                        </ac-view>
                        <ac-view ac:if="hasLocation === true">
                            <ac-view class="page-body-text-location">
                                <ac-view>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</ac-view>
                                <ac-view>N: {{location.latitude[0]}}°{{location.latitude[1]}}′</ac-view>
                            </ac-view>
                        </ac-view>
                    </ac-view>
                    <ac-view class="btn-area">
                        <ac-button type="primary" @tap="getLocation">获取位置</ac-button>
                        <ac-button @tap="clear">清空</ac-button>
                    </ac-view>
                </ac-view>
            </ac-view>
        </ac-view>
    </ac-layout>

</template>
<script>
    const util = require('../utils/util')
    const formatLocation = util.formatLocation
    export default {
        config: {
            navigationBarTitleText: '获取位置'
        },
        data() {
            return {
                hasLocation: false,
                location: ''
            }
        },
        methods: {
            getLocation: function () {
                var that = this
                appcan.getLocation({
                    success: (res) => {
                        this.hasLocation = true
                        this.location = formatLocation(res.longitude, res.latitude)
                    }
                })
            },
            clear: function () {
                this.hasLocation = false
            }
        },
        mounted() {
        }
    }
</script>
