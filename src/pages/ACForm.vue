<template>
    <ac-layout>
        <ac-view class="page-body">
            <ac-form @submit="formSubmit" @reset="formReset">
                <ac-view class="page-section page-section-gap">
                    <ac-view>switch</ac-view>
                    <ac-switch name="switch" title="开关"></ac-switch>
                </ac-view>
                <ac-view class="page-section page-section-gap">
                    <ac-view>radio</ac-view>
                    <ac-radio-group name="radio" style="padding:.3rem 0">
                        <ac-row type="flex">
                            <ac-col>
                                <ac-label>
                                    <ac-radio value="radio1"></ac-radio>
                                    选项一
                                </ac-label>
                            </ac-col>
                            <ac-col>
                                <ac-label>
                                    <ac-radio value="radio2"></ac-radio>
                                    选项二
                                </ac-label>
                            </ac-col>
                            <ac-col>
                                <ac-label>
                                    <ac-radio value="radio3"></ac-radio>
                                    选项三
                                </ac-label>
                            </ac-col>
                        </ac-row>
                    </ac-radio-group>
                </ac-view>
                <ac-view class="page-section page-section-gap">
                    <ac-view>checkbox</ac-view>
                    <ac-checkbox-group name="checkbox" style="padding: .3rem 0;">
                        <ac-row type="flex">
                            <ac-col>
                                <ac-label>
                                    <ac-checkbox value="checkbox1"></ac-checkbox>
                                    选项一
                                </ac-label>
                            </ac-col>
                            <ac-col>
                                <ac-label>
                                    <ac-checkbox value="checkbox2"></ac-checkbox>
                                    选项二
                                </ac-label>
                            </ac-col>
                            <ac-col>
                                <ac-label>
                                    <ac-checkbox value="checkbox3"></ac-checkbox>
                                    选项三
                                </ac-label>
                            </ac-col>
                        </ac-row>
                    </ac-checkbox-group>
                </ac-view>

                <ac-view class="page-section page-section-gap">
                    <ac-view>Slider</ac-view>
                    <ac-slider name="slider" :show-max-value="true" :show-value="true" :width="width"></ac-slider>
                </ac-view>

                <ac-view class="page-section page-section-gap">
                    <ac-view>input</ac-view>
                    <ac-input name="input" type="text" placeholder="这是一个输入框"></ac-input>
                </ac-view>

                <ac-view class="page-section page-section-gap">
                    <ac-button form-type="submit" type="primary">Submit</ac-button>
                    <ac-button form-type="reset">Reset</ac-button>
                </ac-view>

            </ac-form>
        </ac-view>
    </ac-layout>
</template>

<script>
    export default {
        config: {
            'navigationBarTitleText': '表单'
        },
        data() {
            return {
                switch1: true,
                width: window.innerWidth - window.rem * 3.5
            }
        },
        methods: {
            formSubmit(e) {
                console.log(e)
            },
            formReset(e) {
            }
        }
    }

</script>

<style lang="less">
    

    .sample_content {
        line-height: inherit;
    }
</style>
