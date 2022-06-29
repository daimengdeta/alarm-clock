<template>
  <div class="parent">
    <h3>我是父组件的count属性：{{ text }}我现在是： {{ count }}</h3>
    <button @click="selfAdd">父组件自己的新增按钮</button>
    <child :name="name" :count="count" :age="age" :aihao="aihao" @click="click" @add="sssssssssssss" />
  </div>
</template>

<script>
import Child from './components/child.vue';
export default {
  name: '父子传值',
  components: {
    Child,
  },
  data() {
    return {
      count: 0,
      name: 'xlz',
      age: '18',
      aihao: ['睡觉', '喝', '吃', '乒乓球'],

      isSelf: false,
      hasChange: false,
    };
  },
  computed: {
    text() {
      if (this.hasChange) {
        if (this.isSelf) {
          return '来自自己的修改,';
        }
        return '来自子组件的修改,';
      }
      return '';
    },
  },
  methods: {
    click(data) {
      console.log(data);
    },
    sssssssssssss(num) {
      this.count += num;
      this.isSelf = false;
      this.hasChange = true;
    },
    selfAdd() {
      this.count += 1;
      this.isSelf = true;
      this.hasChange = true;
    },
  },
};
</script>

<style lang="less">
.parent {
  border: 2px solid #ff001c;
}
</style>
