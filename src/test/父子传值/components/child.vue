<template>
  <div class="child">
    <h3 class="">我是子组件, 下面时我接收父组件传来的msg</h3>
    <h2>{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  props: ['name', 'age'],
  data() {
    return {
    }
  },
}
</script>

<style lang="less">
.child {
  color: #42b983;
  border: 2px solid #42b983;
  margin: 20px;

}
</style>
