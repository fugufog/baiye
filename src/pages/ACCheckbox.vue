<template>
    <ac-layout>
        <ACTopText :text="title"></ACTopText>
        <ac-view>
            <ac-view class="page-body">
                <ac-view class="page-section page-section-gap" style="margin-left:20px;padding:10px 0;font-size:1rem;">
                    <ac-checkbox-group @change="checkboxChange">
                    <ac-label  class="checkbox" ac:for="(item ,index) in items" :key="index">
                      <ac-checkbox  :value="item.name" :checked="item.checked"></ac-checkbox>
                                    {{item.value}}
                    </ac-label>
                  </ac-checkbox-group>
                </ac-view>
            </ac-view>
        </ac-view>
    </ac-layout>
</template>

<script>
    import ACTopText from '../component/ACTopText'

export default {
  components: { ACTopText },
  config: {
    navigationBarTitleText: 'checkbox'
  },
  data() {
    return {
      title: 'checkbox',
      items: [
        { name: 'USA', value: '美国' },
        { name: 'CHN', value: '中国', checked: true },
        { name: 'BRA', value: '巴西', checked: true }
      ]
    }
  },
  methods: {
    checkboxChange(e) {
      console.log(e)
    },
    formReset(e) {}
  }
}
</script>

<style lang="less">
    

    .checkbox {
        margin-right: 1rem;
        display: inline-block;
    }

</style>
