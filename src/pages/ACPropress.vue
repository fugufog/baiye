<template>
    <ac-layout>
        <ac-view class="container">
            <ACTopText :text="title"></ACTopText>

            <!-- <ac-text>渐变色</ac-text>
            <ac-view class="sample_content">
              <ac-progress percent="70" active stroke-width="10" active-color="#9266FB,#F55691"></ac-progress>
              <ac-progress percent="80" stroke-width="10" active-color="#FC8609, #f40" background-color="#FCD9C1"></ac-progress>
            </ac-view> -->

            <ac-view class="page-body">
                <ac-view class="page-section page-section-gap">

                    <ac-view class="progress-box">
                        <ac-progress percent="20" show-info stroke-width="3"/>
                    </ac-view>

                    <ac-view class="progress-box">
                        <ac-progress percent="40" active stroke-width="3"/>

                    </ac-view>

                    <ac-view class="progress-box">
                        <ac-progress percent="60" active stroke-width="3"/>
                    </ac-view>

                    <ac-view class="progress-box">
                        <ac-progress percent="80" active-color="#9266FB,#F55691" active stroke-width="3"/>
                    </ac-view>
                </ac-view>
            </ac-view>
        </ac-view>
    </ac-layout>
</template>

<script>
    import ACTopText from '../component/ACTopText'

    export default {
        components: {ACTopText},
        config: {
            'navigationBarTitleText': 'Propress'
        },
        name: 'Test',
        data() {
            return {
                title: 'progress',
                msg: 'test View'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    

    progress {
        width: 100%;
    }

    .progress-box {
        height: 0.5rem;
        margin-bottom: 2rem;
    }

    .progress-cancel {
        margin-left: 2rem;
    }
</style>

