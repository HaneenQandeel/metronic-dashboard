import Vue from 'vue'
import router from './router'
import './plugins'
import './components'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,

  beforeCreate() {

  },

  created() {

  }
  // render: h => h(App),
})

