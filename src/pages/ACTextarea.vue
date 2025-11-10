<template>
    <ac-layout>
        <ac-view>
            <ACTopText :text="title"></ACTopText>
            <ac-view class="page-body">
                <ac-view class="page-section">
                    <ac-view class="page-section-title">输入区域高度自适应，不会出现滚动条</ac-view>
                    <ac-view>
                        <ac-textarea  auto-height placeholder="红色placeholder"
                                      placeholder-style="color:red"></ac-textarea>
                    </ac-view>
                    <!--<ac-button @tap="a">aaaa</ac-button>-->
                </ac-view>
            </ac-view>
        </ac-view>
    </ac-layout>

</template>

<script type="text/babel">
  import ACTopText from '../component/ACTopText';

  export default {
    components: {ACTopText},
    config: {
      navigationBarTitleText: 'Textarea'
    },
    data() {
      return {
        title: 'Textarea'
      }
    },
    methods: {
    },
  }
</script>
<style lang="less" scoped>
.page-section-title {
    font-size: 0.9rem;
    color: #999999;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

</style>
