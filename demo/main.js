// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

const VueModal = process.env.NODE_ENV === 'development'
  ? require('../src/vue-modal.js')
  : require('../dist/vue-modal.js')

Vue.config.productionTip = false

// Using plugin
Vue.use(VueModal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
