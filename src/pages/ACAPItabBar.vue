<template>
    <ac-layout>
        <ac-button type="primary" @tap="setTabBarBadge">setTabBarBadge</ac-button>
        <ac-button type="primary" @tap="removeTabBarBadge">removeTabBarBadge</ac-button>
        <ac-button type="primary" @tap="showTabBarRedDot">showTabBarRedDot</ac-button>
        <ac-button type="primary" @tap="hideTabBarRedDot">hideTabBarRedDot</ac-button>
        <ac-button type="primary" @tap="setTabBarStyle">setTabBarStyle</ac-button>
        <ac-button type="primary" @tap="setTabBarItem">setTabBarItem</ac-button>
        <ac-button type="primary" @tap="showTabBar">showTabBar</ac-button>
        <ac-button type="primary" @tap="hideTabBar">hideTabBar</ac-button>
    </ac-layout>

</template>

<script>
  export default {
    config: {
      navigationBarTitleText: "tabBar"
    },
    data() {
      return {
      }
    },
    methods: {
      setTabBarBadge(){
        appcan.setTabBarBadge({
          index: 0,
          text: '1',
          noticeName:'setTabBarBadge'
        })
      },
      removeTabBarBadge(){
        appcan.removeTabBarBadge({
          index: 0,
          noticeName:'removeTabBarBadge'
        })
      },
      showTabBarRedDot(){
        appcan.showTabBarRedDot({
          index: 0,
          noticeName:'showTabBarRedDot'
        })
      },
      hideTabBarRedDot(){
        appcan.hideTabBarRedDot({
          index: 0,
          noticeName:'hideTabBarRedDot'
        })
      },
      setTabBarStyle(){
        appcan.setTabBarStyle({
          color: '#FF0000',
          selectedColor: '#00FF00',
          backgroundColor: '#0000FF',
          borderStyle: 'white',
          noticeName:'setTabBarStyle'
        })
      },
      setTabBarItem(){
        appcan.setTabBarItem({
          index: 0,
          text: 'text',
          iconPath: '/path/to/iconPath',
          selectedIconPath: '/path/to/selectedIconPath',
          noticeName:'setTabBarItem'
        })
      },
      showTabBar(){
        appcan.showTabBar({
          animation:'',
          noticeName:'showTabBar'
        })
      },
      hideTabBar(){
        appcan.hideTabBar({
          animation:'',
          noticeName:'hideTabBar'
        })
      },
    }
  }
</script>

<style scoped lang="less">
</style>
