import { createApp } from 'vue';
import App from './App.vue';
// 4.导入router对象，把router运用起来
import router from './router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './tailwind.css';
//1.2通过.use安装插件
createApp(App).use(router).use(ElementPlus).mount('#app');
