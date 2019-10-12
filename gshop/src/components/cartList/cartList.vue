<template>

<div >
<transition name="fade">
  <div class="shopcart-list" v-show="listShow">
    <div class="list-header">
      <h1 class="title">购物车</h1>
      <span class="empty" @click="handleClear">清空</span>
    </div>
    <div class="list-content" ref="contentWraper">
      <ul>
        <li class="food" v-for="(food,index) in cartFood" :key="index">
          <span class="name">{{food.name}}</span>
          <div class="price"><span>￥{{food.price}}</span></div>
          <div class="cartcontrol-wrapper">
             <shopCart :food="food"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </transition>
  <transition name="box">
  <div class="list-mask" v-show="listShow" @click="handleFade"></div>
  </transition>
</div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
import shopCart from 'components/shopCart/shopCart'
import { MessageBox } from 'mint-ui'
import BScroll from 'better-scroll'
export default {
data() {
return {
  isShow:false
}
},
computed:{
  ...mapState(['cartFood']),
  
  listShow(){
     const {cartFood}=this
     if(cartFood.length===0){
      this.isShow=false
       return false
     }
     
     if(this.isShow){
      //  当显示购物车列表的时候就开始创建BScroll实例
       this._scroll()
     }
     return this.isShow
  }
},
methods: {
  handleFade(){
    const {cartFood}=this
    if(cartFood.length>0){
      this.isShow=!this.isShow
    }
    
  },
  handleClear(){
    MessageBox.confirm('你确定执行此操作吗?').then(action => {
       this.$store.dispatch('clearCart')
       this.isShow=false
      });
  },
_scroll(){

  this.$nextTick(()=>{
    //  创建一个单列对象 如果有就不创建 没有就创建
     if(!this.scroll){
      //contentWraper 列表一直在改变 所以要用单例
      this.scroll= new  BScroll(this.$refs.contentWraper,{
        click:true 
        })

     }else{
      //  重新计算高度
       this.scroll.refresh()
       
     }
      
  })
}
},

// watch: {
   
//    cartFood(val){
     
//      this._scroll()

//    }

// },
components:{
  shopCart
},


}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.shopcart-list
  position absolute
  left 0
  bottom 0
  z-index 50
  width 100%
  background #fff
  padding .48rem
  transform translateY(-16%)
  box-sizing border-box
  &.fade-enter-active, &.fade-leave-active
    transition transform .5s
  &.fade-enter, &.fade-leave-active
    transform translateY(0%)  
  .list-header
    display flex
    font-size .373333rem
    line-height 1.066667rem
    border-bottom 1px solid #ccc
    .title
      flex 1
      border-right 1px solid #ccc
    .empty
      flex-basis 20% 
      text-align center
      color blue
  .list-content
    max-height 5.786667rem
    overflow hidden
    .food
      line-height 1.333333rem
      font-size .373333rem
      height 1.333333rem
      position relative
      border-bottom 1px solid #ccc
      &:last-child
        border none
      .name
        font-size .373333rem
      .price
        position absolute
        right  2.4rem 
        top 0
        color red  
      .cartcontrol-wrapper
        position absolute
        top .133333rem
        right 0
.list-mask
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  backdrop-filter blur(.266667rem)
  opacity 1
  background rgba(7, 17, 27, 0.6)
  &.box-enter-active, &.box-leave-active
    transition all .5s
  &.box-enter, &.box-leave-active
    opacity 0  
    background rgba(7, 17, 27, 0)
    
  
</style>