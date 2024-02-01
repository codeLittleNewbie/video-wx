<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    onRadioClick() {
      this.$emit('ok')
    }
  }
}
</script>

<template>
  <div class="center-opera">
    <div class="radio-title">毛泽东三次到才溪分别是哪一年？</div>
    <div class="radio-section mt-20">
      <div class="radio-section-item" @click="onRadioClick">1930</div>
      <div class="radio-section-item" @click="onRadioClick">1940</div>
      <div class="radio-section-item" @click="onRadioClick">1950</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.center-opera {
  background: ghostwhite;
  padding: 20px;

  .radio-title {
    text-align: center;
    font-size: 22px;
  }

  .radio-section {
    display: flex;
    justify-content: space-around;

    &-item {
      margin: 0 10px;
      font-size: 30px;
    }
  }
}
</style>
