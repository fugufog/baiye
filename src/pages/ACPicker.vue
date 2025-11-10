<template>
    <ac-layout>
        <ACTopText :text="title"></ACTopText>
        <ac-view class="page-body">
            <ac-view class="page-section">
                <ac-view class="padding-common">地区选择器</ac-view>
                <ac-picker class="acpicker" title="当前选择" :range="list" :value="value"
                           @change="handleChange"></ac-picker>
            </ac-view>
            <ac-view class="page-section">
                <ac-view class="padding-common">时间选择器</ac-view>
                <ac-picker class="acpicker" mode="time" title="当前选择" :value="timeValue"
                           @change="handleChange1"></ac-picker>
            </ac-view>
            <ac-view class="page-section">
                <ac-view class="padding-common">日期选择器</ac-view>
                <ac-picker class="acpicker" title="当前选择" mode="date" start="2017-09-01" end="2018-09-30"
                           :value="dataValue" @change="handleChange2"></ac-picker>
            </ac-view>
            <ac-view class="page-section">
                <ac-view class="padding-common">省市区</ac-view>
                <ac-picker class="acpicker" title="当前选择" mode="region" :range="cityValues"
                           :value="city" @change="handleChange3"></ac-picker>
            </ac-view>
            <ac-view class="page-section">
                <ac-view class="padding-common">多项选择器</ac-view>
                <ac-picker class="acpicker" title="当前选择" mode="multiSelector" :range="multiArray"
                            @change="handleChange4"></ac-picker>
            </ac-view>
        </ac-view>
    </ac-layout>
</template>

<script>
    import ACTopText from '../component/ACTopText'
    import citys from '../utils/address.js'

    export default {
        components: {ACTopText},
        config: {
            "navigationBarTitleText": "Picker"
        },
        data() {
            return {
                title: 'Picker',
                list: ['中国', '美国', '巴西', '日本'],
                value: 1,
                timeValue: '00:00',
                dataValue: '2017-09-05',
                cityValues: citys,
                city: ["110000", "110100", "110102"],
                multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
               mutData :[0,1,0],
            }
        },
        methods: {
            handleChange(val) {
                this.value = val
            },
            handleChange1(val) {
                this.timeValue = val
            },
            handleChange2(val) {
                this.dataValue = val
            },
            handleChange3(val){
              console.log(val)
            },
            handleChange4(val){
              console.log(val)
              // this.mutData = val
            }
        }
    }

</script>

<style lang="less">


    .sample_content {
        line-height: inherit;
    }

    .padding-common {
        color: #999999;
        padding: .5rem .75rem;
    }

    .acpicker .weac-cell {
        background-color: white;
        border-top: 1px solid #C7C7C7;
        border-bottom: 1px solid #C7C7C7;
    }
</style>
