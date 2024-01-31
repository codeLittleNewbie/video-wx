<template>
  <div>
    next page

    <button @click="onBack">back</button>
  </div>
</template>

<script>
export default {
  name: "next",
  data(){
    return {
      ax: 'next page'
    }
  },
  mounted() {
    // console.log(this.$root);
    // console.log(this.$parent);

    // console.log(window.callback);
    // window.callback();
    // window.next = this.next;
  },
  methods: {
    onBack(){
      // this.$router.go(-1);
      history.back();
    },
    next(){
      console.log('next');
      console.log(this);
      console.log(this.next);
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

<style scoped>

</style>
