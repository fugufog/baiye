<template>
    <ac-layout>
        <ac-button type="primary" @tap="playVoice">playVoice</ac-button>
        <ac-button type="primary" @tap="pauseVoice">pauseVoice</ac-button>
        <ac-button type="primary" @tap="stopVoice">stopVoice</ac-button>
    </ac-layout>

</template>
<script>
    export default {
        config: {
            navigationBarTitleText: '音频播放'
        },
        data() {
            return {}
        },
        methods: {
            playVoice: function () {
                appcan.playVoice({
                    filePath: 'https://engineersong.github.io/musicList/shake_match.mp3',
                    complete: () => {

                    }
                })
            },
            pauseVoice: function () {
                appcan.pauseVoice()
            },
            stopVoice: function () {
                appcan.stopVoice()
            }
        },
        mounted() {
        }
    }
</script>
