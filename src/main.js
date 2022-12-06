import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock/index'
import './assets/fonts/index.css' //引用全局字体
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'//引入axios

import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.component("mavon-editor", mavonEditor);

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(axios);//应用axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')