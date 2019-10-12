<template>
  <div class="banner">
   <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in filterArr" :key="index">
           <a href="" v-for="(food,index) in item" :key="index">
						 <img v-lazy="base_url+food.image_url" alt="">
						 <span>{{food.title}}</span>
					 </a>
					 
				</div>
        
    </div>

    <div class="swiper-pagination"></div>
    
</div>

  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
	data(){
		return{
			base_url:'https://fuss10.elemecdn.com'
		}
	},
mounted () {
	this.getFood()
},
methods: {
 ...mapActions(['getFood'])
},
computed:  {
 ...mapState(['foodlist']),
 filterArr(){
  const {foodlist} =this
  const arr=[]
  let brr=[]
  foodlist.forEach(item => {

	 if(brr.length===8){
		 brr=[]
	 }
	 if(brr.length===0){
		 arr.push(brr)
	 }
	  brr.push(item)
  });
  return arr
 }
},
watch:{
	// 监视state中的数据发生改变
	// 异步显示数据有两步：1.先初始化数据 2.发送请求 显示最终的数据
	// 监视到步骤2 就触发foodlist函数
 foodlist(value){

	 this.$nextTick(()=>{
	 
	 new Swiper('.swiper-container',{
		autoplay: true,
    pagination: {
    el: '.swiper-pagination',
  }

	 })


	 })

 }
 

}



}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.banner
	width 100%
	height 5.333333rem
	margin-top 1.2rem
	background #fff
	.swiper-container
		width  100%
		height 100%
		background #fff
		.swiper-wrapper
			width 100%
			height 100%
			.swiper-slide
				display  flex
				flex-flow wrap
				& >a 
					flex-basis 25%
					display flex
					justify-content center
					align-items center
					flex-flow column
					margin .133333rem 0px
					font-size .373333rem
					&>img 
						width 1.6rem
						height 1.6rem
					



</style>