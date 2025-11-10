<template>
    <ac-layout>
        <ACTopText :text="title"></ACTopText>
        <ac-block class="page-section page-section-gap">
            <ac-switch v-model="switch1"></ac-switch>
        </ac-block>
    </ac-layout>

</template>

<script type="text/babel">
    import ACTopText from '../component/ACTopText'

    export default {
        components: {ACTopText},
        config: {
            navigationBarTitleText: "switch"
        },
        data() {
            return {
                title: 'switch',
                switch1: true
            }
        }
    }
</script>
<style lang="less">

</style>
