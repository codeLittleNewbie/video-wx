<template>
  <div class="video-container">
    <video id="video" src=""></video>
    <div style="position: absolute;left: 0;top: 0;background: white;">我是选项</div>
  </div>
</template>

<script>

export default {
  dicts: ['com.test.api', 'api'],
  setup(){
    const a = 3;
    return {
      a
    }
  },
  name: "index",
  data(){
    return {
      b: 4,
    }
  },
  mounted() {
    if (window.next) {
      window.next();
    }
  },
  methods: {
    callback(){
      console.log('我是callback');
      console.log(this);
    },
  },
  unmounted() {
    console.log('unmounted');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  beforeRouteLeave(){
    console.log('beforeRouteLeave');
  },
  beforeRouteUpdate(){
    console.log('beforeRouteUpdate');
  },
  beforeRouteEnter(){
    console.log('beforeRouteEnter');
  },
}
</script>

<style scoped lang="scss">
.video-container {
  position: relative;
}

#video{
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
  #video{
    width: 100vh;
    height: 100vw;
  }
}

</style>
