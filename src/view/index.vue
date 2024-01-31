<template>
  <div>
    搞什么飞机??
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

</style>
