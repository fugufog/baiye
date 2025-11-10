<template>
    <ac-layout>
        <ac-button type="primary" @tap="scanCode">扫码</ac-button>
    </ac-layout>

</template>
<script>
    export default {
        config: {
            navigationBarTitleText: 'scanCode'
        },
        data() {
            return {}
        },
        methods: {
            scanCode() {
                appcan.scanCode({
                    onlyFromCamera: false,
                    success: (res) => {
                        alert(JSON.stringify(res))
                    }
                })
            },
        }
    }
</script>
