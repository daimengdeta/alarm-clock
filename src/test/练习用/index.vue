<template>
  <link href="https://cdn.bootcdn.net/ajax/libs/mvp.css/1.8.0/mvp.min.css" rel="stylesheet" />
  <h1>列表练习</h1>
  <div class="app">
    <el-form v-model="formInline">
      <el-form-item label="请输入数字"><el-input-number v-model="formInline.number"> </el-input-number></el-form-item>
      <div class="">数组{{ arr }}</div>
      <div class="">求和：{{ sums }}</div>
      <el-button @click="add">提交</el-button>
      <el-button @click="summation()">相加</el-button>
    </el-form>
  </div>
</template>

<script>
import Child from './components/child.vue';
import { ElMessage } from 'element-plus';
export default {
  components: {
    Child,
  },
  data() {
    return {
      formInline: { number: '' },
      arr: [],
      sums: 0,
    };
  },
  methods: {
    add() {
      if (this.formInline.number === '' || this.formInline.number === null) {
        ElMessage.error('请输入数字');
      } else {
        this.arr.push(this.formInline.number);
        ElMessage.success('haha');
      }
    },
    summation() {
      this.sums = 0;
      for (let i = 0; i < this.arr.length; i++) {
        this.sums += this.arr[i];
      }
      console.log(this.sums, '===========打印的 ------ sum');
      ElMessage.success(this.sums);
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
