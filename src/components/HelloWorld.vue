<script>
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
    // 选项列表，children 代表子选项，支持多级嵌套
    const options = [
      {
        text: '浙江省',
        value: '330000',
        children: [{ text: '杭州市', value: '330100' }],
      },
      {
        text: '江苏省',
        value: '320000',
        children: [{ text: '南京市', value: '320100' }],
      },
    ];
    // 全部选项选择完毕后，会触发 finish 事件
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    console.log(import.meta.env.VITE_APP_TITLE);
    console.log(import.meta.env);

    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
</script>

<template>
  <input type="text" placeholder="111">
  <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="地区"
      placeholder="请选择所在地区"
      @click="show = true"
  />
  <van-popup v-model:show="show" round position="bottom">
    <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
    />
  </van-popup>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
