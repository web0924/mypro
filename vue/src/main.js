import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import Nav from "./components/nav.vue"
import Footer from "./components/footer.vue"
import Side from "./components/side.vue"
import 'element-ui/lib/theme-chalk/display.css'
import axios from 'axios'
//1.6:配置请求时保存session信息 
axios.defaults.withCredentials=true
//1.7:配置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
Vue.prototype.axios = axios;
// 引入wow.js
import 'animate.css'
// 百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'rpAnvdaYwVVkphdtiXhUGijGqmiazo8l'
})
Vue.component("side1",Side);
Vue.component("footer1",Footer);
Vue.component("nav1",Nav);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
