<template>
  <div class="video-container">
    <video
        ref="video"
        @play="onPlay"
        @pause="onPause"
        @ended="onEnded"
        @timeupdate="onTimeUpdate"
        @click="playBtnClick"
        id="video" src="@/assets/video/2.mp4"></video>

    <div class="center-opera"
         @click="playBtnClick"
         v-if="showPlayBtn">
      <img src="@/assets/image/play.jpg" alt="">
    </div>

    <template v-for="(v, i) in interactionList">
      <!--单选弹窗-->
      <radio
          @ok="v.callback"
          :title="v.radioTitle"
          :list="v.radioList"
          v-if="v.type==='radio' && v.type===showToast"></radio>
      <!--滑块弹窗-->
      <slide @ok="v.callback" v-if="v.type==='slide' && v.type===showToast"></slide>
    </template>
  </div>
</template>

<script>
import Slide from "@/view/home/components/slide.vue";
import Radio from "@/view/home/components/radio.vue";

export default {
  components: {Radio, Slide},
  data() {
    return {
      // 视频状态
      videoStatus: 'pause',
      // 是否展示播放按钮
      showPlayBtn: true,
      // 展示特定弹窗
      showToast: '',


      /**
       * 互动列表
       * @author lwq
       * @time 2024-02-02
       * @param type String 弹窗类型
       * @param showTime Number 展示弹窗时间 单位s
       * @param radioTitle String 单选标题
       * @param radioList Array 单选选项数组
       * @return callback Function 确认回调函数
       */
      interactionList: [
        {
          type: 'radio',
          showTime: 3,
          radioTitle: '毛泽东三次到才溪分别是哪一年？',
          radioList: [
            {label: '1930', value: '1930'},
            {label: '1940', value: '1940'},
            {label: '1950', value: '1950'}
          ],
          callback: () => this.setPlayTime(4)
        },
        {
          type: 'slide',
          showTime: 10,
          callback: () => this.setPlayTime(11)
        },
      ],
    }
  },
  mounted() {

  },
  methods: {
    // 视频开始
    onPlay() {
      this.videoStatus = 'play';
    },
    // 视频暂停
    onPause() {
      this.videoStatus = 'pause'
    },
    // 视频结束
    onEnded() {
      this.videoStatus = 'ended'
    },
    // 视频播放过程
    onTimeUpdate() {
      let currentTime = this.$refs.video.currentTime

      const tolerance = 0.5; // 容差范围，单位为秒

      // 弹窗
      this.interactionList.forEach(v => {
        if (Math.abs(currentTime - v.showTime) < tolerance) {
          console.log(`视频当前时间接近 ${v.showTime} 秒`);
          this.$refs.video.pause();
          this.showToast = v.type;
        }
      })
    },
    // 播放按钮点击事件
    playBtnClick() {
      this.showPlayBtn = !this.showPlayBtn;
      let isPaused = this.$refs.video.paused
      if (isPaused) {
        this.$refs.video.play();
      } else this.$refs.video.pause();
    },
    // 设置播放位置
    setPlayTime(time) {
      this.showToast = false;
      this.$refs.video.currentTime = time;
      this.$refs.video.play();
    }
  },
}
</script>

<style scoped lang="scss">
.video-container {
  position: relative;
}

#video {
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 998;
}

@media (max-width: 768px) and (orientation: portrait) {
  .video-container {
    transform: rotate(90deg) translateY(-100vw);
    transform-origin: left top;
    width: 100vh;
    height: 100vw;
  }
  #video {
    width: 100vh;
    height: 100vw;
  }
}

::v-deep {
  .center-opera {
    position: fixed;
    font-weight: bold;
    border: none;
    cursor: pointer;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    font-size: 5vw;
  }

  @media (max-width: 768px) and (orientation: portrait) {
    .center-opera {
      position: absolute;
      top: 50vw;
      left: 50vh;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
