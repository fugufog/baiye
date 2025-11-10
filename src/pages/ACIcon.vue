<template>
    <ac-layout>

        <ACTopText :text="title"></ACTopText>


        <ac-icon type="success" size="2rem" color="red"></ac-icon>
        <ac-icon type="info" size="2.5rem" ></ac-icon>
        <ac-icon type="info-circle" size="24"></ac-icon>
        <ac-icon type="warn" size="24"></ac-icon>
        <ac-icon type="waiting" size="24"></ac-icon>
        <ac-icon type="waiting-circle" size="24"></ac-icon>
        <ac-icon type="safe-success" size="24"></ac-icon>
        <ac-icon type="safe_warn" size="24"></ac-icon>
        <ac-icon type="success-circle" size="24"></ac-icon>
        <ac-icon type="success-no-circle" size="24"></ac-icon>
        <ac-icon type="circle" size="24"></ac-icon>
        <ac-icon type="download" size="24"></ac-icon>
        <ac-icon type="cancel" size="24"></ac-icon>
        <ac-icon type="search" size="24"></ac-icon>
        <ac-icon type="clear" size="24"></ac-icon>

    </ac-layout>
</template>

<script>
    import ACTopText from '../component/ACTopText'

    export default {
        components: {ACTopText},
        config: {
            'navigationBarTitleText': 'icon'
        },
        name: 'Test',
        data() {
            return {
                title: 'icon',
                success: 'success',
                msg: 'test View'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
