<template>
    <ac-layout>
        <ac-view class="content">
            <ac-row height="40" space="10">
                <ac-col span="5" vertical-align="middle">
                    图片来源：
                </ac-col>
                <ac-col span="7">
                    <ac-input :value="sourceType[sourceTypeIndex]"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space="10">
                <ac-col span="5" vertical-align="middle">
                    图片质量：
                </ac-col>
                <ac-col span="7">
                    <ac-input :value="sizeType[sizeTypeIndex]"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space="10">
                <ac-col span="5" vertical-align="middle">
                    数量限制：
                </ac-col>
                <ac-col span="7">
                    <ac-input :value="count[countIndex]"></ac-input>
                </ac-col>
            </ac-row>
            <!--<ac-image :src="imageList[0]" width="80"></ac-image>-->
            <ac-view class="imageList_win" ac:if="isImageList">
                <ac-view class="image" :key="image" ac:for="image in imageList" @tap="previewImage(image)">
                    <ac-image :src="image" width="80"  ></ac-image>

                </ac-view>
            </ac-view>
            <ac-button type="primary" @tap="chooseImage">选择图片</ac-button>
            <ac-button type="primary" @tap="getImageInfo">获取图片信息</ac-button>
            <ac-button type="primary" @tap="previewImage('https://img-blog.csdn.net/20180530164014725')">预览图片</ac-button>
            <ac-button type="primary" @tap="saveImageToPhotosAlbum">保存图片到系统相册</ac-button>
        </ac-view>
    </ac-layout>

</template>

<script>
var sourceType = [['camera'], ['album'], ['camera', 'album']]
var sizeType = [['compressed'], ['original'], ['compressed', 'original']]
export default {
  config: {
    navigationBarTitleText: '相册'
  },
  data() {
    return {
      imageList: [],
      sourceTypeIndex: 2,
      sourceType: ['拍照', '相册', '拍照或相册'],
      sizeTypeIndex: 1,
      sizeType: ['压缩', '原图', '压缩或原图'],
      countIndex: 2,
      count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      isImageList: false
    }
  },
  methods: {
    chooseImage() {
      if (!appcan.IS_APP) {
        var that = this
        let o = {
          sourceType: sourceType[this.sourceTypeIndex],
          sizeType: sizeType[this.sizeTypeIndex],
          count: this.count[this.countIndex],
          success: function(res) {
            that.isImageList = true
            console.log(111, res.tempFilePaths)
          },
          fail: function(res) {
            alert(JSON.stringify(res))
          }
        }
        appcan.chooseImage(o)
      } else {
        var that = this
        let o = {
          sourceType: sourceType[this.sourceTypeIndex],
          sizeType: sizeType[this.sizeTypeIndex],
          count: this.count[this.countIndex],
          success: function(res) {
            for (let i of res.tempFilePaths) {
              that.imageList.push(i)
            }
            that.isImageList = true
            console.log(111, that.imageList)
          },
          fail: function(res) {
            alert(JSON.stringify(res))
          }
        }
        appcan.chooseImage(o)
      }
    },
    getImageInfo() {
      appcan.getImageInfo({
        src:
          'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=788588538,2190289795&fm=173&app=25&f=JPEG?w=218&h=146&s=A232328D5E323E9ADA2D148E0100F091',
        success: function(res) {
          alert(JSON.stringify(res))
          console.log(111, res)
        }
      })
    },
    previewImage(item) {
      if (!appcan.IS_APP) {
        appcan.previewImage({
          current: item, // 当前显示图片的http链接
          urls: [
            'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=788588538,2190289795&fm=173&app=25&f=JPEG?w=218&h=146&s=A232328D5E323E9ADA2D148E0100F091'
          ]
        })
      } else {
        appcan.previewImage({
          current: item, // 当前显示图片的http链接
          urls: this.imageList
        })
      }
    },
    saveImageToPhotosAlbum() {
      if (appcan.IS_IOS) {
        appcan.downloadFile({
          url:
            'http://edu.gzmtr.cc/courseware/longImg/f15e1be3-5704-419b-9419-9b1cdcdd111c.jpg',
          success: function(res) {
            alert('下载成功:' + JSON.stringify(res))
            appcan.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function(res) {
                alert('保存成功')
              },
              fail() {}
            })
          }
        })
        return
      }
      appcan.saveImageToPhotosAlbum({
        filePath:
          'http://edu.gzmtr.cc/courseware/longImg/f15e1be3-5704-419b-9419-9b1cdcdd111c.jpg',
        success: function(res) {
          alert('保存成功')
        },
        fail() {}
      })
    }
  }
}
</script>

<style scoped lang="less">
.content {
  padding: 10px;
}

.imageList_win {
  display: flex;
  flex-wrap: wrap;
  // .mix-flex-x-center();
  width: 300px;
  margin: 0 auto;
  .image {
    margin: 5px;
  }
}
</style>
