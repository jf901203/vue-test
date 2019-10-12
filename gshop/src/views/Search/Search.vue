<template>
  <div>
    <Header title="搜索">
      <span slot="left" class="left iconfont icon-ios-arrow-back" @click="goMiste"></span>
      <span style="opacity:0;" slot="right" class="left iconfont icon-ios-arrow-back"></span>
    </Header>
    <form class="search_form" @submit.prevent="toSearch">
      <input type="search" name="search" v-model="keyword" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" class="search_submit">
    
    </form>
    
    <div class="searchContainer" v-if="!showText">
      <ul class="searchContent">
        <router-link tag="li" :to="{path:'/describe',query:{id:item.id}}" class="search-item" v-for="(item,index) in searchList" :key="index">
          <div class="avatarImg">
            <img v-lazy="imgBaseUrl+item.image_path" alt="" class="avatar">
          </div>
          <div class="searchDes">
            <div class="foodName">{{item.name}}</div>
            <div class="foodCount">月售{{item.recent_order_num}}单</div>
            <div class="foodAddr">{{item.float_minimum_order_amount}}元起送/距离{{item.distance}}</div>
          </div>
        </router-link>
        
      </ul>
    </div>
    <div class="showContainer" v-else>
      抱歉!暂无数据
    </div>
  </div>
</template>

<script>
import Header from 'components/Header/Header'
import {mapActions,mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  data(){
    return{
      keyword:'',
      imgBaseUrl: 'http://cangdu.org:8001/img/',
      showText:false
    }
  },
computed:{
  ...mapState(['searchList'])
},  
methods:{
  // 对象方法的简写方式
  goMiste(){
  this.$router.replace('/miste')
  },
toSearch(){
  // 去除前后空格
  const keyword =this.keyword.trim()
  if(keyword){
     
    this.$store.dispatch('getSearchShop',keyword)
  }
 

},

_initScroll(){
  this.$nextTick(()=>{
    new BScroll('.searchContainer',{
      scrollY:true,
      click:true
    })
  })
}


},
watch: {
  searchList(val){
     if(!val.length){
       this.showText=true
     }else{
       this.showText=false
       this._initScroll()
     }
     
  }

},
components:{
  Header
}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.search_form
  margin-top 1.2rem
  background #ffffff
  padding .32rem .213333rem
  box-sizing border-box
  height 1.6rem
  position fixed
  left  0
  right 0

  input 
    height .933333rem
    padding 0 .106667rem
    border-radius .053333rem
    font-weight bold
    outline none 
    font-size .373333rem
    &.search_input
      float left
      width 79%
      border .106667rem solid #f2f2f2
      font-size .373333rem
      color #333
      background-color #f2f2f2
    &.search_submit
      float right 
      width 18%
      border .106667rem solid #02a774
      font-size .426667rem
      color #ffffff
      background-color #02a774
.showContainer
  padding 0rem .213333rem
  box-sizing border-box
  position fixed
  left 0
  right 0
  top 4rem
  display flex
  justify-content center 
  font-size .373333rem
.searchContainer
  padding 0rem .213333rem
  box-sizing border-box
  position fixed
  left 0
  right 0
  bottom 1.333333rem
  top 2.933333rem
  overflow hidden
  background #fff
  .searchContent
    height auto
    background #fff
    .search-item
      display flex
      position relative
      padding .133333rem 0rem
      color #999
      &:not(:last-child):after
        content " "
        width 100%
        height .026667rem
        background #cccccc
        position absolute
        bottom 0
      .avatarImg
        .avatar
          width 1.6rem
          height 1.6rem
      .searchDes
        flex 1
        margin-left .133333rem
        font-size .373333rem
        display flex
        flex-flow column
        align-items flex-start
        justify-content center 
        .foodCount
          margin .133333rem 0rem 
        .foodName
          max-width 5.333333rem
          text-overflow ellipsis
          overflow hidden
          white-space nowrap


</style>