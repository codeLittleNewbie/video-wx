<script>
export default {
  data() {
    return {
      // 滑块总宽度
      slideBoxW: 0,
      // 拖拽物宽度
      iconBoxW: 0,
      // 横竖屏状态
      pageX: 'pageX',
      // 上一次位置
      lastP: '',
      // 拖拽物左位移
      left: 10,
    }
  },
  methods: {
    // 拖拽开始
    onTouchStart({targetTouches}) {
      this.pageX = document.body.offsetWidth > 768 ? 'pageX' : 'pageY';
      this.iconBoxW = this.$refs.iconBox.offsetWidth;
      this.slideBoxW = this.$refs.slideBox.offsetWidth;

      this.lastP = targetTouches[0][this.pageX]
    },
    // 拖拽中
    onTouchMove({targetTouches}) {
      this.left += targetTouches[0][this.pageX] - this.lastP
      this.lastP = targetTouches[0][this.pageX]
      if (this.left <= 10) {
        this.left = 10;
      } else if (this.left > this.slideBoxW - this.iconBoxW - 10) {
        this.left = this.slideBoxW - this.iconBoxW - 10;
      }
    },
    // 拖拽结束
    onTouchEnd() {
      if (this.left <= this.slideBoxW / 2 - 10) {
        this.left = 10;
      } else {
        this.left = this.slideBoxW - this.iconBoxW - 10;
        this.$emit('ok');
      }
    }
  }
}
</script>

<template>
  <div class="center-opera">
    <div class="slide-body" ref="slideBox">
      <img class="slide-body-bg" src="@/assets/image/slide-bg.png" alt="">
      <img class="slide-body-icon"
           ref="iconBox"
           :style="{'left': `${left}px`}"
           @touchstart="onTouchStart"
           @touchmove="onTouchMove"
           @touchend="onTouchEnd"
           src="@/assets/image/slide-icon.png"
           alt="出发啦">
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide-body {
  position: relative;
  width: 366.36px;

  &-bg {
    width: 100%;
    height: 100%;
  }

  &-icon {
    width: calc(218px / 2.2);
    position: absolute;
    left: 0;
    top: 47%;
    transform: translateY(-50%);
  }
}
</style>
