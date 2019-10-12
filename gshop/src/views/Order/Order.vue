<template>
  <div>
    <Header title="订单列表"/>
    <div class="order_img">
      <img src="./img/person.png" alt="">
    </div>
    <p class="login_show">登入后查看外卖订单</p>
    <div class="login_enter">
       <span>立即登入</span>
    </div>
  </div>
</template>

<script>
import Header from 'components/Header/Header'
export default {
 components:{
   Header
 }
}

</script>


<style lang='stylus' rel='stylesheet/stylus'>
.order_img
  text-align center
.login_show
  text-align center
  font-size .426667rem
  color #cccccc  
.login_enter
  text-align center
  >span 
    display inline-block
    background #009475
    color #fff
    font-size .426667rem
    padding .266667rem
    border-radius .053333rem  
</style>