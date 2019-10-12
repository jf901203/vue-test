// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*

vue中使用 es6的模块语法 引入import xxx from 'xxx'  暴露 export defalut 

node中使用 引入 require()   暴露module.exports  


*/



import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Field,Navbar, TabItem, TabContainer, TabContainerItem,Cell} from 'mint-ui'

// import router from './router'
Vue.component(Button.name, Button)
Vue.component(Field.name, Field)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(Cell.name, Cell)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
