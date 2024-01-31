<template>
  <div class="app-container">
    <button @click="test">我是登录页面</button>
    <button @click="replace">replace</button>
    <div>{{a}}----{{b}}</div>
  </div>

  <div>12121212212</div>

  <div v-for="(v, i) in GET_VIEWS_DICLIST['com.test.api']" :key="i">
    {{$filters.getLabelName(v.code, GET_VIEWS_DICLIST['com.test.api'])}} ---
    {{v.code}} ---
    {{v.name}}
  </div>


  <input type="text" placeholder="111">
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
      testIndex: 'testIndex'
    }
  },
  mounted() {
    console.log(window.next);
    if (window.next) {
      window.next();
    }
  },
  methods: {
    replace(){
      this.$router.replace({

      })
    },
    callback(){
      console.log('我是callback');
      console.log(this);
    },
    test(){
      this.a ++;
      this.b ++;

      window.callback = this.callback;
      this.$router.push('/next');
    }
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
  .app-container{
    font-size: 16px;
  }
</style>
