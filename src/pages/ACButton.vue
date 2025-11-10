<template>
    <ac-layout>
        <ac-view class="win">
            <ac-button type="primary" icon="search" :loading="true" @tab="formSubmit">主要操作</ac-button>
            <ac-button type="primary" :loading="true">提交中</ac-button>
            <ac-button type="primary" icon="search">主要操作-禁用</ac-button>
            <ac-button icon="checkoff">次要操作</ac-button>
            <ac-button>次要操作-禁用</ac-button>
            <ac-button type="warn">警告操作</ac-button>
            <ac-button type="warn" :disabled="true">警告操作-禁用</ac-button>
            <ac-button type="primary" :plain="true">主要操作-镂空</ac-button>
            <ac-button :plain="true">次要操作-镂空</ac-button>
            <ac-button type="warn" :plain="true">警告操作-镂空</ac-button>
        </ac-view>
        <ac-view class="button-sp-area">
            <ac-button type="primary" ::plain="true">按钮</ac-button>
            <ac-button type="primary" :plain="true">不可点击的按钮</ac-button>

            <ac-button type="default" :plain="true">按钮</ac-button>
            <ac-button type="default" :plain="true">按钮</ac-button>

            <ac-button class="mini-btn" type="primary" size="mini">按钮</ac-button>
            <ac-button class="mini-btn" type="default" size="mini">按钮</ac-button>
            <ac-button class="mini-btn" type="warn" size="mini">按钮</ac-button>
        </ac-view>
    </ac-layout>
</template>

<script>
    export default {
        config: {
            'navigationBarTitleText': 'button'
        },
        data() {
            return {
                left: 0,
                sliderValue: 20
            }
        },
        methods: {
            formSubmit(e) {
                console.log(e)
            },
            formReset(e) {
            }
        }
    }

</script>

<style lang="less" scoped>
    .ac-content .win {
        padding: 10px;
    }

    .button-sp-area {
        margin: 0 auto;
        width: 60%;
    }

    .ui-icon-loading {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: .3em;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyNkOGQ4ZDgnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo=);
        background-position: 0% 50%;
        background-repeat: no-repeat;
        -webkit-animation: LoadingAnimate 1s steps(12, end) infinite;
        animation: LoadingAnimate 1s steps(12, end) infinite;
    }

    @-webkit-keyframes LoadingAnimate {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes LoadingAnimate {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .mini-btn {
        margin-right: 10 rpx;
        display: inline-block;
    }
</style>
