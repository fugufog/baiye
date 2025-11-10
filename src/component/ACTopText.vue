<template>
    <ac-view class="page-head">
        <ac-view class="page-head-title">{{text||'没有东西'}}</ac-view>
        <ac-view class="page-head-line"></ac-view>
    </ac-view>

</template>

<script>
    export default {
        name: 'ACTopText',
        data() {
            return {}
        },
        props: ['text'],
        methods: {}
    }
</script>

<style lang="less">
    .ac-content {
        bottom: 0;
    }
</style>
