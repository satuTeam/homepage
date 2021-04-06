import Vue from 'vue'
import router from './router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})