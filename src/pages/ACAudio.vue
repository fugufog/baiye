<template>
    <ac-layout>
        <ACTopText :text="text"></ACTopText>

        <ac-audio :current="current"></ac-audio>
    </ac-layout>
</template>

<script type="text/babel">
    import ACTopText from '../component/ACTopText'

    export default {
        config: {
            navigationBarTitleText: '音频'
        },
        components: {ACTopText},
        data() {
            return {
                text: 'audio',
                current: {
                  src: 'https://engineersong.github.io/musicList/shake_match.mp3',
                  name: '故事与她',
                  author: '沈念',
                },
            }
        },
    }
</script>
<style lang="less">


</style>
