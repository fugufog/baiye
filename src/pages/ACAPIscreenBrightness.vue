<template>
    <ac-layout>
        <ac-view class="content">
            <ac-row height="40" space-bottom="30">
                <ac-col span="5" vertical-align="middle">
                    当前亮度：
                </ac-col>
                <ac-col span="7">
                    <ac-input v-model="value"></ac-input>
                </ac-col>
            </ac-row>
            <ac-view class="slider_win">
                <ac-slider v-model="value" @change="sliderchange"></ac-slider>
            </ac-view>
            <ac-row height="40" space-top="30">
                <ac-col span="5" vertical-align="middle">
                    常亮：
                </ac-col>
                <ac-col span="7">
                    {{isKeep?'是':'否'}}
                </ac-col>
            </ac-row>
            <ac-button type="primary" @tap="keep">设置屏幕常亮</ac-button>
            <ac-button type="primary" @tap="cancel">取消屏幕常亮</ac-button>
        </ac-view>
    </ac-layout>

</template>

<script>
    export default {
        config: {
            navigationBarTitleText: "屏幕亮度",
            sideSlip: true
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
            get() {
                appcan.getScreenBrightness({
                    success: ({value}) => {
                        this.value = value * 100
                    }
                })
            },
            set(value) {
                appcan.setScreenBrightness({
                    value
                })
            },
            keep() {
                appcan.setKeepScreenOn({
                    keepScreenOn: true,
                    success: () => {
                        this.isKeep = true
                    }
                })
            },
            cancel() {
                appcan.setKeepScreenOn({
                    keepScreenOn: false,
                    success: () => {
                        this.isKeep = false
                    }
                })
            },
            sliderchange(value) {
                console.log(value)
                this.set(value / 100)
            }
        },
        mounted() {
            this.get()
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
