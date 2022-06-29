<template>
  <div class="">{{ data }}</div>
</template>

<script>
import axios from 'axios';
//axios的缩写功能
//axios.defaults这个属性是默认的意思。可通过全局属性来缩写网址，等，用时，直接带人
axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.timeout = 5000; //超时5秒

export default {
  name: 'index',
  data() {
    return {
      data: '',
    };
  },
  methods: {
    getdata1() {
      axios
        .get('/test', {
          params: {
            type: 'pop',
            page: 1, //第几页
          },
        })
        .then((res) => {
          console.log(res.data, '===========打印的 ------ get');
        });
    },
    getdata2() {
      axios
        .get('/xlz', {
          params: {
            type: 'pop',
            page: 12312321,
          },
        })
        .then((res) => {
          console.log(res.data.data, '===========打印的 ------ ');
        });
    },
    getData() {
      axios
        .post('/postTest', {
          name: 1,
        })
        .then((res) => {
          console.log(res.data, '===========打印的 ------ post');
          //data里面的值才是返回的数据
        });
    },
  },
  mounted() {
    this.getData();
    this.getdata1();
    this.getdata2();
  },
};
</script>

<style scoped></style>
