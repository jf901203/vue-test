
// 入口js 创建vue实例

import Vue from 'vue'

// 引入组件
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 把组件映射成标签
  components: { App },
  // 使用标签
  template: '<App/>'
})
