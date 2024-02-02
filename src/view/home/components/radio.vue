<script>
export default {
  props: {
    title: {
      type: String,
      default: '毛泽东三次到才溪分别是哪一年？'
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
    <div class="radio-title">{{title}}</div>
    <div class="radio-section mt-20">
      <div class="radio-section-item"
           v-for="(v, i) in list"
           :key="v.value"
           @click="onRadioClick(v.value)">{{ v.label }}</div>
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
