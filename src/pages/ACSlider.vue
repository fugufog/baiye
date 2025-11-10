<template>
    <ac-layout>
        <ac-view>
            <ACTopText :text="title"></ACTopText>
            <ac-view class="page-section page-section-gap">
                <ac-slider name="slider" :show-max-value="true" :show-value="true" :width="width"></ac-slider>
            </ac-view>
        </ac-view>
    </ac-layout>
</template>

<script type="text/babel">
    import ACTopText from '../component/ACTopText'

    export default {
        components: {ACTopText},
        config: {
            navigationBarTitleText: "Slider"
        },
        data() {
            return {
                title: 'Slider',
                width: window.innerWidth - window.rem * 3
            }
        }
    }
</script>

<style lang="less">
    


</style>
