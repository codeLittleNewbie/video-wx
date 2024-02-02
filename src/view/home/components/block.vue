<script>
export default {
  inject: ['realVideoArea'],
  props: {
    left: {
      type: Number,
      default: 0
    },
    right: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  mounted() {

  }
}
</script>

<template>
  <div class="center-opera1" :style="realVideoArea()">1111</div>
</template>

<style scoped lang="scss">
.center-opera1 {
  position: fixed;
  font-weight: bold;
  cursor: pointer;
  left: 0;
  top: 50vh;
  transform: translateY(-50%);
}

@media (max-width: 768px) and (orientation: portrait) {
  .center-opera1 {
    position: fixed;
    top: 50vw;
    left: 50vh;
    transform: translate(-50%, -50%);
  }
}
</style>
