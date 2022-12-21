import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock/index'
import './assets/fonts/index.css' //引用全局字体
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'//引入axios

// import 'default-passive-events' //加入这个是为了不报错

// import { mavonEditor } from "mavon-editor";
// import "mavon-editor/dist/css/index.css";
// Vue.component("mavon-editor", mavonEditor);


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.axios = axios//应用axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
