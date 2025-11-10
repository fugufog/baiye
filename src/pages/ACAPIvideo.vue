<template>
  <ac-layout>
    <ac-view class="content">
      <ac-row height="40">
        <ac-col span="12">
          <ac-picker
            mode="selector"
            :range="sourceType"
            :value="sourceTypeIndex"
            @change="sourceTypeChange"
          ></ac-picker>
        </ac-col>
      </ac-row>
      <ac-row height="40">
        <ac-col span="12">
          <ac-picker mode="selector" :range="camera" :value="cameraIndex" @change="cameraChange"></ac-picker>
        </ac-col>
      </ac-row>
      <ac-row height="40">
        <ac-col span="12">
          <ac-picker
            mode="selector"
            :range="duration"
            :value="durationIndex"
            @change="durationChange"
          ></ac-picker>
        </ac-col>
      </ac-row>
      <ac-view>
        <ac-video
          ac:if="reload"
          :initial-time="0"
          :page-gesture="true"
          :enable-progress-gesture="false"
          id="myVideo"
          style="width:100%"
          :src="src"
          controls
          @waiting="bindwaiting"
          @error="binderror"
          @fullscreenchange="bindfullscreenchange"
        ></ac-video>
      </ac-view>
      <ac-button type="primary" @tap="chooseVideo">选择视频</ac-button>
      <ac-button type="primary" @tap="saveVideoToPhotosAlbum">saveVideoToPhotosAlbum</ac-button>
    </ac-view>
  </ac-layout>
</template>

<script>
var sourceType = [["camera"], ["album"], ["camera", "album"]];
var camera = [["front"], ["back"], ["front", "back"]];
var duration = Array.apply(null, { length: 60 }).map(function(n, i) {
  return i + 1;
});
function getRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? "0" + color : color;
    rgb.push(color);
  }
  return "#" + rgb.join("");
}
export default {
  data() {
    return {
      sourceTypeIndex: 2,
      sourceType: ["拍摄", "相册", "拍摄或相册"],
      cameraIndex: 2,
      camera: ["前置", "后置", "前置或后置"],
      reload: true,
      danmuList: [
        {
          text: "第 1s 出现的弹幕",
          color: "#ff0000",
          time: 1
        },
        {
          text: "第 3s 出现的弹幕",
          color: "#ff00ff",
          time: 3
        }
      ],
      durationIndex: 14,
      duration: duration.map(function(t) {
        return t + "秒";
      }),
      src: "https://engineersong.github.io/musicList/3g2win.mp4"
    };
  },
  methods: {
    binderror(e) {},
    bindplay(e) {},
    bindpause(e) {},
    bindended(e) {},
    bindtimeupdate(e) {},
    bindfullscreenchange(e) {
      console.log(e);
    },
    bindwaiting() {
      console.log("bindwaiting缓冲");
    },
    sourceTypeChange: function(value) {
      console.log(value);
      this.sourceTypeIndex = value;
    },
    cameraChange: function(value) {
      console.log(value);
      this.cameraIndex = value;
    },
    durationChange: function(value) {
      console.log(value);
      this.durationIndex = value;
    },
    chooseVideo: function() {
      var that = this;
      appcan.chooseVideo({
        sourceType: that.sourceType[that.sourceTypeIndex],
        camera: that.camera[that.cameraIndex],
        maxDuration: that.durationIndex + 1,
        success: res => {
          this.reload = false;
          this.src = "";
          this.$nextTick(() => {
            this.src =  res.tempFilePath;
            this.$nextTick(() => {
              this.reload = true;
            })
          });
        }
      });
    },
    saveVideoToPhotosAlbum: function() {
      appcan.saveVideoToPhotosAlbum({
        filePath: "https://engineersong.github.io/musicList/3g2win.mp4",
        success(res) {
          alert(JSON.stringify(res));
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
</style>
