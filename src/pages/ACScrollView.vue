<template>
    <ac-layout>

        <ACTopText :text="title"></ACTopText>
        <ac-view class="container" hover-start-time="400">
            <ac-view class="page-body">
                <ac-view class="page-section">
                    <ac-view class="page-section-title">
                        <ac-text block>Vertical Scroll</ac-text>
                        <ac-text block>纵向滚动</ac-text>
                    </ac-view>
                    <ac-view class="page-section-spacing">
                        <ac-scroll-view :scroll-top.sync="scrollTop" scroll-y :scroll-into-view.sync="toView"
                                        :enable-reach-bottom-load="true" :pull-down="pullDown" style="height: 8rem;">
                            <ac-view id="demo1" class="scroll-view-item demo-text-1"></ac-view>
                            <ac-view id="demo2" class="scroll-view-item demo-text-2"></ac-view>
                            <ac-view id="demo3" class="scroll-view-item demo-text-3"></ac-view>
                        </ac-scroll-view>
                    </ac-view>
                </ac-view>

                <ac-view class="page-section">
                    <ac-view class="page-section-title">
                        <ac-text block>Horizontal Scroll</ac-text>
                        <ac-text block>横向滚动</ac-text>
                    </ac-view>
                    <ac-view class="page-section-spacing">
                        <ac-scroll-view scroll-x class="scroll-view_H" style="width: 100%">
                            <ac-view id="demo1" class="scroll-view-item_H demo-text-1"></ac-view>
                            <ac-view id="demo2" class="scroll-view-item_H demo-text-2"></ac-view>
                            <ac-view id="demo3" class="scroll-view-item_H demo-text-3"></ac-view>
                        </ac-scroll-view>
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
            navigationBarTitleText: 'scroll-view',
            navigationBarBackgroundColor: '#FFFFFF',
            navigationBarTextStyle: '#000000',
            showNavbar: true
        },
        name: 'Test',
        data() {
            return {
                title: 'View',
                order: ['demo1', 'demo2', 'demo3'],
                toView: 'demo1',
                scrollTop: 0,
                pullDown: {
                    distance: 60,
                    onBegin: this.handleBegin,
                    onActive: this.handleActive,
                    onAfter: this.handleAfter
                }
            }
        },
        methods: {
            handleBegin({distance, direction}) {
                console.log(distance, direction)
            },
            handleActive() {
                console.log('active')
            },
            handleAfter(flag) {
                console.log(flag)
            },
            tap(e) {
                for (var i = 0; i < this.order.length; ++i) {
                    if (this.order[i] === this.toView) {
                        this.setData({
                            toView: this.order[i + 1],
                            scrollTop: (i + 1) * 200
                        })
                        break
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    .page-section-spacing {
        margin-top: 1.6rem;
    }

    .scroll-view_H {
        white-space: nowrap;
        margin: 0px;
        padding: 0px;
        font-size: 0px;
    }

    .scroll-view-item {
        height: 8rem;
    }

    .scroll-view-item_H {
        display: inline-block;
        width: 100%;
        height: 8rem;
        margin: 0px;
        padding: 0px;
        text-align: center;
    }
</style>
