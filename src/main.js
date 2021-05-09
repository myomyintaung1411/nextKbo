import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import md5 from "js-md5"
import global_ from "./api/global"
import axios from "axios"
import VueAxios from "vue-axios"
import Message from "./components/Message/index.js";
import MobileMessage from "./components/MobileMessage/index.js";
import "../src/assets/iconfonts/iconfont.css";
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.prototype.$Global = global_;
Vue.prototype.$md5 = md5
Vue.prototype.$message = Message;
Vue.prototype.$mobilemessage = MobileMessage

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
