<template>
  <div class="ratingContainer">
      <div class="ratingsContent">
        <section class="ratingHead">
        <div class="ratingHead-corde">
          <div>{{info.score}}</div>
          <div>综合评分</div>
          <div>高于周边商家{{info.rankRate}}%</div>
        </div>
        <div class="ratingHead-start">
          <div>
            <span>服务态度</span>
            <span><Start size="36" :code="info.serviceScore"/></span>
            <span>{{info.serviceScore}}</span>
          </div>
          <div>
            <span>商品评价</span>
            <span><Start size="36" :code="info.foodScore"/></span>
            <span>{{info.foodScore}}</span>
          </div>
          <div>
            <span>送达时间</span>
            <span>{{info.deliveryTime}}分钟</span>
            <span></span>
          </div>
        </div>
      </section>
      <section class="ratingContent">
        <div class="rating_text">
          <span :class="{ratingsBack:selectType==2}" @click="handleFilter(2)">全部{{ratings.length}}</span>
          <span :class="{ratingsBack:selectType==0}" @click="handleFilter(0)">满意{{reDuceRatings}}</span>
          <span :class="{ratingsBack:selectType==1}" @click="handleFilter(1)">不满意{{ratings.length-reDuceRatings}}</span>
        </div>
        <div class="rating_icon">
          <span class="iconfont icon-finish" :class="{iconOff:isShow}" @click="handleShow"></span>
          <span class="rating_icon_des" :class="{iconOff:isShow}">只看有内容的评价</span>
          
        </div>
      </section>
      <section class="ratingInfo">
        <div class="ratings_wraper">
          <ul class="ratings_content">
            <li class="rating_item" v-for="(item,index) in fliterRatings" :key="index">
              <div class="rating_avatar">
                <img :src="item.avatar" alt="">
              </div>
              <div class="ratings_text">
                <h1 class="ratings_title">{{item.username}}</h1>
                <div class="ratings_start"><Start size="24" :code="item.score"/></div>
                <div class="rating_text">
                  {{item.text}}
                </div>
                <div class="ratings_recoment">
                   <span class="iconfont" :class="item.rateType===0?'icon-dianzan00':'icon-dianzan2'" ></span>
                   <button v-for="(it,index) in item.recommend" :key="index">{{item.recommend[index]}}</button>
                   
                </div>
                <div class="ratings_time">
                   {{item.rateTime | formatDate}}
                 </div>
              </div>
            </li>
             
          </ul>
        </div>
      </section>
      </div>
  </div>

</template>

<script>
import Start from 'components/Start/Start'
import {mapState,mapActions,mapGetters} from 'vuex'
import BScroll from 'better-scroll'
import moment from 'moment'
export default {
data() {
return {
  selectType:2,
  isShow:false
}
},
mounted () {
  this.reRatings()

},
computed:{
 ...mapState(['ratings','info']),
 ...mapGetters(['reDuceRatings']),
 fliterRatings(){
   let {ratings,selectType,isShow} =this
  //  filter返回 true的新数组
   return ratings.filter((item)=>{
     const {text,rateType}=item
     return (selectType===2||rateType===selectType) && (!isShow || text.length>0)
   })
 }
},
methods: {
  handleFilter(type){
    this.selectType=type
  },
  reRatings(){
    // 数据更新就执行回调函数
    this.$store.dispatch('getRatings', ()=>{
      this.$nextTick(()=>{
        this.scroll = new BScroll('.ratingContainer',{
                scrollY: true,
                click: true
            })
      })
  })
  },
  handleShow(){
    this.isShow=!this.isShow
  }

},
filters:{
 
 formatDate(value){
   return moment(value).format('YYYY-MM-DD')

 }


},

components:{
  Start
}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.ratingContainer
  position fixed
  top 5.6rem
  left  0
  bottom 0
  overflow hidden
  width 100%
  .ratingHead
    width 100%
    display flex
    background #fff
    padding 0rem .48rem
    box-sizing border-box
    margin-bottom .266667rem
    .ratingHead-corde
      flex-basis 40%
      font-size 0
      display flex
      flex-flow column
      justify-content center
      align-items center
      padding .48rem 0rem
      >div:nth-of-type(1)
        font-size .533333rem
        color red
        font-weight 700
      >div:nth-of-type(2)
        font-size .426667rem
        color #000
        margin .266667rem 0rem
      >div:nth-of-type(3)
        font-size .32rem
        color #999 
    .ratingHead-start
      flex 1
      font-size .373333rem
      display flex
      flex-flow column
      justify-content center
      >div:nth-of-type(1)
        display flex
        >span 
          display flex
          justify-content center
          align-items center
          &:nth-of-type(2)
            flex 1
          &:last-child
            color red   
      >div:nth-of-type(2) 
        margin .266667rem 0rem
        display flex
        >span 
          display flex
          justify-content center
          align-items center
          &:nth-of-type(2)
            flex 1
          &:last-child
            color red
      >div:nth-of-type(3)   
        display flex
        >span 
          display flex
          justify-content center
          align-items center
          &:nth-of-type(2)
            color #999
            flex 1   
  .ratingContent
    padding .48rem
    background #fff
    display flex
    flex-flow column
    font-size 0
    border-bottom .026667rem solid #ccc
    .rating_text
      font-size .373333rem
      >span 
        width 2.133333rem
        display inline-block
        height 1.066667rem
        text-align center
        line-height 1.066667rem
        background #DCDCDD
        &.ratingsBack
          background #009474
          color #fff
    .rating_icon
      font-size .373333rem
      margin-top .533333rem   
      .icon-finish
        color #ccc
        &.iconOff
          color #009474
      .rating_icon_des
        color #ccc   
        &.iconOff
          color #009474
  .ratingInfo
    padding 0rem .48rem  
    background #fff 
    .ratings_wraper
      width 100%
      .rating_item
        display flex
        padding .48rem 0rem
        position relative
        &:not(:last-child):after
          content ' '
          width 100%
          height .026667rem
          position absolute
          background #ccc
          bottom 0
        .rating_avatar
          width .8rem
          height .8rem
          img 
            width 100%
            height 100%
            border-radius 50%
        .ratings_text
          flex 1
          margin-left .266667rem
          display flex
          flex-flow column
          .ratings_title
            font-size .373333rem
          .rating_text
            font-size .373333rem
            margin .266667rem 0rem  
            text-indent .266667rem
            line-height .533333rem
          .ratings_recoment
            font-size 0
            font-size .32rem
            .icon-dianzan00
              color #FFAA11
            .icon-dianzan2
              color #009474  
            button  
              color #999
              margin-top .133333rem
              margin-left .133333rem
          .ratings_time
            position absolute
            right 0
            font-size .32rem    

        




</style>