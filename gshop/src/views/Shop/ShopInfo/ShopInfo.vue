<template>
  <div class="infoContainer" ref="infoContainer">
    <div class="infoContent" >
       <div class="infoHead">
         <h1 class="infoHead_title">配送信息</h1>
         <p class="infoHead_des">
           <span>{{info.description}}</span>
           <span>由商家提供配送</span>
           <span>约{{info.deliveryTime}}分钟送达</span>
           <span>距离{{info.distance}}</span>
          
         </p>
         <p class="infoServers">配送费￥{{info.deliveryPrice}}</p>
       </div>
       <div class="infoServer">
         <h1 class="infoServer_head">配送信息</h1>
         <ul class="ulContent">
           <li class="info-item" v-for="(item,index) in info.supports" :key="index">
             <span :class="classArr[item.type]">{{item.name}}</span>
             <span>{{item.content}}</span>
           </li>
         </ul>
       </div>
       <div class="infoBanner">
         <h1 class="infoBannerTitle">商家实景</h1>
         <div class="bannerImg" ref="banner">
           <ul class="banerUl">
             <li v-for="(item,index) in info.pics" :key="index">
               <img :src="info.pics[index]" alt="">
             </li>
            
           </ul>
         </div>
       </div>
       <div class="infoBottom">
         <h1 class="infoBottomTitle">商家信息</h1>
          <ul class="infoBottomContent">
            <li class="info-items">
              <span>品类</span>
              <span>{{info.category}}</span>
            </li>
            <li class="info-items">
              <span>商家电话</span>
              <span>{{info.phone}}</span>
            </li>
            <li class="info-items">
              <span>地址</span>
              <span>{{info.address}}</span>
            </li>
            <li class="info-items">
              <span>营业时间</span>
              <span>{{info.workTime}}</span>
            </li>
            
          </ul>
       </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import BScroll from 'better-scroll'
export default {
data() {
return {
 classArr:['red','green','blue']
}
},
mounted () {

 if(!this.info){
   return
 }
  this._initBscroll()
  
},
computed:{
  ...mapState(['info'])
},
methods: {
_initBscroll(){
this.$nextTick(()=>{

      new BScroll(this.$refs.infoContainer)
      new BScroll(this.$refs.banner,{
        scrollX:true,
        click:true
      })
    })
}
},
watch: {
  info(value){
    this._initBscroll()
  }
}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.infoContainer
  width 100%
  position fixed
  bottom  0
  left 0
  top 5.6rem
  box-sizing border-box
  overflow hidden
  .infoContent
    .infoHead
      width 100%
      margin-bottom .266667rem
      background #fff
      padding .48rem
      box-sizing border-box
      .infoHead_title
        font-size .426667rem
        font-weight 700
      .infoHead_des
        margin .266667rem 0rem
        color #ccc 
        font-size .373333rem
        >span:first-child
          background blue
          color #fff 
          padding 0rem .133333rem
          border-radius .053333rem
      .infoServers
        color red
        font-size .373333rem
    .infoServer
      background #fff
      padding .48rem
      box-sizing border-box
      .infoServer_head
        font-size .426667rem
        font-weight 700
      .ulContent
        margin-top .266667rem
        .info-item
          font-size .373333rem
          line-height .8rem
          >span:first-child
            padding 0rem .08rem
            border-radius .053333rem
            color #fff
          .red
            background #6AAF42
          .green
            background #F8826C 
          .blue
            background #F58C49 
    .infoBanner
      width 100%
      background #fff
      padding .48rem
      box-sizing border-box
      margin-top .266667rem
      .infoBannerTitle
        font-size .426667rem
        margin-bottom .266667rem
        font-weight 700
      .bannerImg
        width 100%
        overflow hidden
        .banerUl
          height 2.133333rem
          width 200%
          >li  
            float left
            width 3.2rem
            height 2.133333rem
            margin-left .133333rem
            img 
              width 100%
              height 100%
    .infoBottom 
      margin-top .266667rem
      padding .48rem
      box-sizing border-box 
      background #fff
      .infoBottomTitle
        font-size .426667rem
        font-weight 700 
      .infoBottomContent 
        .info-items
          line-height 1.333333rem
          font-size .373333rem
          color #000
          height 1.333333rem
          >span:first-child
            float left
            color #000
          >span:last-child
            float right

          




</style>