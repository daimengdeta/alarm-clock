<template>
  <h1>{{ msg }}</h1>
  <div class="child1">
    <div class="">子1：{{ num1 }}</div>
    <input type="text" :value="num1" @input="number1" />
    <div class="">子2：{{ num2 }}</div>
    <input type="text" :value="num2" @input="number2" />
    <div class="">obj子：{{ obj?.num }}</div>
    <input type="text" v-model="obj.num" />
    <div class="">array子：{{ array?.[0] }}</div>
    <input type="text" v-model="array[0]" />
  </div>
</template>

<script>
export default {
  props: ['msg', 'num1', 'num2', 'obj', 'array'],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    number1(evt) {
      const value = evt.target.value;
      this.$emit('xlz', value);
    },
    number2(evt) {
      console.log(evt, '===========打印的 ------ number2');
      const value = evt.target.value;
      console.log(value, '===========打印的 ------ number2');
      this.$emit('xlz2', value);
      // console.log(num2, '===========打印的 ------ number1')
      // this.$emit('xlz2', this.num2);
    },
  },
};
</script>

<style scoped>
.child1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
