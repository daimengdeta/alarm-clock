<template>
  <h1>{{ msg }}{{name}}</h1>
  <h3>{{eag}}</h3>
  <h4 v-for="(item,index) in aihao">{{index+1}}.{{item}}</h4>
  <button v-for="item in categories " @click="butclick(item)">{{ item.names }}</button>
</template>

<script>
export default {
  props: ['msg','name','eag','aihao'],
  data() {
    return {
      count: 0,
      categories:[
        {id:'a', names:'热门推荐'},
        {id:'b', names:'手机数码'},
        {id:'c', names:'家用水电'},
        {id:'d', names:'电脑办公'}

      ]
    }
  },
  methods:{
    butclick(item){
      this.$emit('aaa',item)
      console.log('itemClick', '===========打印的 ------ butclick');
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
