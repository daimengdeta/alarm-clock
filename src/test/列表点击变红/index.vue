<template>
  <h1>列表练习</h1>
  <!--
  要求点击变红：
  1.循环列表
  2.监听点击事件，并赋值保存
  3.用if改变class值，当有点击监听到值时，就进行赋值-->
  <button :class="isActive(item)" @click="abc(item)" v-for="item in books">{{ item.id }}.{{ item.name }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      butclass: '',
      books: [
        { id: 1, name: '大头儿子' },
        { id: 2, name: '小头爸爸' },
        { id: 3, name: '黑人' },
      ],
    };
  },
  methods: {
    abc(item) {
      this.butclass = item;
    },
    isActive(item) {
      if (item === this.butclass) {
        return 'red';
      }
      return;
    },
  },
};
</script>

<style scoped>
.red {
  color: #42b983;
}
button {
  margin-left: 10px;
}
</style>
