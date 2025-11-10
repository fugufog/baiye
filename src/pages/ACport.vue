<template>
    <ac-layout>
        <ACTopText :text="title"></ACTopText>
        <ac-view class="page-body">
            <ac-view class="page-section">
                <ac-view class="page-section-title text-center">敬请期待</ac-view>
            </ac-view>
        </ac-view>
        <ac-grids-group rows="3">
            <ac-grids-item ac:for="(item, index) in list" :key="index" :link="item.link">
                <i slot="icon" :class="item.icon"></i>
                <span slot="text">{{item.name}}</span>
            </ac-grids-item>
        </ac-grids-group>
        <router-view/>
    </ac-layout>
</template>

<script>
    import ACTopText from '../component/ACTopText'

    export default {
        components: {ACTopText},
        name: 'Home',
        data() {
            return {
                title: '接口',
                isShow: true,
                list: [
                ]
            }
        },
        methods: {
            push(url) {
                appcan.navigateTo({url: url})
            }
        }
    }
</script>

<style scoped>
    .text-center {
        text-align: center
    }
</style>
