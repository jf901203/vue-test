<template>

			<div class="shop_list">
			<div class="shop_header">
				<span class="iconfont icon-menu-line"></span>
				<span>附近商家</span>
			</div>
			<div class="shop_container">
				<ul>
					<li v-for="(item,index) in shoplist" :key="index" @click="$router.push('/shop')">
						<a href="javascript:;" class="shop_link">
							<div class="shop_left">
								<img src="./shop/1.jpg" alt="" class="avatar">
							</div>
							<div class="shop_right">
								<div class="shop_head">
									<h4 class="shop_head_title">{{item.name}}</h4>
									<div class="shop_head_text">
										<span v-for="(sup,index) in item.supports" :key="index">{{sup.icon_name}}</span>
										
									</div>
									
								</div>
								<div class="shop_center">
								 <Start size="24" :code="item.rating"/>
									<span class="code">{{item.rating}}</span>
									<span class="order">月售{{item.rating_count}}单</span>
									<span class="present">饿了么专送</span>
								</div>
								<div class="shop_bottom">
									<span class="shop_peisong">￥{{item.float_minimum_order_amount}}元起送/配送费约¥{{item.float_delivery_fee}}</span>
								</div>
							</div>
						</a>
					</li>
					
				</ul>
			</div>
			</div>

</template>

<script>
import Start from 'components/Start/Start'
import {mapActions,mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
data(){
	return{
		imgBaseUrl: 'http://cangdu.org:8001/img/'
	}
},
mounted () {
	this.getShop()
	
},
methods:{
	...mapActions(['getShop'])
},
computed: {
	...mapState(['shoplist'])
},
components:{  
  Start
}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
 @import '../../common/stylus/mixins.styl'

	.shop_list
		width 100%
		margin-top .266667rem
		margin-bottom 1.333333rem
		background #fff
		padding 0 .266667rem
		box-sizing  border-box
		.shop_header
			font-size .373333rem
			padding .133333rem 0rem
			color #999
		.shop_container
			width 100%
			margin-top .266667rem
			&>ul
				width 100%
				&>li
					width 100%
					display flex
					padding .133333rem 0rem
					border-bottom .026667rem solid #f8f8f8
					.shop_link
						display flex
						width 100%
						.shop_left
							flex-basis 20%
							height 2.133333rem
							.avatar
								width 100%
						.shop_right
							flex 1	
							width 100%	
							display flex
							margin-left .266667rem
							flex-flow column
							.shop_head
								width 100%
								margin-bottom .266667rem
								position relative
								.shop_head_title
									color #000
									font-size .48rem
									font-weight 700
									text_ellipsis()
									width 4rem  
									&:before
										content :'品牌'
										font-size .32rem
										background #FFFF99
										padding .053333rem
										margin-right .133333rem
								.shop_head_text
									position absolute
									top -0.533333rem
									right 0
									span 
										font-size .213333rem		
										padding 0rem .026667rem
										border .026667rem solid #f8f8f8
							.shop_center
								width 100%
								.code
									font-size .32rem
									float left
									color red
									margin-left .133333rem
								.order
									font-size .266667rem	
									float left
									margin-left .133333rem
								.present
									font-size .266667rem
									float right
									border 1px solid #f1f1f1
									padding .053333rem
							.shop_bottom
								width 100%
								margin-top .133333rem
								.shop_peisong
									font-size .266667rem
									float left
								


							
								

				



</style>