<template>
  <h1>练习模板页面2</h1>
  <Child :name="name" :eag="eag" :aihao="aihao" @aaa="cpnclick"></Child>
</template>

<script>
import Child from "./components/child.vue";
export default {
  components: {
    Child
  },
  data() {
    return {
      msg:'xxx',
      count: 0,
      name:'xlz',
      eag:18,
      aihao:['吃','喝','羽毛球','乒乓球']
    }
  },
  methods:{
    cpnclick(item){
      console.log('cpnclick',item)
    },
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
