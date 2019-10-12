<template>
  <div>
   <Header title="我的"/>
   <div class="avatar_loade">
      <div>
        <img src="./img/2.jpg" alt="">
      </div>
      <router-link tag="div" :to="userInfo._id?'/miste':'/login'">
        <p class="login_re" v-if="!userInfo.phone">{{userInfo.name || ' 登入/注册'}}</p>
        <p class="tel_ph"><span class="iconfont icon-shouji01"></span>{{userInfo.phone  || '暂无绑定手机号'}}</p>
      </router-link>
      <div>
        <i class="iconfont icon-ios-arrow-forward"></i>
      </div>
   </div>
   <section class="profile_info">
      <div>
        <span class="info_data">
          0.00 
          <span class="yuan">元</span> 
        </span>
        <span class="yue">我的余额</span>
      </div>
      <div>
        <span class="info_data">
          0
          <span class="yuan">元</span> 
        </span>
        <span class="yue">我的优惠</span>
      </div>
      <div>
        <span class="info_data">
          0 
          <span class="yuan">分</span> 
        </span>
        <span class="yue">我的积分</span>
      </div>
   </section>
   <section class="profile_my_order">
    <ul>
      <li class="profile_my_list">
        <span>
          <i class="iconfont icon-wode-dingdan"></i>
        </span>
        <span class="profile_my_list_order">我的订单</span>
        <span>
          <i class="iconfont icon-ios-arrow-forward"></i>
        </span>
      </li>
      <li class="profile_my_list">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <span class="profile_my_list_order">积分商城</span>
        <span>
          <i class="iconfont icon-ios-arrow-forward"></i>
        </span>
      </li>
      <li class="profile_my_list">
        <span>
          <i class="iconfont icon-ziyuan5"></i>
        </span>
        <span class="profile_my_list_order">会员</span>
        <span>
          <i class="iconfont icon-ios-arrow-forward"></i>
        </span>
      </li>
     
    </ul>   
    
    </section>
    <section class="profile_my_order">
      <ul>
      <li class="profile_my_list">
        <span>
          <i class="iconfont icon-duomeitiicon-"></i>
        </span>
        <span class="profile_my_list_order">服务中心</span>
        <span>
          <i class="iconfont icon-ios-arrow-forward"></i>
        </span>
      </li>
    </ul>   
    </section>
    <section v-if="userInfo._id">
      <mt-button type="primary" class="loginout"  @click.native="handleClick">
        退出登入
      </mt-button>
    </section>
  </div>
</template>

<script>
import Header from 'components/Header/Header'
import {mapState,mapActions} from 'vuex'
import { MessageBox,Toast  } from 'mint-ui';
export default {
  data(){
    return{
      
    }
  },
methods:{
 handleClick(){
   MessageBox.confirm('确定执行此操作?').then(
     action => {
     this.$store.dispatch('getLoginOut')
     Toast({
        message: '操作成功',
        iconClass: 'icon icon-success'
      });
     },
     action=>{
       console.log('点击了取消')
     }


)
 }
},
 mounted(){
 
 },
 computed:{
  ...mapState(['userInfo'])
 },
 components:{
   Header
 }
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
 @import '../../common/stylus/mixins.styl'
.avatar_loade
  width 100%
  margin-top 1.253333rem
  background #009475
  display flex
  padding .266667rem
  box-sizing border-box
  &>div:nth-of-type(1)
    color #fff
    flex-basis 20%
    >img 
      width 2.133333rem
      height 2.133333rem
      border-radius 50%
  &>div:nth-of-type(2) 
    flex 1
    margin-left .266667rem 
    display flex
    flex-flow column
    justify-content center
    .login_re
      font-size .48rem
      font-weight 700
      color  #ffffff
      margin-bottom .133333rem
    .tel_ph
      font-size .373333rem
      color #ffffff  
      .icon-shouji01
        font-size .373333rem
  &>div:nth-of-type(3)
    flex-basis 15%
    display flex
    justify-content center
    align-items center
    color #ffffff
    font-size .426667rem   
.profile_info
  margin-top .266667rem
  background #fff 
  display flex   
  &>div:nth-of-type(1)
    flex-basis 33%
    right-border-1px(#ccc)
    display flex
    flex-flow column
    font-size .32rem
    padding .266667rem 0rem
    &>span 
      display flex
      width 100%
      justify-content center
      align-items center
      &.info_data
        font-size .8rem
        font-weight 700
        margin-bottom .266667rem
        color #f90
        .yuan
          font-size .32rem
          color red
      &.yue
        font-size .373333rem
        font-weight 700
        color #ccc    
  &>div:nth-of-type(2)
    flex-basis 33%
    right-border-1px(#ccc)
    display flex
    flex-flow column
    font-size .32rem
    padding .266667rem 0rem
    &>span 
      display flex
      width 100%
      justify-content center
      align-items center
      &.info_data
        font-size .8rem
        font-weight 700
        margin-bottom .266667rem
        color #f90
        .yuan
          font-size .32rem
          color red
      &.yue
        font-size .373333rem
        font-weight 700
        color #ccc  
  &>div:nth-of-type(3)
    flex-basis 33%
    display flex
    flex-flow column
    font-size .32rem
    padding .266667rem 0rem
    &>span 
      display flex
      width 100%
      justify-content center
      align-items center
      &.info_data
        font-size .8rem
        font-weight 700
        margin-bottom .266667rem
        color #f90
        .yuan
          font-size .32rem
          color red
      &.yue
        font-size .373333rem
        font-weight 700
        color #ccc     

.profile_my_order
  margin-top .266667rem
  padding 0rem .266667rem
  box-sizing border-box
  background #fff
  .profile_my_list
    font-size .48rem
    border 1px solid blue
    height 1.333333rem
    line-height 1.333333rem
    bottom-border-1px(#ccc)
    &:last-child
      border 0
    .profile_my_list_order
      color #ccc
    .icon-wode-dingdan
      font-size .426667rem  
    .icon-ios-arrow-forward
      float right
      padding 0rem .266667rem
      color #ccc
      font-size .426667rem
.loginout
  background red    
  width 80%
  margin-left 10%
  margin-top .266667rem
  font-size .426667rem
  




</style>