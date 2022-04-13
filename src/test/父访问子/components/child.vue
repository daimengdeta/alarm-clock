<template>
  <div class="">
    <h1>{{ msg }}</h1>
    我是子组件，哈哈哈
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {
      count: 0,
    };
  },
  methods: {},
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
