<template>
    <ac-layout>
        <ac-view class="page-body-info">
                <ac-view class="page-body-title">
                    点击向服务器发起请求
                </ac-view>
            <ac-view>
                <ac-text class="title">服务器返回：{{res}}</ac-text>
            </ac-view>
        </ac-view>
        <ac-view class="btn-area">
            <ac-button @tap="makeRequest" type="primary" :disabled="loading" :loading="loading">request
            </ac-button>
        </ac-view>
    </ac-layout>

</template>

<script>
    const requestUrl = 'http://zjj.appcan.cn:8095/webApi/upTest'
    export default {
        config: {
            navigationBarTitleText: '发起请求'
        },
        data() {
            return {
                loading: false,
                res: ''
            }
        },
        methods: {
            makeRequest() {
                var self = this
                self.loading = true
                const requestMr = appcan.request({
                    url: requestUrl,
                    data: {
                    },
                    header:{
                    },
                    method:'GET',
                    success: function (result) {
                        self.loading = false
                        console.log('request success', result)
                        self.res = JSON.stringify(result.data, null, 4)
                    },
                    fail: function (data) {
                        console.log('request fail', data)
                        self.loading = false
                    }
                })

            }
        }
    }
</script>

<style scoped>

</style>
