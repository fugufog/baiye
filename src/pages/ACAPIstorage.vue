<template>
    <ac-layout>
        <ac-view class="demo-title">写入缓存</ac-view>
        <ac-view class="demo-content">
            <ac-row height="45" space-bottom="10">
                <ac-col span="2" vertical-align="middle">
                    key：
                </ac-col>
                <ac-col span="10" vertical-align="middle">
                    <ac-input placeholder="请输入缓存的key" v-model="key"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="45" space-bottom="10">
                <ac-col span="2" vertical-align="middle">
                    value：
                </ac-col>
                <ac-col span="10" vertical-align="middle">
                    <ac-input placeholder="请输入缓存的内容" v-model="text"></ac-input>
                </ac-col>
            </ac-row>
            <ac-button @tap="storage">写入缓存</ac-button>
        </ac-view>

        <ac-view class="demo-title">获取缓存</ac-view>
        <ac-view class="demo-content">
            <ac-picker title="" :range=" list " :value="val" @change="handleChange"></ac-picker>
            <ac-button @tap="getStorage">获取缓存</ac-button>
        </ac-view>

        <ac-view class="demo-title">移除缓存</ac-view>
        <ac-view class="demo-content">
            <ac-input placeholder="缓存的内容" v-model="gettext"></ac-input>
            <ac-row>
                <ac-col span="6" space-right="5">
                    <ac-button @tap="removeStorage">移除缓存的key</ac-button>
                </ac-col>
                <ac-col span="6" space-left="5">
                    <ac-button @tap="clearStorage">清理本地数据缓存</ac-button>
                </ac-col>
            </ac-row>
        </ac-view>
    </ac-layout>

</template>

<script>
    export default {
        config: {
            navigationBarTitleText: 'storage'
        },
        data() {
            return {
                key: '',
                text: '',
                gettext: '',
                list: ['请选择'],
                val: 0
            }
        },
        methods: {
            handleChange (val) {
              this.val = val
            },
            storage () {
              appcan.setStorageSync(this.key, this.text)
              if (!this.contains(this.list, this.key)) {
                this.list.push(this.key)
              }
              appcan.showToast({
                title: '已缓存'
              })
            },
            contains (arr, obj) {
              var i = arr.length
              while (i--) {
                if (arr[i] === obj) {
                  return true
                }
              }
              return false
            },
            getStorage () {
              var value = appcan.getStorageSync(this.list[this.val])
              this.gettext = value
            },
            removeStorage () {
              appcan.removeStorageSync(this.list[this.val])
              this.removePicker(this.list[this.val])
              appcan.showToast({
                title: '已移除'
              })
            },
            removePicker (val) {
              var index = this.val
              if (index > -1) { this.list.splice(index, 1) }
            },
            clearStorage () {
              appcan.clearStorageSync()
              console.log(this.list)
              this.list = ['请选择']
              console.log(this.list)
              appcan.showToast({
                title: '已清理'
              })
            }
        }
    }
</script>

<style scoped>

</style>
