<template>
    <ac-layout>
        <ac-view class="container">
            <ACTopText :text="title"></ACTopText>
            <ac-view class="page-body">
                <ac-view class="page-section page-section-spacing">
                    <ac-navigator url="/pages/ACInput?state=1&bb=2&ccc=222" openType="navigate" hover-class="navigator-hover">
                        <ac-button type="default">跳转到新页面</ac-button>
                    </ac-navigator>
                    <ac-navigator url="/pages/ACForm" openType="redirect" hover-class="other-navigator-hover">
                        <ac-button type="default">在当前页打开</ac-button>
                    </ac-navigator>
                    <!-- <ac-button  @tap="newHtml('/input')">跳转到新页面</ac-button>
                    <ac-button  @tap="currentHtml('/form')">在当前页打开</ac-button> -->
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
            navigationBarTitleText: "Navigator"
        },
        data() {
            return {
                title: 'Navigator',
                text: '',
            }
        },
        methods: {
            newHtml(url) {
                appcan.navigateTo({
                    url: url
                })
            },
            currentHtml(url) {
                appcan.redirectTo({
                    url: url
                })
            }
        }
    }
</script>

<style lang="less">


    .navigator-hover button {
        background-color: #DEDEDE;
    }

    .other-navigator-hover button {
        background-color: #DEDEDE;
    }

</style>
