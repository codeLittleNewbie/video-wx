<template>
  <div class="video-container">
    <video id="video" src=""></video>

    <div class="center-opera">
      <div>毛泽东三次到才溪分别是哪一年？</div>
      <van-radio-group v-model="checked" class="mt-10">
        <van-radio name="1" class="mt-10">单选框 1</van-radio>
        <van-radio name="2" class="mt-10">单选框 2</van-radio>
        <van-radio name="3" class="mt-10">单选框 3</van-radio>
      </van-radio-group>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      checked: '',
    }
  },
  mounted() {

  },
  methods: {
    // 视频监听
    onVideoChange() {

    },
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

.center-opera{
  position: fixed;
  font-weight: bold;
  border: none;
  cursor: pointer;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  font-size: 5vw;
  background: lightgoldenrodyellow;
  border-radius: 8px;
  padding: 10px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
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

  .center-opera {
    position: absolute;
    top: 50vw;
    left: 50vh;
    transform: translate(-50%, -50%);
  }
}

</style>
