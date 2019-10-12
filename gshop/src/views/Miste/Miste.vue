<template>
  <div>
   <Header :title="address.address">
     <router-link to="/search" class="left iconfont icon-search" slot="left" tag="span"></router-link>
     <router-link :to="userInfo._id ?'/profile':'/login'" class="right" slot="right">
       <span v-if="!userInfo._id">登入/注册</span>
       <span v-else>
        <i class="iconfont icon-huiyuan1"></i>
       </span>
     </router-link>
   </Header>
   <Banner></Banner>
   <Shoplist/>
    
  </div>
</template>

<script>
import Header from 'components/Header/Header'
import Banner from 'components/Banner/Banner'
import Shoplist from 'components/Shoplist/Shoplist'
import {mapActions,mapState} from 'vuex'
export default {
components:{
  Header,
  Banner,
  Shoplist
},
mounted () {
  this.$store.dispatch('getAddress')
  
},
methods: {



},

computed: {
  ...mapState(['address','userInfo'])
}
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>

</style>