import vue from '@vitejs/plugin-vue';
import App from './App';
//1.想用axios时，要先导入
import axios from 'axios';
import * as url from 'url';

new vue({
  el: '#app',
  render: (h) => h(App),
});

//
// //创建axios实例
// const instance1 = axios({
//   baseURL: '123.207.32.32:8000',
//   timeout: '100000',
// });
// instance1({
//   url: '/home/multidata',
// });
