<template>
    <ac-layout>
        <ACTopText :text="title"></ACTopText>
        <ac-view>
            <ac-view class="page-body">
                <ac-view class="page-section page-section-gap" style="margin-left:20px;padding:10px 0;font-size:1rem;">
                    <ac-radio-group @change="handleChange1">
                        <ac-row type="flex">
                            <ac-col ac:for="(item, index) in itemsRadio" :key="index">
                                <ac-label>
                                    {{item.value}}
                                    <ac-radio :value="item.name" :checked="item.checked"
                                              :disabled="item.disabled"></ac-radio>
                                </ac-label>
                            </ac-col>
                        </ac-row>
                    </ac-radio-group>
                    <ac-label>
                        aaaa
                        <ac-radio></ac-radio>
                    </ac-label>

                </ac-view>
            </ac-view>
        </ac-view>
    </ac-layout>

</template>

<script type="text/babel">
    import ACTopText from '../component/ACTopText'

    export default {
        components: {ACTopText},
        config: {
            navigationBarTitleText: "Radio"
        },
        data() {
            return {
                title: 'Radio',
                value1: '',
                itemsRadio: [
                    {name: '1', value: '选项一'},
                    {name: '2', value: '选项二', checked: true},
                    {name: '3', value: '选项三', disabled: true}
                ]
            }
        },
        methods: {
            handleChange1(value) {
                this.value1 = value
            }
        }
    }
</script>
<style lang="less">
    
</style>

