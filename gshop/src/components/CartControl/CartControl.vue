<template>
  <div>
		<div class="cart" @click="fadeMask">
			
			<div class="cart-che">
				<span></span>
				<span :class="{'bg':getCount}"></span>
				<span>
					<i class="iconfont icon-tianchongxing-" :class="{'iconfont-bg':getCount}"></i>
				</span>
				<span v-if="getCount">{{getCount}}</span>
			</div>
			<div class="cart-money">
				<span>￥{{getPrice}}</span>
				<span>另需配送费4元</span>
			</div>
			<div class="cart-go" :class="{goSettlemen:spreadPrice<0}">
				{{spreadPrice>0?`还差${spreadPrice}元`:'去结算'}}
			</div>
			
		</div>
	<cartList ref="fadeBox"/>
	</div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import cartList from 'components/cartList/cartList'
export default {
data() {
return {
 originPrice:20
}
},

computed:{
	...mapGetters(['getCount','getPrice']),
	...mapState(['info']),
	spreadPrice(){
	 const {getPrice,info}=this
	 const {minPrice}=this.info
	 return minPrice-getPrice
	}
},
methods: {
  fadeMask(){
		this.$refs.fadeBox.handleFade()
	}
},
components: {
	cartList
}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.cart
	height 1.226667rem
	width 100%;
	background #141D27
	position fixed
	bottom 0
	display flex
	z-index 102
	.cart-che
		flex-basis 20%
		position relative
		>span 
			position absolute
			&:nth-of-type(1)
				display inline-block
				width 1.493333rem
				height 1.493333rem
				background #141D27
				border-radius 50%
				top -0.32rem
				left 50%
				transform translateX(-50%)
			&:nth-of-type(2)
				width 1.173333rem
				height 1.173333rem
				background #2B343C
				border-radius 50%	
				left 50%
				top 50%
				transform translate(-50%,-60%)
				&.bg
					background #663399
			&:nth-of-type(3)
				left 50%
				top 50%
				transform translate(-50%,-50%)
				font-size .533333rem
				.icon-tianchongxing-
					font-size .666667rem
					color #80858A
					&.iconfont-bg
						color #00CC99
			&:nth-of-type(4)
				left 60%
				top -35%
				background red	
				padding .053333rem .133333rem
				font-size .266667rem	
				border-radius .16rem
				color #fff

	.cart-money
		flex 1
		display flex
		flex-flow column
		font-size .533333rem
		>span:nth-of-type(1)
			color #fff
			font-weight 700
			margin-top .08rem
		>span:nth-of-type(2)
			color red	
			font-size .32rem
			color #80858A
	.cart-go
		flex-basis 30%
		font-size .373333rem
		font-weight 700
		color #fff
		display flex
		justify-content center
		align-items center
		background #2B333B
		&.goSettlemen
			background #CC6633
			color #fff

	

</style>