// 1.1引入
import { createRouter, createWebHashHistory } from 'vue-router';
import 父子传值 from '../test/父子传值/index.vue';
import 列表练习 from '../test/列表练习/index.vue';
import 子传父练习 from '../test/子传父练习/index.vue';
import 列表点击变红 from '../test/列表点击变红/index.vue';
import 父传子结合双向绑定 from '../test/父传子结合双向绑定/index.vue';
import 父访问子 from '../test/父访问子/index.vue';
import 工单 from '../test/工单/index.vue';
import 增删改查 from '../test/真实开发-增删改查/index.vue';
import 学生系统 from '../test/学生系统/index.vue';
import Axios from '../test/Axios/index.vue';
import 年收入支出明细 from '../test/年收入支出明细/index.vue';
// import elplus转换成vue from '../test/el,plus转换成vue/index.vue';
import 小闹钟 from '../test/小闹钟/index.vue';
import 小闹钟2 from '../test/小闹钟2/index.vue';
import 待办事项 from '../test/待办事项/index.vue';
import 模板2 from '../test/模板2/index.vue';
import 练习用 from '../test/练习用/index.vue';
import 获取天气 from '../test/获取天气/index.vue';
import VIP会员 from '../test/VIP会员/index.vue';

// import JS练习 from '../test/JS练习/index.vue';
// 2.创建Router对象

const routes = createRouter({
  //routes配置路由和组件直接的映射关系
  routes: [
    {
      name: '父子传值',
      path: '/' + encodeURIComponent('父子传值'),
      component: 父子传值,
    },
    {
      name: '列表练习',
      path: '/' + encodeURIComponent('列表练习'),
      component: 列表练习,
    },
    {
      name: '学生系统',
      path: '/' + encodeURIComponent('学生系统'),
      component: 学生系统,
    },
    {
      name: '子传父练习',
      path: '/' + encodeURIComponent('子传父练习'),
      component: 子传父练习,
    },
    {
      name: '列表点击变红',
      path: '/' + encodeURIComponent('列表点击变红'),
      component: 列表点击变红,
    },
    {
      name: '父传子结合双向绑定',
      path: '/' + encodeURIComponent('父传子结合双向绑定'),
      component: 父传子结合双向绑定,
    },
    {
      name: '父访问子',
      path: '/' + encodeURIComponent('父访问子'),
      component: 父访问子,
    },
    {
      name: '工单',
      path: '/' + encodeURIComponent('工单'),
      component: 工单,
    },
    {
      name: '增删改查',
      path: '/' + encodeURIComponent('增删改查'),
      component: 增删改查,
    },
    {
      name: 'Axios',
      path: '/Axios',
      component: Axios,
    },
    // {
    //   name: 'el,plus转换成vue',
    //   path: '/' + encodeURIComponent('el,plus转换成vue'),
    //   component: elplus转换成vue,
    // },
    {
      name: '小闹钟',
      path: '/' + encodeURIComponent('小闹钟'),
      component: 小闹钟,
    },
    {
      name: '小闹钟2',
      path: '/' + encodeURIComponent('小闹钟2'),
      component: 小闹钟2,
    },
    {
      name: '待办事项',
      path: '/' + encodeURIComponent('待办事项'),
      component: 待办事项,
    },
    {
      name: '模板2',
      path: '/' + encodeURIComponent('模板2'),
      component: 模板2,
    },
    {
      name: '练习用',
      path: '/' + encodeURIComponent('练习用'),
      component: 练习用,
    },
    {
      name: '年收入支出明细',
      path: '/' + encodeURIComponent('年收入支出明细'),
      component: 年收入支出明细,
    },
    {
      name: '获取天气',
      path: '/' + encodeURIComponent('获取天气'),
      component: 获取天气,
    },
    {
      name: 'VIP会员',
      path: '/' + encodeURIComponent('VIP会员'),
      component: VIP会员,
    },
    // {
    //   name: 'JS练习',
    //   path: '/JS练习',
    //   component: JS练习,
    // 年收入支出明细
    // },
  ],
  history: createWebHashHistory(),
});
//3.将routes对象传入vue实例中
export default routes;
