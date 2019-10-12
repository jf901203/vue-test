<template>
  <div>
      <header @click="goMiste">
        <i class="iconfont icon-ios-arrow-back"></i>
      </header>
      <section class="login_head">
        饿了么外卖
      </section>
      <section class="login_on">
        <span :class="{on:isShow}" @click="login">短信登入</span>
        <span :class="{on:!isShow}" @click="login">密码登入</span>
      </section>
      <form  @submit.prevent="loginEnter">
      <section class="login_input" :class="{on:isShow}">
        <p class="sms_code">
          <input type="text" class="text" placeholder="手机" v-model="phone">
          <button :disabled="!nicePhone" class="code_sms" :class="{nice:nicePhone}" @click.prevent="getCode">
            
            {{computedTime?`已发送(${computedTime}s)`:'获取验证码'}}
          </button>
        </p>
        <p class="sms_code">
          <input type="text" class="text" placeholder="验证码" v-model="code">
        </p>
        <p class="login_des">温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
             <a href="javascript:;">
               
               《用户协议》
             </a>
               
               </p>
      </section>
      <section class="login_pwd" :class="{on:!isShow}">
       
       <input type="text" class="pwd_name" placeholder="手机/邮箱/用户名" v-model="name">
       <div class="pwd_pass">
         <input type="password" class="pwd_names" autocomplete placeholder="密码" v-model="pwd" v-if="hide">
         <input type="text" class="pwd_names" placeholder="密码" v-model="pwd" v-else>
         <div class="switch" @click="trans" :class="hide?'on':'off'">
           <span :class="hide?'off':'on'">
             {{hide?'...':'abc'}}
           </span>
           <span class="switch_on" :class="{right:transRight}"></span>
         </div>
       </div>
       <p class="pwd_pass">
         <input type="text" class="pwd_names" placeholder="验证码" v-model="captcha">
         <img src="http://localhost:4000/captcha" ref="captcha" alt="" class="captcha" @click="getCaptcha">
       </p>

      </section>

      <section class="login_enter">
        <button class="login_submit">登录</button>
      </section>
</form>
<section class="about">
  关于我们
</section>

  </div>
</template>

<script>
import { MessageBox  } from 'mint-ui';
import {reqPwd,reqSms,reqPhone} from 'api'
import { mapActions,mapState } from 'vuex';
export default {
  // 收集数据进行数据绑定
  data(){
    return{
      // 切换登入方式
      isShow:true,  //登入方式
      captcha:'', //图形验证码
      name:'', //用户名
      pwd:'', //密码
      phone:'',//手机号码
      code:'',//短信验证码
      computedTime:0,//一开始并没有计时
      transRight:false,//滑块
      hide:true,//是否显示密码

    }
  },
computed: {
  nicePhone(){
    
   return  /^1[3456789]\d{9}$/.test(this.phone)
    
  },
  ...mapState(['userInfo'])

},
methods:{
  
  goMiste(){
    if(this.userInfo._id){
      this.$router.replace('/miste')
    }else{
      MessageBox('提示', '请先登入');
    }
  },
  trans(){
    this.transRight=!this.transRight
    this.hide=!this.hide
  },
  login(){
    this.isShow=!this.isShow
  },
  // 获取svg验证码
  getCaptcha(){
    this.$refs.captcha.src='http://localhost:4000/captcha?times='+Date.now()
  },

  // 短信验证码
  async getCode(){
    // 当前没有计时才启动计时器
    if(!this.computedTime){
    this.computedTime=30
   this.setId=setInterval(() => {
      this.computedTime--
      if(this.computedTime===0){
        clearInterval(this.setId)
      }
    }, 1000);
      // 当前正在计时 是不会发送请求的  刚刚开始计时的时候才发
      const {phone}=this
      const res=await reqPhone(phone)
      if(res.code===1){
        MessageBox('提示', '获取短信失败');
        if(this.computedTime){
         clearInterval(this.setId)
         this.computedTime=0
          this.setId=0
        }
        
      }
    }
    
  

  },

  // 登入
  async loginEnter(){
  let res
  if(this.isShow){ //短信登入
     const {phone,code,nicePhone}=this

    //  前台验证
     if(!nicePhone){
       MessageBox('提示', '手机号不正确');
       return;
     }
     if(!/^\d{6}$/.test(code)){
        
        MessageBox('提示', '验证码必须6位');
        return;
     }
      // 发送接口请求函数 将用户信息传递给后台 把用户信息存储于session中
      res=await reqSms({phone,code})
  }else{
    
   const {name,pwd,captcha}=this
   //  前台验证
   if(!name){
     MessageBox('提示', '用户名必须');

     return;
   }
   if(!pwd){
     MessageBox('提示', '密码必须');
     
     return;
   }
   if(!captcha){
     MessageBox('提示', '验证必须');
    
     return;
   }
   // 发送接口请求函数 将用户信息传递给后台 把用户信息存储于session中
    res=await reqPwd({name,pwd,captcha})
  }
 
  
  // 无论成功或者失败
  if(this.computedTime){
    clearInterval(this.setId)
    this.computedTime=0
    this.setId=0
  }
  if(res.code===0){
    // 存储用户信息
   const user=res.data
    // 把user用户信息保存到vuex状态管理中
   this.$store.dispatch('recordUserInfo',user)  
   this.$router.replace('/profile')
  }else{
    const msg=res.msg
    this.getCaptcha()
    MessageBox('提示', msg);
  }

   
  },

}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
header
  height 1.333333rem
  width 100%
  padding-left .266667rem
  box-sizing border-box
  touch-action none
  .icon-ios-arrow-back
    color #009475
    font-size .8rem
    line-height 1.333333rem
.login_head
  font-size 1.066667rem
  font-weight 700
  text-align center
  margin-top .533333rem
  color #009475  
.login_on
  margin-top 1.066667rem
  text-align center
  >span 
    font-size .426667rem
    padding .213333rem 0rem
    color #ccc
    &.on
      font-weight 700
      color #009475
      border-bottom 2px solid #009475
.login_input
  width 100%
  margin-top .8rem
  padding 0rem .8rem
  box-sizing border-box
  text-align center 
  display none
  &.on
    display block
  .sms_code  
    position relative
    .code_sms
      position  absolute
      font-size .266667rem
      right .533333rem
      top .453333rem
      color #ccc
      border none 
      background #F5F5F5
      &.nice
        color #000
    .text
      width 90%
      border-radius .133333rem
      background #F5F5F5
      border 1px solid #ccc
      height .933333rem
      margin-bottom .266667rem
      font-size .373333rem
  .login_des
    font-size .373333rem
    color #009475
    margin-top .266667rem
    text-align left
    line-height .533333rem
.login_pwd
  width 100%
  margin-top .8rem
  padding 0rem .8rem
  box-sizing border-box
  text-align center 
  display none
  &.on
    display block
  .pwd_name
    width 90%
    border-radius .133333rem
    background #F5F5F5
    border 1px solid #ccc
    height .933333rem
    margin-bottom .266667rem
    font-size .373333rem  
  .pwd_pass
    position relative
    .pwd_names
      width 90%
      border-radius .133333rem
      background #F5F5F5
      border 1px solid #ccc
      height .933333rem
      margin-bottom .266667rem
      font-size .373333rem 
    .switch
      border 1px solid #ccc
      position absolute
      font-size .266667rem
      right .533333rem
      height .4rem
      width 1.333333rem 
      top .533333rem
      border-radius .266667rem
      color  #fff
      &.off 
        background #4BD870
      &.on
        background   
      .switch_on
        position absolute
        width .373333rem
        height .373333rem
        background #F5F5F5
        border 1px solid #F5F5F5
        border-radius 50%
        left 0
        box-shadow .053333rem .053333rem .133333rem #666
        transition transform .3s
        &.right
          transform  translateX(.933333rem)
      .off
        color #999

        &.on
          color #fff
    .captcha
      position absolute
      right .266667rem
      width 3.466667rem
      height .933333rem
      top .266667rem
.login_enter
  width 100%
  margin-top .533333rem
  .login_submit  
    background #4BD870
    width 80%
    margin-left 10%
    border-radius .133333rem
    font-size .426667rem
    height .933333rem
    color #fff
    font-size .48rem
    font-weight 700
    text-align center
    line-height .933333rem
    display inline-block
    border 0
.about
  width 100%
  text-align center
  margin-top .533333rem
  font-size .48rem
  color #ccc
</style>