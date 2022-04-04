<template>
  <link href="https://cdn.bootcdn.net/ajax/libs/mvp.css/1.8.0/mvp.min.css" rel="stylesheet" />
  <h1>列表练习</h1>
  <table v-if="list.length">
    <thead>
      <tr>
        <th></th>
        <th>书籍名称</th>
        <th>出版日期</th>
        <th>价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in list">
        <th>{{ item.id }}</th>
        <th>{{ item.name }}</th>
        <th>{{ item.day }}</th>
        <th>￥{{ showprice(item) }}</th>
        <th>
          <button @click="add(item)">+</button>
          {{ item.count }}
          <button @click="sud(item)">-</button>
        </th>
        <th @click="remove(index)">移除</th>
      </tr>
    </tbody>
    <div>汇总：￥{{ money() }}</div>
  </table>
  <div v-else>购物车为空</div>
</template>

<script>
//要求，1.列表 2.金额保留小数点后2位
//3.加减，当减到1时，还按则提示不能再按
//4.删除当前条
//5.汇总金额
import Child from './components/child.vue';
export default {
  components: {
    Child,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: '《儿童读物》',
          day: '2020-2',
          price: 18.0,
          count: 1,
        },
        {
          id: 2,
          name: '《小红帽》',
          day: '2020-1',
          price: 30.0,
          count: 1,
        },
        {
          id: 3,
          name: '《大灰狼》',
          day: '2013-8',
          price: 39.0,
          count: 1,
        },
        {
          id: 4,
          name: '《海贼王》',
          day: '2019-4',
          price: 60.0,
          count: 1,
        },
        {
          id: 5,
          name: '《大耳朵图图》',
          day: '2015-3',
          price: 30.0,
          count: 1,
        },
        {
          id: 6,
          name: '《梅子熟了》',
          day: '2000',
          price: 16.0,
          count: 1,
        },
      ],
    };
  },
  methods: {
    //2.金额保留小数点后2位
    showprice(item) {
      return item.price.toFixed(2);
    },
    ////3.加减，当减到1时，还按则提示不能再按
    add(item) {
      item.count += 1;
    },
    sud(item) {
      if (item.count <= 1) {
        alert('此商品不可再减少');
      } else {
        item.count -= 1;
      }
    },
    //4.删除当前条

    remove(index) {
      this.list.splice(index, 1);
    },
    ///5.汇总金额
    money() {
      let sun = 0;
      for (let i = 0; i < this.list.length; i++) {
        sun += this.list[i].price * this.list[i].count;
      }
      console.log(sun, '===========打印的 ------ money');
      return sun;
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
button {
  padding: 1px 7px;
}
</style>
