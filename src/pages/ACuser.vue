<template>
    <div>
        <h1 style="text-align:center;">Hello AppCan</h1>
    </div>
</template>

<script>
    export default {
        config: {
            window: {
                navigationBarTitleText: '详情',
                navigationBarBackgroundColor: '#FAFAFA',
                navigationBarTextStyle: '#3b3b3b',
                showNavbar: true
            },
            tabBar: {
                showTabbar: true,
                color: '#7A7E83',
                selectedColor: '#0074E8',
                borderStyle: 'black',
                backgroundColor: '#ffffff',
                list: [
                    {
                        pagePath: '/',
                        iconPath: 'home',
                        selecedIconPath: 'home',
                        text: '首页'
                    },
                    {
                        pagePath: '/port',
                        iconPath: 'ucenter-outline',
                        selecedIconPath: 'ucenter-outline',
                        text: '个人中心'
                    }
                ]
            }
        }
    }
</script>
