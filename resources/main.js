import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router';


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(routes)

import { $, jQuery } from "jquery";
window.jQuery = jQuery;
window.$ = $;



new Vue({
  render: h => h(App),
}).$mount('#app')
