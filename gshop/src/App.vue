<template>
  <div id="app">
    <Footer v-show="$route.meta.requiresAuth"/>
    <router-view></router-view>
  </div>
</template>

<script>

import Footer from 'components/Footer/Footer'
import { mapActions } from 'vuex';
export default {
  mounted(){
  this.getUserInfo()
  },
  methods:{
    // 触发异步请求接口获取session中的用户信息
   ...mapActions(['getUserInfo'])
  },
  components:{
    Footer
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
  height 100%
  width 100%
  background #f5f5f5

</style>