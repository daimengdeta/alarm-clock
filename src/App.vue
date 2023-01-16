<template>
  <div class="header-nav">
    <div class="nav-item" :class="isActive(item)" v-for="item in comps" :key="item" @click="navTo(item)">
      {{ item }}
    </div>
  </div>
  <!--  <router-link>-->
  <!--  <router-view></router-view> 根据当前的路径，动态渲染出不同的组件-->
  <!--  <component :is="curComp" />-->
  <router-view />
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
////配置路由相关信息，导入**

//3.export 传出
export default {
  //2.创建对象
  components: {},
  data() {
    return {
      //   //配置路由和组件直接的应用关系
      comps: [
        '父子传值',
        '列表练习',
        '子传父练习',
        '列表点击变红',
        '父传子结合双向绑定',
        '父访问子',
        '工单',
        '增删改查',
        '学生系统',
        'Axios',
        // 'el,plus转换成vue',
        '小闹钟',
        '小闹钟2',
        // 'JS练习',
        '待办事项',
        '模板2',
        '练习用',
        '年收入支出明细',
      ],
      curComp: '',
    };
  },
  methods: {
    navTo(item) {
      this.curComp = item;
      this.$router.push(encodeURIComponent(item));
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
