<template>
  <div class="cartcontrol">
    <transition name="fade">
      <div class="iconfont icon-jianhao2" v-if="food.count" @click.stop="handleAdd(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-jiahao7" @click.stop="handleAdd(true)"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
  return {

  }
},

props:['food'],
methods: {
  handleAdd(isAdd){
   this.$store.dispatch('handleAdd',{isAdd,food:this.food})
  }
},


}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.cartcontrol
  font-size 0
  &.fade-enter-active, .fade-leave-active
    transition all .3s
  &.fade-enter, .fade-leave-to
    opacity 0  
    transform translateX(.4rem) rotate(180deg)
  .icon-jianhao2
    display inline-block
    padding .16rem
    line-height .64rem
    font-size .48rem
    color #009573
  .icon-jiahao7
    display inline-block
    padding .16rem
    line-height .64rem
    font-size .48rem
    color #009573
  .cart-count
    display inline-block
    padding .16rem
    line-height .64rem
    font-size .48rem  
    

    

    
</style>