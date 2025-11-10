<template>
    <ac-layout>
        <ac-view>
            <ACTopText :text="title"></ACTopText>
            <ac-view class="page-section page-section-gap">
                <ac-view>radio</ac-view>
                <ac-radio-group name="radio" style="padding:.3rem 0">
                    <ac-row type="flex">
                        <ac-col ac:for="(item, index) in itemsRadio" :key="index">
                            <ac-label>
                                <ac-radio :value="item.name" :checked="item.checked"></ac-radio>
                                {{item.value}}
                            </ac-label>
                        </ac-col>
                    </ac-row>
                </ac-radio-group>
            </ac-view>
            <ac-view class="page-section page-section-gap">
                <ac-view>checkbox</ac-view>
                <ac-checkbox-group name="checkbox" style="padding: .3rem 0;">
                    <ac-row type="flex">
                        <ac-col ac:for="(item, index) in items" :key="index">
                            <ac-label>
                                <ac-checkbox :value="item.name" :checked="item.checked"></ac-checkbox>
                                {{item.value}}
                            </ac-label>
                        </ac-col>
                    </ac-row>
                </ac-checkbox-group>
            </ac-view>
        </ac-view>
    </ac-layout>

</template>

<script>
    import ACTopText from '../component/ACTopText'

    export default {
        components: {ACTopText},
        config: {
            'navigationBarTitleText': 'label'
        },
        data() {
            return {
                title: 'label',
                items: [
                    {name: 'USA', value: '美国'},
                    {name: 'CHN', value: '中国', checked: true},
                    {name: 'BRA', value: '巴西', checked: true}
                ],
                itemsRadio: [
                    {name: 'USA', value: '美国'},
                    {name: 'CHN', value: '中国'},
                    {name: 'BRA', value: '巴西', checked: true}
                ],
            }
        },
    }
</script>

<style lang="less">
    
</style>
