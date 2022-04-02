<template>
  <div class="child">
    <h3 class="">我是子组件, 下面时我接收父组件传来的msg</h3>
    <h2>{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <div class="">
      <div class="" v-for="item in aihao">{{item}}</div>
    </div>
 <div class=""> 来自父组件的count:  {{count}}</div>
    <button @click="add">+</button>

  </div>
</template>

<script>
export default {
  props: ['name', 'age', 'aihao', 'count'],
  data() {
    return {
    }
  },
  methods:{
    add(){
      this.$emit('add', 2)
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
