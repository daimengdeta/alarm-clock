<template>
  <h1>父传子结合双向绑定</h1>
  <div class="main">
    <div class="">
      <div class="">父1：{{ num1 }}</div>
      <div class="">父2：{{ num2 }}</div>
      <div class="">父obj：{{ obj.num }}</div>
      <div class="">父array：{{ array[0] }}</div>
    </div>
    <child :num1="num1" :num2="num2" :obj="obj" :array="array" @xlz="xlz" @xlz2="xlz2"></child>
  </div>

  <div class="requirement"></div>
  <div class="">
    要求：<br />1.父组件传给子组件， <br />2.子组件输入内容可以改变子组件的值和父组件的值 <br />3.子组件是父组件的100被
  </div>
</template>

<script>
import Child from './components/child.vue';
export default {
  components: {
    Child,
  },
  data() {
    return {
      num1: 1,
      num2: 1,
      obj: {
        num: 100,
      },
      array: [999],
    };
  },
  methods: {
    xlz(val) {
      this.num1 = val;
    },
    xlz2(val) {
      this.num2 = val;
      console.log(val, '===========打印的 ------ val');
    },
  },
};
</script>

<style lang="less" scoped>
a {
  color: #42b983;
}
.requirement {
  border-top: red solid 1px;
}
.main {
  display: flex;
  width: 60%;
  margin: auto;
  justify-content: space-between;
}
</style>
