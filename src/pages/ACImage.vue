<template>
    <ac-layout>
        <ac-scroll-view scroll-y style="height:100%">
          <ac-image
            ac:for="(item, index) in list"
            :key="index"
            class="img"
            :src="item.src"
            lazy-load
            width="300"
            height="200"
            @load="loadimage"
            >
            <ac-view class="custom-placeholder">
              <ac-view class="text">appcan</ac-view>
            </ac-view>
          </ac-image>

        </ac-scroll-view>
    </ac-layout>
</template>

<script>
export default {
  config: {
    navigationBarTitleText: '图片'
  },
  name: 'image',
  data() {
    return {
      list: [
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        }
      ]
    }
  },
  methods: {
    loadimage(E){
      console.log(E)
    }
  }
}
</script>

<style lang="less">
.page-section-ctn {
  text-align: center;
}

.page-section-gap {
  box-sizing: border-box;
  padding: 0 1.5rem;
}

.page-section {
  width: 100%;
  margin-bottom: 2rem;
}

.image {
  display: inline-block;
  overflow: hidden;
  margin-top: 1.5rem;
}
.img {
  margin: 0 auto;
}

.custom-placeholder {
  height: 100%;
  background-color: #f7f9fb;
  text-align: center;
  padding-top: 30px;
  .text {
    font-size: 20px;
    color: #e6e6e6;
  }
}
</style>
