<template>
  <div class="header-nav">
    <div class="nav-item" :class="isActive(item)" v-for="item in comps" :key="item" @click="navTo(item)">
      {{ item }}
    </div>
  </div>
  <component :is="curComp" />
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import 父子传值 from './test/父子传值/index.vue';
import 列表练习 from './test/列表练习/index.vue';
import 子传父练习 from './test/子传父练习/index.vue';
import 列表点击变红 from './test/列表点击变红/index.vue';
import 父传子结合双向绑定 from './test/父传子结合双向绑定/index.vue';

export default {
  components: { 父子传值, 列表练习, 子传父练习, 列表点击变红, 父传子结合双向绑定 },
  data() {
    return {
      comps: ['父子传值', '列表练习', '子传父练习', '列表点击变红', '父传子结合双向绑定'],
      curComp: '',
    };
  },
  methods: {
    navTo(item) {
      this.curComp = item;
      location.hash = '/' + item;
      console.log(location);
    },
    isActive(item) {
      if (this.curComp === item) {
        return 'active';
      }
      return '';
    },
  },
  mounted() {
    const hash = location.hash;
    //去掉网址前面的#/
    if (hash) {
      const curComp = hash.substring(2);
      //点击哪个就保存哪个
      this.curComp = decodeURIComponent(curComp);

      console.log(decodeURIComponent(curComp), '===========打印的 ------ mounted');
    } else {
      //点击哪个就保存哪个
      this.curComp = this.comps[0];
    }
    console.log(hash);
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.header-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .nav-item {
    cursor: pointer;
    margin-left: 20px;
    &:hover {
      color: #73c9e5;
    }
  }
}
.active {
  color: #73c9e5;
}
</style>
