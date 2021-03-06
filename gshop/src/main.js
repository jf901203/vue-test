// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'router'
import store from 'store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './mock/mockServer'
import VueLazyLoad from 'vue-lazyload'
Vue.use(MintUI)
Vue.use(VueLazyLoad,{
  loading:'./static/timg.gif'
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
}) 
