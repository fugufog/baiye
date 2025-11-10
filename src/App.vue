

<template>
  <ac-layout>
    <ac-navbar ac:if="showNavbar" slot="top">
      <ac-navbar-back-icon slot="left" ac:if="showBack"></ac-navbar-back-icon>
    </ac-navbar>
    <router-view/>
    <ac-tabbar ac:if="showTabbar" slot="bottom" :tabindex.sync="activeIndex"></ac-tabbar>
  </ac-layout>
</template>
<script>

  export default {
    name: 'App',
    data () {
      return {
        activeIndex:0
      }
    },
    props: {
      link: String,
    },
    watch:{
      '$route' (to, from) {
        // 对路由变化作出响应...

        if(!this.isApp && this.isTabPath(to.path)){
          this.$nextTick(m=>{
            this.activeIndex = this.findTab(to.path)
          })
        }
      }
    },
    computed:{
      isApp(){
        return appcan.IS_APP //|| typeof acNative !== 'undefined'
      },
      // 控制底部标签栏是否显示
      isTabBar () {
        return this.$defConfig.tabBar && this.$defConfig.tabBar.list && this.$defConfig.tabBar.list.length
      },
      nowIsTab(){
        if(!this.isTabBar){
          return false
        }
        const list = this.$defConfig.tabBar.list
        for(let i in list){
          if(list[i].pagePath === this.$route.path){
            return true
          }
        }
        return false
      },
      // 控制通用导航栏是否显示返回按钮（首页不显示，其他页显示）
      showBack () {
        return !this.nowIsTab
      },
      showNavbar(){
        return !this.isApp && this.$defConfig.window.navigationBarTitleText !== 'custom'
      },
      showTabbar(){
        return !this.isApp && this.nowIsTab
      }
    },
    mounted() {
      this.$nextTick(m=>{
        this.activeIndex = this.findTab(this.$router.currentRoute.path)
      })

    },
    methods: {
      isTabPath(path){
        if(!this.isTabBar){
          return false
        }
        const list = this.$defConfig.tabBar.list
        for(let i in list){
          if(list[i].pagePath === path){
            return true
          }
        }
        return false
      },
      findTab(path){
        if(!this.isTabBar){
          return -1
        }
        const list = this.$defConfig.tabBar.list
        for(let i in list){
          if(list[i].pagePath === path){
            return i
          }
        }
        return -1
      }
    }
  }
</script>
