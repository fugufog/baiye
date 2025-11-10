<template>
    <ac-layout>
        <ac-view class="container">

            <ACTopText :text="title"></ACTopText>

            <ac-view class="page-body">
                <ac-view class="page-section page-section-spacing">
                    <ac-view class="text-box" :scroll-y="true" :scroll-top="scrollTop">
                        <ac-text :decode="true">{{text}}</ac-text>
                    </ac-view>
                    <ac-button :disabled="!canAdd" @tap="add">add line</ac-button>
                    <ac-button :disabled="!canRemove" @tap="remove">remove line</ac-button>
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
      navigationBarTitleText: "Text",
      navigationBarBackgroundColor: '#57a7f9',
      navigationBarTextStyle: 'black'
    },
    data() {
      return {
        counts: 1,
        title: 'text',
        scrollTop: 99999,
        text: '',
        canAdd: true,
        canRemove: false,
        texts: [
          'appcan text 1',
          'appcan text 2',
          'appcan text 3',
          'appcan text 4',
          'appcan text 5',
          'appcan text 6',
          'appcan text 7',
          'appcan text 8',
          '......'
        ],
        extraLine: []
      }
    },
    mounted() {
      setTimeout(()=>{
        this.pulls();
      },1000)
    },
    methods: {
      pulls() {
        appcan.startPullDownRefresh((res) => {
          alert('开始下拉')
        })
        appcan.onPullDownRefresh((res) => {
          alert('监听下拉')
          appcan.stopPullDownRefresh((res) => {
            alert('停止下拉')
          })
        })

        appcan.onReachBottom((res) => {
          alert('触底事件')
        })
      },
      push(url) {
        appcan.navigateTo({
          url: url
        })
      },
      add() {
        this.counts++;
        // globalBus.$emit('countNumber', this.counts);
        // // window.location.href = 'https://www.hao123.com/'
        // // appcan.switchTab({url:'ACAPI'})
        this.extraLine.push(this.texts[this.extraLine.length % 12])
        this.text = this.extraLine.join('\n')
        this.canAdd = this.extraLine.length < 12
        this.canRemove = this.extraLine.length > 0
      },
      remove() {
        if (this.extraLine.length > 0) {
          this.extraLine.pop()
          this.text = this.extraLine.join('\n')
          this.canAdd = this.extraLine.length < 12,
            this.canRemove = this.extraLine.length > 0
        }
      }
    }
  }
</script>

<style lang="less">


    .price {
        font-size: 1rem;
        color: #0ff;
    }

    button {
        margin: 2rem 0;
    }

    .text-box {
        margin-bottom: 3.5rem;
        padding: 2rem 0;
        display: flex;
        min-height: 15rem;
        background-color: #FFFFFF;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.5rem;
        color: #353535;
        line-height: 2em;
    }
</style>
