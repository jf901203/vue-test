<template>

<div>
	<transition name="fade">
	<div v-if="isDetailShow">
 <div class="detail-content">
      <img v-lazy="food.image" alt="">
			<p class="des" v-if="food.info">主料:{{food.info}}</p>
			<p class="detail-titel">{{food.name}}</p>
			<p class="detail-shell">
				<span>月售{{food.sellCount}}份</span>
				<span>好评{{food.rating}}%</span>
			</p>
			<p class="detail-price">￥{{food.price}}</p>
     
			<p class="back" @click="handleHead">
			  <i class="iconfont icon-ios-arrow-back"></i>
		  </p>
			<div>
				<shopCart :food="food" class="shopCart"/>
			</div>
		</div>
    <div class="detail-containers" @click="handleHead">
		 	 
  </div>

</div>
	</transition>
</div>
 
</template>

<script>
import shopCart from 'components/shopCart/shopCart'
export default {
data() {
return {
 isDetailShow:false
}
},
mounted () {

},
props:['food'],
methods: {
	handleHead(){
		this.isDetailShow=!this.isDetailShow
	}
},
components:{
	shopCart
}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.detail-containers
	position fixed
	left 0
	right 0
	top 0
	bottom 0
	width 100%
	z-index 100
	background rgba(0,0,0,.5)	
.detail-content
	position fixed
	top 50%
	left 50%
	transform translate(-50%,-50%)
	background #fff
	border-radius .08rem
	z-index 101
	&.fade-enter-active, &.fade-leave-active
		transition opacity .5s
	&.fade-enter, &.fade-leave-active	
		opacity 0 
	img 
		width 8rem
		height 8rem
	.des	
		font-size .373333rem
		position absolute
		top 7rem
		color #fff
	.detail-titel
		width 100%	
		font-size .48rem
		font-weight 700
	.detail-shell
		width 100%
		color #333
		font-size .373333rem	
	.detail-price
		font-size .426667rem
		color red
	p		
		margin .266667rem
	.back
		position absolute
		top 0
		color #fff	
		width 20%
		margin 0
		padding 0
		.icon-ios-arrow-back
			font-size .8rem
			display inline-block
	.shopCart	
		position absolute
		bottom .266667rem
		right .266667rem

</style>