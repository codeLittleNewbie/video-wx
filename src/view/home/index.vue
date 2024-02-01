<template>
  <div class="video-container">
    <video
        ref="video"
        @play="onPlay"
        @pause="onPause"
        @ended="onEnded"
        @timeupdate="onTimeUpdate"
        @click="playBtnClick"
        id="video"
        src="@/assets/video/2.mp4"></video>

    <div class="center-opera"
         @click="playBtnClick"
         v-if="showPlayBtn">
      <img src="@/assets/image/play.jpg" alt="">
    </div>

    <!--单选弹窗-->
    <radio @ok="setPlayTime(11)" v-if="showToast===10"></radio>
    <!--滑块弹窗-->
    <slide @ok="setPlayTime(4)" v-if="showToast===3"></slide>
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
      // 互动列表
      interactionList: [
        {type: 'radio',},
      ],

      // 展示特定弹窗
      showToast: false
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

      // 3s 弹窗
      if (Math.abs(currentTime - 3) < tolerance) {
        // 在 currentTime 大约等于 3 秒时执行操作
        console.log('视频当前时间接近 3 秒');
        // 执行你的特定操作代码

        this.$refs.video.pause();
        this.showToast = 3;
      }
      // 10s 弹窗
      else if (Math.abs(currentTime - 10) < tolerance) {
        this.$refs.video.pause();
        this.showToast = 10;
      }
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
