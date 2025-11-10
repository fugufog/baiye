<template>
    <ac-layout>
        <ac-view class="container">
            <ac-view class="page-body">
                <ac-view class="page-section">
                    <div ac:if="recording === false && playing === false && hasRecord === false">
                        <ac-view class="page-body-time">
                            <ac-text class="time-big">{{ formatedRecordTime }}</ac-text>
                        </ac-view>
                        <ac-view class="page-body-buttons">
                            <ac-view class="page-body-button"></ac-view>
                            <ac-view class="page-body-button" @tap="startRecord">
                                <ac-image src="./static/record.png"></ac-image>
                            </ac-view>
                            <ac-view class="page-body-button"></ac-view>
                        </ac-view>
                    </div>

                    <div ac:if="recording === true">
                        <ac-view class="page-body-time">
                            <ac-text class="time-big">{{ formatedRecordTime }}</ac-text>
                        </ac-view>
                        <ac-view class="page-body-buttons">
                            <ac-view class="page-body-button"></ac-view>
                            <ac-view class="page-body-button" @tap="stopRecordUnexpectedly">
                                <ac-view class="button-stop-record"></ac-view>
                            </ac-view>
                            <ac-view class="page-body-button"></ac-view>
                        </ac-view>
                    </div>

                    <div ac:if="hasRecord === true && playing === false">
                        <ac-view class="page-body-time">
                            <ac-text class="time-big">{{ formatedPlayTime }}</ac-text>
                            <ac-text class="time-small">{{ formatedRecordTime }}</ac-text>
                        </ac-view>
                        <ac-view class="page-body-buttons">
                            <ac-view class="page-body-button"></ac-view>
                            <ac-view class="page-body-button" @tap="playVoice">
                                <ac-image src="./static/play.png"></ac-image>
                            </ac-view>
                            <ac-view class="page-body-button" @tap="clear">
                                <ac-image src="./static/trash.png"></ac-image>
                            </ac-view>
                        </ac-view>
                    </div>

                    <div ac:if="hasRecord === true && playing === true">
                        <ac-view class="page-body-time">
                            <ac-text class="time-big">{{ formatedPlayTime }}</ac-text>
                            <ac-text class="time-small">{{ formatedRecordTime }}</ac-text>
                        </ac-view>
                        <ac-view class="page-body-buttons">
                            <ac-view class="page-body-button" @tap="stopVoice">
                                <ac-image src="./static/stop.png"></ac-image>
                            </ac-view>
                            <ac-view class="page-body-button" @tap="clear">
                                <ac-image src="./static/trash.png"></ac-image>

                            </ac-view>
                        </ac-view>
                    </div>
                </ac-view>
            </ac-view>
        </ac-view>
    </ac-layout>

</template>

<script>
var util = require('../utils/util')
export default {
  config: {
    navigationBarTitleText: '录音'
  },
  data() {
    return {
      recording: false,
      playing: false,
      hasRecord: false,
      recordTime: 0,
      playTime: 0,
      // formatedRecordTime: '00:00:00',
      formatedPlayTime: '00:00:00',
      tempFilePath: '',
      recordTimeInterval: null,
      playTimeInterval: null
    }
  },
  computed:{
    formatedRecordTime(){
      return util.formatTime(this.recordTime)
    }
  },
  methods: {
    onHide() {
      if (this.playing) {
        this.stopVoice()
      } else if (this.recording) {
        this.stopRecordUnexpectedly()
      }
    },
    startRecord() {
      this.recording = true
      var that = this
      this.recordTime = 0
      this.recordTimeInterval = setInterval(() => {
        var recordTime = (that.recordTime += 1)
        // this.formatedRecordTime = util.formatTime(that.recordTime)
        this.recordTime = recordTime
      }, 1000)
      appcan.startRecord({
        success: res => {
          alert(JSON.stringify(res))
          this.hasRecord = true
          this.tempFilePath = res.tempFilePath
          this.formatedPlayTime = util.formatTime(that.playTime)
          this.recording = false
          window.clearInterval(this.recordTimeInterval)
          this.recordTimeInterval = null
        }
      })
    },
    stopRecordUnexpectedly() {
      var that = this
      appcan.stopRecord({
        success: () => {
          alert('stop record success')
          window.clearInterval(that.recordTimeInterval)
          that.recordTimeInterval = null
          that.recording = false
        }
      })
    },
    playVoice() {
      var that = this
      this.playTimeInterval = setInterval(() => {
        var playTime = that.playTime + 1
        that.playing = true
        that.formatedPlayTime = util.formatTime(playTime)
        that.playTime = playTime
      }, 1000)
      appcan.playVoice({
        filePath: this.tempFilePath,
        success: () => {
          window.clearInterval(this.playTimeInterval)
          this.playTimeInterval = null
          var playTime = 0
          alert('play voice finished')
          this.playing = false
          this.formatedPlayTime = util.formatTime(playTime)
          this.playTime = playTime
        }
      })
    },
    pauseVoice() {
      window.clearInterval(this.playTimeInterval)
      this.playTimeInterval = null
      appcan.pauseVoice()
      this.playing = false
    },
    stopVoice() {
      window.clearInterval(this.playTimeInterval)
      this.playTimeInterval = null
      this.playing = false
      this.formatedPlayTime = util.formatTime(0)
      this.playTime = 0
      appcan.stopVoice()
    },
    clear() {
      window.clearInterval(this.playTimeInterval)
      this.playTimeInterval = null
      appcan.stopVoice()
      this.playing = false
      this.hasRecord = false
      this.tempFilePath = ''
      // this.formatedRecordTime = util.formatTime(0)
      this.recordTime = 0
      this.playTime = 0
    }
  }
}
</script>

<style scoped lang="less">
.page-body-wrapper {
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 300/20rem;
}

.page-body-time {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time-big {
  font-size: 30px;
  margin: 1rem;
}

.time-small {
  font-size: 1.5rem;
}

.page-body-buttons {
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
}

.button-stop-record {
  width: 5.5rem;
  height: 110/20rem;
  border: 20/20rem solid #fff;
  background-color: #f55c23;
  border-radius: 130/20rem;
  margin: 0 auto;
}
</style>
