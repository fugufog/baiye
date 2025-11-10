<template>
    <ac-layout>
        <ACTopText :text="title"></ACTopText>
        <ac-view >
            <ac-view class="page-body">
                <ac-view class="page-section">
                    <ac-view class="page-section-title">
                        <ac-text block>flex-direction: row</ac-text>
                        <ac-text block>横向布局</ac-text>
                    </ac-view>
                    <ac-view class="flex-wrp" style="flex-direction:row;">
                        <ac-view class="flex-item bc_green">1</ac-view>
                        <ac-view class="flex-item bc_red">2</ac-view>
                        <ac-view class="flex-item bc_blue">3</ac-view>
                    </ac-view>
                </ac-view>

                <ac-view class="page-section">
                    <ac-view class="page-section-title">
                        <ac-text block>flex-direction: column</ac-text>
                        <ac-text block>纵向布局</ac-text>
                    </ac-view>
                    <ac-view class="float-wrp">
                        <ac-view class="float-item bc_green">1</ac-view>
                        <ac-view class="float-item bc_red">2</ac-view>
                        <ac-view class="float-item bc_blue" style="color:black">3</ac-view>
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
      navigationBarTitleText: 'view',
      navigationBarBackgroundColor: '#89ff53',
      navigationBarTextStyle: 'white',
      pullDownRefresh: false
    },
    name: 'view',
    data() {
      return {
        title: 'view'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    .flex-wrp {
        display: flex;
        background-color: #FFFFFF;
        width: 15rem;
        margin: 0 auto;
    }

    .flex-item {
        width: 5rem;
        height: 10rem;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bc_green {
        background-color: #008ced;
    }

    .bc_red {
        background-color: #20b922;
    }

    .float-wrp {
        margin: 0 auto;
        width: 8rem;
    }

    .flex-item {
        width: 5rem;
        height: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .float-wrp .float-item {
        height: 5rem;
        text-align: center;
        line-height: 5rem;
        color: #ffffff;
        width: 8rem;
    }

    .sample_content {
        margin-top: 5rem;
    }

    .section {
        margin-top: 5rem;
    }

    .touch_wrap {
        width: 2rem;
        height: 2rem;
        margin: auto;
        line-height: 2rem;
        text-align: center;
    }

    .touch_end {
        background: #eee;
    }

    .bc_blue {
        background-color: #f1f1f1;
        color: black;
    }
</style>
